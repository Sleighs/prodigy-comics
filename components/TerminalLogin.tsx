'use client';
import { useState, useEffect } from 'react';
import '@/styles/TerminalLogin.css';

interface TerminalLoginProps {
  onLoginSuccess: () => void;
}

interface LoginCredential {
  username: string;
  password: string;
}

const TerminalLogin = ({ onLoginSuccess }: TerminalLoginProps) => {
  // Initialize state from localStorage if available
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(() => {
    // Try to get attempts from localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('loginAttempts');
      return stored ? parseInt(stored, 10) : 0;
    }
    return 0;
  });
  const [showTimer, setShowTimer] = useState(() => {
    // Check if we're in a lockout period
    if (typeof window !== 'undefined') {
      const lockoutEnd = localStorage.getItem('lockoutEnd');
      if (lockoutEnd) {
        const endTime = parseInt(lockoutEnd, 10);
        const now = Date.now();
        if (now < endTime) {
          return true;
        } else {
          // Lockout period has ended, clear the storage
          localStorage.removeItem('lockoutEnd');
          localStorage.removeItem('loginAttempts');
          return false;
        }
      }
    }
    return false;
  });
  const [timeLeft, setTimeLeft] = useState(() => {
    // Calculate remaining time if in lockout
    if (typeof window !== 'undefined' && showTimer) {
      const lockoutEnd = localStorage.getItem('lockoutEnd');
      if (lockoutEnd) {
        const endTime = parseInt(lockoutEnd, 10);
        const now = Date.now();
        const remaining = Math.ceil((endTime - now) / 1000);
        return remaining > 0 ? remaining : 300;
      }
    }
    return 300; // 5 minutes in seconds
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const accessLogins = [
    {
      username: 'hammerhand',
      password: 'nostrags'
    }
  ];

  useEffect(() => {
    console.log('SESSION ACCESS', accessLogins[Math.floor(Math.random() * accessLogins.length)])
  }, [])

  // Save attempts to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('loginAttempts', attempts.toString());
    }
  }, [attempts]);

  // Save lockout end time when timer is activated
  useEffect(() => {
    if (showTimer && typeof window !== 'undefined') {
      const endTime = Date.now() + (timeLeft * 1000);
      localStorage.setItem('lockoutEnd', endTime.toString());
    }
  }, [showTimer, timeLeft]);

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (showTimer && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setShowTimer(false);
      setAttempts(0);
      setTimeLeft(300);
      
      // Clear localStorage when lockout ends
      if (typeof window !== 'undefined') {
        localStorage.removeItem('lockoutEnd');
        localStorage.removeItem('loginAttempts');
      }
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [showTimer, timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Verify credentials against the accessLogins array
  const verifyCredentials = (username: string, password: string): boolean => {
    return accessLogins.some(login => 
      login.username === username && login.password === password
    );
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (attempts >= 100) {
      setShowTimer(true);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate network delay
    setTimeout(() => {
      if (verifyCredentials(userId, password)) {
        // Clear attempts on successful login
        setAttempts(0);
        if (typeof window !== 'undefined') {
          localStorage.removeItem('loginAttempts');
          localStorage.removeItem('lockoutEnd');
        }
        onLoginSuccess();
      } else {
        setAttempts(prev => prev + 1);
        setErrorMessage('Invalid credentials. Access denied.');
        
        if (attempts + 1 >= 100) {
          setShowTimer(true);
        }
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="terminal-login-container">
      <div className="terminal-login">
        <div className="terminal-login-header">
          <div className="terminal-login-title">CYBERTECH GLOBAL SECURITY SOLUTIONS</div>
          <div className="terminal-login-subtitle">SECURE TERMINAL ACCESS</div>
        </div>
        
        <div className="terminal-login-content">
          <div className="terminal-login-status">
            {showTimer ? (
              <div className="terminal-login-timer">
                <div className="terminal-login-timer-label">ACCESS LOCKED</div>
                <div className="terminal-login-timer-value">{formatTime(timeLeft)}</div>
                <div className="terminal-login-timer-message">Too many failed attempts. Please wait before trying again.</div>
              </div>
            ) : (
              <div className="terminal-login-attempts">
                <div className="terminal-login-attempts-label">REMAINING ATTEMPTS</div>
                <div className="terminal-login-attempts-value">{100 - attempts}</div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleLogin} className="terminal-login-form">
            <div className="terminal-login-input-group">
              <label htmlFor="userId" className="terminal-login-label">USER ID</label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="terminal-login-input"
                disabled={showTimer || isLoading}
                autoComplete="off"
              />
            </div>
            
            <div className="terminal-login-input-group">
              <label htmlFor="password" className="terminal-login-label">PASSWORD</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="terminal-login-input"
                disabled={showTimer || isLoading}
                autoComplete="off"
              />
            </div>
            
            {errorMessage && (
              <div className="terminal-login-error">{errorMessage}</div>
            )}
            
            <button 
              type="submit" 
              className="terminal-login-button"
              disabled={showTimer || isLoading}
            >
              {isLoading ? 'AUTHENTICATING...' : 'LOGIN'}
            </button>
          </form>
        </div>
        
        <div className="terminal-login-footer">
          <div className="terminal-login-warning">WARNING: Unauthorized access attempts will be logged and reported.</div>
          <div className="terminal-login-version">v1.0.0</div>
        </div>
      </div>
    </div>
  );
};

export default TerminalLogin; 