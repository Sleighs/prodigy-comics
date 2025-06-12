'use client';
import { useState, useEffect } from 'react';
import '@/styles/StoryFileSystem.css';
import TerminalLogin from './TerminalLogin';

interface Document {
  id: string;
  title: string;
  documentId: string;
  content: string;
  classification: string;
}

interface StoryFileSystemProps {
  documents: Document[];
  initialDocumentId?: string;
  onDocumentChange?: (documentId: string) => void;
}

const StoryFileSystem = ({ 
  documents, 
  initialDocumentId = 'overview',
  onDocumentChange 
}: StoryFileSystemProps) => {
  const [activeDocument, setActiveDocument] = useState(initialDocumentId);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showCloseWarning, setShowCloseWarning] = useState(false);
  const [showRedacted, setShowRedacted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [morphText, setMorphText] = useState('');

  const documentSelectorId = (length: number | undefined) => {
    // Use length to determine how many characters to morph
    const idLength = length || 9; 

    // Generate a random number for the document ID
    const randomNumber = Math.floor(Math.random() * 1000);

    // Base text to morph from
    const baseText = `SEC_DATA_${randomNumber.toString().padStart(idLength, '0')}`;
    // `SEC_DATA_${randomNumber.toString().padStart(3, '0')}.bin`;
    
    // Characters to use for morphing
    const crypticChars = '!@#$%^&*()____+-=[]\\;,./~АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯabcdefghijklmnopqrstuvwxyz0123456789АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯabcdefghijklmnopqrstuvwxyz01234567890123456789';
    
    // Get current timestamp for animation
    const now = Date.now();
    
    // Create morphed text by replacing characters based on time
    return baseText
      .split('')
      .map((char, index) => {
        // Each character position changes at a different rate
        const charChangeRate = (now + index * 100) % 1000;
        
        // Determine if this character should change in this frame
        if (charChangeRate < 200) {
          return crypticChars.charAt(Math.floor(Math.random() * crypticChars.length));
        }
        return char;
      })
      .join('');
  };

  // Get the current document
  const currentDocument = documents.find(doc => doc.id === activeDocument) || documents[0];
  
  // Generate a cyphered version of the text with random characters
  const generateCypheredText = (text: string) => {
    // Characters to use for cyphering
    const cypherChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_abcdefghijklmnopqrstuvwxyz__';
    
    // Keep the first part of the text (non-redacted)
    const firstPart = text.split('\n\n').slice(0, 3).join('\n\n');
    
    // Replace sensitive terms with [REDACTED]
    const redactedFirstPart = firstPart
      .replace(/GODSTRAND/g, '[REDACTED]')
      .replace(/T\.B\.E\.'s/g, '[REDACTED]')
      .replace(/Terrestrial Biological Entities/g, '[REDACTED]')
      .replace(/AUGMENTATION/g, '[REDACTED]')
      .replace(/FATAL/g, '[REDACTED]');
    
    // Generate random characters for the redacted part
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

  // Determine which text to use based on the current mode
  const getCurrentText = () => {
    return showRedacted ? generateCypheredText(currentDocument.content) : currentDocument.content;
  };

  const currentText = getCurrentText();

  // Simulate loading with progress bar
  useEffect(() => {
    if (isLoading) {
      const loadingInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(loadingInterval);
            setIsLoading(false);
            return 100;
          }
          return prev + 5;
        });
      }, 50);
      
      return () => clearInterval(loadingInterval);
    }
  }, [isLoading]);

  // Fast typing effect after loading completes
  useEffect(() => {
    if (!isLoading && currentIndex < currentText.length) {
      const timer = setTimeout(() => {
        // Print multiple characters at once for faster effect
        const charsToAdd = Math.min(10, currentText.length - currentIndex);
        setDisplayedText(prev => prev + currentText.substring(currentIndex, currentIndex + charsToAdd));
        setCurrentIndex(prev => prev + charsToAdd);
      }, 5);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, currentText, isLoading]);

  // Reset states when document changes
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsLoading(true);
    setLoadingProgress(0);
  }, [activeDocument, showRedacted]);

  // Add this effect to trigger morphing updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMorphText(documentSelectorId(undefined));
    }, 50); // Update every 50ms for smooth animation
    
    return () => clearInterval(interval);
  }, []);

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
  };

  const handleSwitchDocument = (documentId: string) => {
    if (documentId !== activeDocument) {
      // First clear the displayed text completely
      setDisplayedText('');
      setCurrentIndex(0);
      
      // Small delay before switching document to ensure text is cleared
      setTimeout(() => {
        setActiveDocument(documentId);
        if (onDocumentChange) {
          onDocumentChange(documentId);
        }
        // Reset loading state
        setIsLoading(true);
        setLoadingProgress(0);
      }, 50);
    }
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
    setDisplayedText('');
    setCurrentIndex(0);
    setIsLoading(true);
    setLoadingProgress(0);
  };

  // If login screen is shown, render the login component
  if (showLogin) {
    return <TerminalLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <section className="story-filesystem">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Scanline effect */}
      <div className="absolute inset-0 scanline"></div>
      
      <div className="story-filesystem-container">
        <div className={`filesystem-container transition-all duration-300 ${isMinimized ? 'h-16 overflow-hidden' : ''}`}>
          <div className="filesystem-header flex items-center mb-4">
            <div className="filesystem-title font-mono">
              /classified/story/{activeDocument}
              {showRedacted && <span className="ml-2 text-yellow-500">[REDACTED BROWSING ACTIVE]</span>}
            </div>
            <div className="filesystem-controls ml-auto flex space-x-2">
              <button 
                onClick={handleToggleRedacted}
                className={`w-3 h-3 rounded-full ${showRedacted ? 'bg-green-400' : ' bg-green-400'} transition-colors`}
                aria-label="Toggle redacted content"
                title={showRedacted ? "Show normal document" : "Show redacted document"}
              ></button>
                            <button 
              title='Minimize Terminal'
                onClick={handleMinimize}
                className="w-3 h-3 rounded-full bg-yellow-500  transition-colors"
                aria-label="Minimize terminal"
              ></button><button 
                onClick={handleClose}
                className="w-3 h-3 rounded-full bg-red-500 transition-colors"
                aria-label="Close terminal"
              ></button>


            </div>
          </div>
          
          <div className="filesystem-content-container relative">
            {/* Document Selector */}
            {!isMinimized && (
                <div className="filesystem-document-selector">
                  {documents.map((doc) => {
                    const crypticId = documentSelectorId(8);
                    const documentId = crypticId;
                    return (
                    <button 
                      key={doc.id}
                      onClick={() => handleSwitchDocument(doc.id)}
                      className={`document-button ${activeDocument === doc.id ? 'active' : ''}`}
                    >
                      <svg className="document-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="document-info">
                        <div className="document-id">{documentId}</div>
                        <div className="document-title">{doc.title}</div>
                      </div>
                    </button>
                  )})}
              </div>
            )}
            
            {!isMinimized && (
              <>
                {/* Loading Bar */}
                {isLoading && (
                  <div className="filesystem-loading mb-4">
                    <div className="loading-text text-red-500 font-mono text-sm mb-2">
                      LOADING DOCUMENT: {currentDocument.documentId}
                    </div>
                    <div className="loading-bar-container h-2 border border-red-900/50 rounded overflow-hidden">
                      <div 
                        className="loading-bar h-full bg-red-600 transition-all duration-100"
                        style={{ width: `${loadingProgress}%` }}
                      ></div>
                    </div>
                    <div className="loading-percentage text-red-500 font-mono text-xs mt-1 text-right">
                      {loadingProgress}%
                    </div>
                  </div>
                )}
                
                {/* Document Content */}
                <div className={`filesystem-content font-mono whitespace-pre-line ${showRedacted ? 'text-filesystemWhite' : 'text-filesystemYellow'}`}>
                  {displayedText}
                  {!isLoading && currentIndex < currentText.length && <span className="cursor-blink">_</span>}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Close Warning Modal */}
      {showCloseWarning && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="filesystem-warning p-6 border border-red-500 rounded-sm bg-black/90 shadow-lg shadow-red-500/20 max-w-md">
            <h3 className="text-red-500 font-mono text-xl mb-4">CLOSE TERMINAL</h3>
            <p className="font-mono mb-6">
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

export default StoryFileSystem;