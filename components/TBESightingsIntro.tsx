'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import '@/styles/TBESightingsIntro.css';
import TerminalLogin from './TerminalLogin';

const TBESightingsIntro = () => {
  const [currentReportIndex, setCurrentReportIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showCloseWarning, setShowCloseWarning] = useState(false);
  const [showRedacted, setShowRedacted] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [typingSpeed, setTypingSpeed] = useState(1); // milliseconds per character
  const [showSpeedOptions, setShowSpeedOptions] = useState(false);
  
  // 5 unique reports for the carousel - much shorter content
  const reports = [
    {
      id: 'tbe-sightings',
      title: 'TBE Sightings Report',
      documentId: 'CGS-SEC-47201',
      content: `CYBERTECH GLOBAL SECURITY SOLUTIONS
T.B.E. SIGHTINGS REPORT
DOCUMENT ID: CGS-SEC-47201   
DATE: 2025-04-25
DISTRIBUTION: Authorized Personnel (Level 7 Clearance and Above)

EXECUTIVE SUMMARY:
Following the 1908 Tunguska Event, operatives recovered anomalous genetic material at Ground Zero. Subsequent analysis identified a unique DNA structure, codename GODSTRAND. Inheritance of GODSTRAND markers have been linked to the emergence of biologically divergent individuals, classified as Terrestrial Biological Entities (T.B.E.s).

T.B.E.s demonstrate a range of nonstandard biological capabilities, posing elevated threats to public safety and environmental stability and global security. Surveillance, suppresion and containment protocols remain active.

WARNING: 
Unauthorized dissemination of this document constitutes a breach of national and international security protocols and is punishable by imprisonment under Articles 17, 22, and 41 of the International Covert Security Accord (ICSA), 2031 revision.`
    },
    {
      id: 'godstrand-side-effects',
      title: 'GODSTRAND Side Effects',
      documentId: 'GL-OOS-0187',
      content: `GOLDSTONE LABORATORIES
GODSTRAND AUGMENTATION: SIDE EFFECTS ANALYSIS
DOCUMENT ID: GL-OOS-0187
DATE: 1999-03-11
DISTRIBUTION: Authorized Personnel (Level 6 Clearance and Above)

EXECUTIVE SUMMARY:
The GODSTRAND is a complex genetic structure encompassing approximately 2 million base pairs. Partial sequencing and experimental integrations under Project WOLFPAK and auxiliary programs have yielded augmentations beyond known human capabilities. However, side effects associated with GODSTRAND integration are catastrophic in nature, with morbidity rates exceeding 83% within five years post-augmentation.

Continued research into stabilization protocols is considered Priority One under Operation [REDACTED]. The GODSTRAND's hyper-complex neural encoding overwhelms human brain architecture, leading to synaptic overload and dissociative identity disorders.`
    },
    {
      id: 'containment-protocols',
      title: 'Containment Protocols',
      documentId: 'CGS-CON-88934',
      content: `CYBERTECH GLOBAL SECURITY SOLUTIONS
T.B.E. CONTAINMENT PROTOCOLS
DOCUMENT ID: CGS-CON-88934
DATE: 2025-01-15
DISTRIBUTION: Authorized Personnel (Level 8 Clearance and Above)

EXECUTIVE SUMMARY:
Standard containment protocols have proven ineffective against T.B.E.s. New protocols developed under Project SHADOW require immediate implementation across all active containment zones. The containment system utilizes reinforced titanium alloy chambers with electromagnetic field generators and continuous monitoring systems.

Neutralization procedures include high-frequency sonic disruptors and genetic inhibitors, with quantum field stabilizers as backup systems. Global satellite monitoring and AI-powered threat assessment provide real-time response capabilities.`
    },
    {
      id: 'research-findings',
      title: 'Research Findings',
      documentId: 'GL-RES-44567',
      content: `GOLDSTONE LABORATORIES
GODSTRAND RESEARCH FINDINGS
DOCUMENT ID: GL-RES-44567
DATE: 2024-11-08
DISTRIBUTION: Authorized Personnel (Level 7 Clearance and Above)

EXECUTIVE SUMMARY:
Recent breakthroughs in GODSTRAND research have revealed unprecedented genetic complexity. The structure appears to contain ancient genetic code predating human evolution by millions of years. GODSTRAND may represent the next stage of human evolution, with integration triggering rapid genetic mutation and abilities similar to ancient mythological beings.

Experimental gene therapy shows 23% success rate, with quantum entanglement inhibitors under development. Neural interface technology is currently in testing phase, though ethical considerations regarding human rights violations remain unresolved.`
    },
    {
      id: 'incident-reports',
      title: 'Incident Reports',
      documentId: 'CGS-INC-11223',
      content: `CYBERTECH GLOBAL SECURITY SOLUTIONS
CLASSIFIED INCIDENT REPORTS
DOCUMENT ID: CGS-INC-11223
DATE: 2025-03-20
DISTRIBUTION: Authorized Personnel (Level 9 Clearance and Above)

EXECUTIVE SUMMARY:
Multiple containment breaches and security incidents have occurred across all active facilities. Casualty reports indicate 47% mortality rate among security personnel. The most recent breach at Nevada Containment Facility resulted in 12 security personnel casualties and one T.B.E. escape with demonstrated telepathic abilities.

Siberian Research Facility experienced complete destruction with 8 security personnel casualties, though the T.B.E. was successfully contained. Amazon Rainforest Zone reported multiple T.B.E.s working in coordinated groups, resulting in 15 security personnel casualties.`
    }
  ];

  const currentReport = reports[currentReportIndex];

  // Generate a cyphered version of the text with random characters
  const generateCypheredText = (text: string) => {
    const cypherChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_abcdefghijklmnopqrstuvwxyz__';
    
    const firstPart = text.split('\n\n').slice(0, 3).join('\n\n');
    
    const redactedFirstPart = firstPart
      .replace(/GODSTRAND/g, '[REDACTED]')
      .replace(/Project WOLFPAK/g, '[REDACTED]')
      .replace(/T\.B\.E\.'s/g, '[REDACTED]')
      .replace(/Terrestrial Biological Entities/g, '[REDACTED]')
      .replace(/AUGMENTATION/g, '[REDACTED]')
      .replace(/FATAL/g, '[REDACTED]');
    
    const redactedPart = `

[REDACTED] CLASSIFIED INFORMATION [REDACTED]
${Array(5).fill(0).map(() => 
  Array(3).fill(0).map(() => 
    Array(20).fill(0).map(() => 
      cypherChars.charAt(Math.floor(Math.random() * cypherChars.length))
    ).join('')
  ).join('\n')
)}
[REDACTED] END OF CLASSIFIED INFORMATION [REDACTED]`;
    
    return redactedFirstPart + redactedPart;
  };

  const currentText = showRedacted ? generateCypheredText(currentReport.content) : currentReport.content;

  // Typing effect
  useEffect(() => {
    if (currentIndex < currentText.length && isTyping) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + currentText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timer);
    } else if (currentIndex >= currentText.length) {
      setIsTyping(false);
    }
  }, [currentIndex, currentText, isTyping, typingSpeed]);

  // Auto-cycle through reports
  useEffect(() => {
    if (!isAutoCycling || showRedacted || isTyping) return;
    
    const interval = setInterval(() => {
      setCurrentReportIndex((prev) => (prev + 1) % reports.length);
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, [isAutoCycling, showRedacted, isTyping, reports.length]);

  // Close speed options when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (showSpeedOptions && !target.closest('.speed-options-container') && !target.closest('.speed-button')) {
        setShowSpeedOptions(false);
      }
    };

    if (showSpeedOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSpeedOptions]);

  // Pause auto-cycling when user interacts
  const handleUserInteraction = () => {
    setIsAutoCycling(false);
    // Resume auto-cycling after 10 seconds of inactivity
    setTimeout(() => setIsAutoCycling(true), 10000);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleClose = () => {
    setShowCloseWarning(true);
  };

  const handleConfirmClose = () => {
    setShowCloseWarning(false);
    setShowLogin(true);
  };

  const handleToggleRedacted = () => {
    setShowRedacted(!showRedacted);
    setDisplayedText('');
    setCurrentIndex(0);
    setIsTyping(true);
  };

  const handleSwitchReport = (reportIndex: number) => {
    if (reportIndex !== currentReportIndex) {
      setCurrentReportIndex(reportIndex);
      setShowRedacted(false);
      setDisplayedText('');
      setCurrentIndex(0);
      setIsTyping(true);
      handleUserInteraction(); // Pause auto-cycling when user manually switches
    }
  };

  const handleSpeedChange = (speed: number) => {
    setTypingSpeed(speed);
    setShowSpeedOptions(false);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setTypingSpeed(value);
  };

  const formatSpeed = (speed: number) => {
    if (speed === 0) return "0ms";
    if (speed < 1) return `${speed.toFixed(3)}ms`;
    if (speed < 10) return `${speed.toFixed(2)}ms`;
    return `${speed.toFixed(1)}ms`;
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
  };

  // If login screen is shown, render the login component
  if (showLogin) {
    return <TerminalLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <section className="tbesightings-intro">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Scanline effect */}
      <div className="absolute inset-0 scanline-green"></div>
      
      <div className="tbesightings-intro-container">
        <h2 className="text-4xl font-bold mb-6 roboto-condensed-bold text-center">SIGHTINGS REPORT</h2>

        <div className={`terminal-container transition-all duration-300 ${isMinimized ? 'h-16 overflow-hidden' : ''}`}>
          <div className="terminal-header flex items-center mb-4">
            <div className="terminal-title text-green-500 font-mono text-sm">
              TERMINAL://classified/{currentReport.id}
              {showRedacted && <span className="ml-2 text-yellow-500">[REDACTED BROWSING ACTIVE]</span>}
            </div>
            <div className="terminal-controls ml-auto flex space-x-2">
              <button 
                onClick={handleClose}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                aria-label="Close terminal"
              ></button>
              <button 
                onClick={handleMinimize}
                className="hidden w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
                aria-label="Minimize terminal"
                disabled={true}
              ></button>
              <button 
                onClick={() => setShowSpeedOptions(!showSpeedOptions)}
                className="w-3 h-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors speed-button"
                aria-label="Typing speed options"
                title="Typing speed"
              ></button>
              <button 
                onClick={handleToggleRedacted}
                className={`w-3 h-3 rounded-full ${showRedacted ? 'bg-green-600' : ' bg-yellow-500'} hover:bg-white transition-colors`}
                aria-label="Toggle redacted content"
                title={showRedacted ? "Show normal report" : "Show redacted report"}
              ></button>
            </div>
          </div>
          
          {/* Speed Options Dropdown */}
          {showSpeedOptions && (
            <div className="absolute top-12 right-0 z-20 bg-black/90 border border-green-500 rounded p-2 min-w-[150px] speed-options-container">
              <div className="text-green-400 text-xs mb-2 font-mono">TYPING SPEED:</div>
              <div className="text-green-300 text-xs mb-2 font-mono text-center">{formatSpeed(typingSpeed)}</div>
              <input
                type="range"
                min="0"
                max="100"
                step="0.001"
                value={typingSpeed}
                onChange={handleSliderChange}
                className="w-full h-2 bg-green-600 rounded-lg appearance-none cursor-pointer mb-2"
              />
              <div className="flex justify-between text-xs text-green-400 mb-2">
                <span>0ms</span>
                <span>100ms</span>
              </div>
            </div>
          )}
          
          {/* Report Selector */}
          <div className={`terminal-content-wrapper ${isMinimized ? 'hidden' : ''}`}>
            {!isMinimized && (
              <div className="report-selector flex justify-center mb-4">
                {reports.map((report, index) => (
                  <button 
                    key={report.id}
                    onClick={() => handleSwitchReport(index)}
                    className={`report-button ${currentReportIndex === index ? 'active' : ''}`}
                  >
                    <svg className="report-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="report-info">
                      <div className="report-id">{report.documentId}</div>
                      <div className="report-title">{report.title}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
            
            {!isMinimized && (
              <div className={`terminal-content font-mono whitespace-pre-line ${showRedacted ? 'text-yellow-400' : 'text-white terminal-text-shadow'}`}>
                {displayedText}
                {isTyping && <span className="cursor-blink">_</span>}
              </div>
            )}
          </div>
          
          {!isMinimized && (
            <div className="mt-8 text-center">
              <Link
                href="/story"
                className="inline-block px-8 py-3 bg-green-900 hover:bg-green-800 text-green-300 text-lg font-semibold transition-colors duration-300 shadow-lg shadow-green-900/30 border border-green-700"
              >
                ACCESS FULL DOSSIER
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Close Warning Modal */}
      {showCloseWarning && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="terminal-warning p-6 border border-red-500 rounded-lg bg-black/90 shadow-lg shadow-red-500/20 max-w-md">
            <h3 className="text-red-500 font-mono text-xl mb-4">WARNING: UNAUTHORIZED ACCESS DETECTED</h3>
            <p className="text-green-400 font-mono mb-6">
              Closing this terminal will result in immediate termination of your access credentials.
              All activity has been logged and reported to security personnel.
            </p>
            <div className="flex justify-end space-x-4">
              <button 
                onClick={() => setShowCloseWarning(false)}
                className="px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded hover:bg-gray-700 transition-colors"
              >
                CANCEL
              </button>
              <button 
                onClick={handleConfirmClose}
                className="px-4 py-2 bg-red-900 text-red-300 border border-red-700 rounded hover:bg-red-800 transition-colors"
              >
                PROCEED
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TBESightingsIntro;