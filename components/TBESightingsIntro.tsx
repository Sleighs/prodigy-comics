'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import '@/styles/TBESightingsIntro.css';
import TerminalLogin from './TerminalLogin';

const TBESightingsIntro = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showCloseWarning, setShowCloseWarning] = useState(false);
  const [showRedacted, setShowRedacted] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [activeReport, setActiveReport] = useState('tbe'); // 'tbe' or 'side-effects'
  const [showLogin, setShowLogin] = useState(false);
  
  const fullText = `
T.B.E. SIGHTINGS REPORT - CYBERTECH GLOBAL SECURITY SOLUTIONS
DOCUMENT ID: CGS-SEC-47201   
DATE: 2025-04-25
DISTRIBUTION: Authorized Personnel (Level 7 Clearance and Above)

In 1908, something extraordinary was discovered in the Tunguska blast site. The GODSTRAND, a previously unknown piece of human DNA, was found to be the source of incredible mutations.

Today, these mutations have given rise to T.B.E.'s - Terrestrial Biological Entities - humans who have evolved beyond normal capabilities.

WARNING: This information is classified. Unauthorized access is prohibited.

T.B.E. SIGHTING #1: Location: Siberia, Russia
Date: 1947-03-15
Description: Subject displayed regenerative capabilities at the cost of surrounding life and possible enhanced strength.
Status: Contained

T.B.E. SIGHTING #2: Location: Nevada, USA
Date: 1952-08-22
Description: Subject demonstrated telekinetic abilities. Investigators lost perception of reality.
Status: At large

T.B.E. SIGHTING #3: Location: Amazon Rainforest
Date: 1967-11-30
Description: Subject showed signs of environmental adaptation and high radiation levels.
Status: Unknown
`;

  const sideEffectsText = `
GODSTRAND AUGMENTATION SIDE EFFECTS - GOLDSTONE LABORATORIES
DOCUMENT ID: GL-OOS-0187
DATE: 1999-03-11
DISTRIBUTION: Authorized Personnel (Level 6 Clearance and Above)

The GODSTRAND, a genetic sequence containing approximately 2 million chromosome pairs, has been partially mapped and utilized for human augmentation under Project WOLFPAK and related initiatives. While the augmentations grant extraordinary abilities, the side effects are profound, debilitating, and often fatal.

WARNING: This information is classified. Unauthorized access is prohibited.

DETAILED SIDE EFFECTS:

1. NEUROLOGICAL DEGRADATION
   - Symptoms: Subjects experience synaptic overload, manifesting as seizures, hallucinations, and dissociative identity disorders.
   - Cause: The GODSTRAND's hyper-complex neural encoding overwhelms human brain architecture.

2. PHYSIOLOGICAL INSTABILITY
   - Symptoms: Uncontrolled cellular replication leads to tumorous growths, organ failure, and skeletal deformities.
   - Cause: The GODSTRAND's rapid transcription rate destabilizes human DNA repair mechanisms.

3. METABOLIC COLLAPSE
   - Symptoms: Subjects require caloric intakes exceeding 20,000 kcal/day to sustain augmented physiology.
   - Cause: The GODSTRAND's metabolic pathways operate at 300% human baseline.

4. PSYCHOLOGICAL FRAGMENTATION
   - Symptoms: Severe paranoia, loss of empathy, and homicidal impulses are reported in 91% of subjects.
   - Cause: The GODSTRAND appears to encode ancestral or alien consciousness.

5. GENETIC CONTAGION RISK
   - Symptoms: In rare cases, subjects' altered DNA spreads to non-augmented individuals via blood or tissue contact.
   - Cause: The GODSTRAND's self-replicating sequences mimic viral behavior.

6. EXISTENTIAL DISASSOCIATION
   - Symptoms: Subjects report feelings of "not belonging to this reality," accompanied by visions of alternate timelines.
   - Cause: Hypothesized to stem from the GODSTRAND's potential origin as an extraterrestrial artifact.
`;

  // Generate a cyphered version of the text with random characters
  const generateCypheredText = (text: string) => {
    // Characters to use for cyphering
    const cypherChars2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    const cypherChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_+-=<>?';
    
    // Keep the first part of the text (non-redacted)
    const firstPart = text.split('\n\n').slice(0, 3).join('\n\n');
    
    // Replace sensitive terms with [REDACTED]
    const redactedFirstPart = firstPart
      .replace(/GODSTRAND/g, '[REDACTED]')
      .replace(/Project WOLFPAK/g, '[REDACTED]')
      .replace(/T\.B\.E\.'s/g, '[REDACTED]')
      .replace(/Terrestrial Biological Entities/g, '[REDACTED]')
      .replace(/T\.B\.E\.'s/g, '[REDACTED]')
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

  // Determine which text to use based on the current mode and active report
  const getCurrentText = () => {
    const baseText = activeReport === 'tbe' ? fullText : sideEffectsText;
    return showRedacted ? generateCypheredText(baseText) : baseText;
  };

  const currentText = getCurrentText();

  useEffect(() => {
    if (currentIndex < currentText.length && isTyping) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + currentText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 10); // Reduced from 30ms to 15ms for faster typing
      
      return () => clearTimeout(timer);
    } else if (currentIndex >= currentText.length) {
      setIsTyping(false);
    }
  }, [currentIndex, currentText, isTyping]);

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
    // Toggle the redacted mode
    setShowRedacted(!showRedacted);
    
    // Reset the typing state
    setDisplayedText('');
    setCurrentIndex(0);
    setIsTyping(true);
    
    // Use a timeout to simulate the terminal "processing" the request
    setTimeout(() => {
      // The useEffect will handle the typing with the new currentText
    }, 1000);
  };

  const handleSwitchReport = (report: string) => {
    if (report !== activeReport) {
      setActiveReport(report);
      setDisplayedText('');
      setCurrentIndex(0);
      setIsTyping(true);
      setShowRedacted(false);
    }
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
    setDisplayedText('');
    setCurrentIndex(0);
    setIsTyping(true);
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
      <div className="absolute inset-0 scanline"></div>
      
      <div className="tbesightings-intro-container">
        <div className={`terminal-container transition-all duration-300 ${isMinimized ? 'h-16 overflow-hidden' : ''}`}>
          <div className="terminal-header flex items-center mb-4">
            <div className="terminal-title text-green-500 font-mono text-sm">
              TERMINAL://classified/{activeReport === 'tbe' ? 'tbe-sightings' : 'godstrand-side-effects'}
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
                onClick={handleToggleRedacted}
                className={`w-3 h-3 rounded-full ${showRedacted ? 'bg-green-600' : ' bg-yellow-500'} hover:bg-white transition-colors`}
                aria-label="Toggle redacted content"
                title={showRedacted ? "Show normal report" : "Show redacted report"}
              ></button>
            </div>
          </div>
          
          {/* Report Selector */}
          {!isMinimized && (
            <div className="report-selector flex justify-center mb-4">
              <button 
                onClick={() => handleSwitchReport('tbe')}
                className={`report-button ${activeReport === 'tbe' ? 'active' : ''}`}
              >
                <svg className="report-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="report-info">
                  <div className="report-id">CGS-SEC-47201</div>
                  <div className="report-title">TBE Sightings Report</div>
                </div>
              </button>
              <button 
                onClick={() => handleSwitchReport('side-effects')}
                className={`report-button ${activeReport === 'side-effects' ? 'active' : ''}`}
              >
                <svg className="report-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="report-info">
                  <div className="report-id"> GL-OOS-0187</div>
                  <div className="report-title">GODSTRAND Side Effects</div>
                </div>
              </button>
            </div>
          )}
          
          {!isMinimized && (
            <div className={`terminal-content font-mono whitespace-pre-line ${showRedacted ? 'text-yellow-400' : 'text-green-400'}`}>
              {displayedText}
              {isTyping && <span className="cursor-blink">_</span>}
            </div>
          )}
          
          {!isMinimized && !isTyping && currentIndex >= currentText.length && !showRedacted && (
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