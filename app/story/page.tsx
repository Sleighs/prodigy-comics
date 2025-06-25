'use client';

import Image from 'next/image';
import Link from 'next/link';
import { lore } from '@/data/lore';
import MilitaryHeader from '@/components/MilitaryHeader';
import MilitaryNavbar from '@/components/MilitaryNavbar';
import TBESightingsIntro from '@/components/TBESightingsIntro';
import TBEMap from '@/components/TBEMap';
import StoryFileSystem from '@/components/StoryFileSystem';
import { useState } from 'react';
import '@/styles/story.css';

export default function StoryPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [systemStatus, setSystemStatus] = useState('OPERATIONAL');
  const [isOverviewMinimized, setIsOverviewMinimized] = useState(false);
  // Define the documents for the StoryFileSystem
  const documents = [
    {
      id: 'overview',
      title: 'Overview',
      documentId: 'PRODIGY-STORY-001',
      classification: 'TOP SECRET',
      content: `
PRODIGY COMICS
STORY OVERVIEW
DOCUMENT ID: PRODIGY-STORY-001
DATE: 2025-04-25
DISTRIBUTION: Authorized Personnel (Level 7 Clearance and Above)

EXECUTIVE SUMMARY:
In the wake of a groundbreaking discovery - the existence of T.B.E.'s (Terrestrial Biological Entities) - the world's power structure has been forever altered. The revelation began with T.B.E. 16 on Russian soil, triggering an international crisis that would reshape global alliances and military strategies.

Coalition governments, led by the United States, the Soviet Union, the British Empire, and Israel, launched secret programs to identify and develop their own enhanced individuals. Their mission: to counter the emerging T.B.E. threat with equally powerful forces.

At the heart of this new arms race lies the GODSTRAND - a mysterious genetic sequence that holds the key to extraordinary human potential. As different factions vie for control and understanding of this power, the line between human and superhuman becomes increasingly blurred.
`,
      content2: `
KEY CONCEPTS:

1. THE GODSTRAND
   - A previously unknown piece of human DNA that enables extraordinary abilities
   - Its discovery has changed our understanding of human potential
   - Multiple factions are racing to understand and harness its power

2. T.B.E.'s
   - Terrestrial Biological Entities - humans who have evolved beyond normal capabilities
   - Each T.B.E. manifests unique abilities based on their genetic profile
   - Some T.B.E.'s are being recruited by various factions for their powers

3. THE WORLD COUNCIL
   - A coalition of nations working together to understand and manage the implications
   - Established protocols for containment and study of T.B.E.'s
   - Maintains a database of known T.B.E. sightings and abilities
`
    },
    {
      id: 'factions',
      title: 'Factions',
      documentId: 'PRODIGY-STORY-002',
      classification: 'TOP SECRET',
      content: `
PRODIGY COMICS
MAJOR FACTIONS
DOCUMENT ID: PRODIGY-STORY-002
DATE: 2025-04-25
DISTRIBUTION: Authorized Personnel (Level 7 Clearance and Above)

EXECUTIVE SUMMARY:
The emergence of T.B.E.'s and the discovery of the GODSTRAND has led to the formation of several powerful factions, each with their own agenda regarding the future of human evolution and the use of enhanced abilities.
`,
      content2: `
MAJOR FACTIONS:

1. CYBERTECH GLOBAL SECURITY
   - Primary mission: Contain and study T.B.E.'s
   - Operates the largest research facilities for GODSTRAND analysis
   - Maintains a network of containment facilities worldwide
   - Leader: Dr. Elena Vasquez

2. THE SOVIET ENHANCEMENT PROGRAM
   - Primary mission: Create a new breed of super-soldiers
   - Pioneered the first successful GODSTRAND integration protocols
   - Operates in secret facilities across Eastern Europe
   - Leader: General Mikhail Volkov

3. THE BRITISH EMPIRE'S PHOENIX INITIATIVE
   - Primary mission: Preserve human genetic integrity
   - Advocates for controlled evolution rather than rapid enhancement
   - Maintains the largest database of T.B.E. genealogies
   - Leader: Lady Victoria Blackwood

4. THE ISRAELI DEFENSE ENHANCEMENT DIVISION
   - Primary mission: Develop defensive applications of GODSTRAND
   - Created the first successful T.B.E. neutralization techniques
   - Operates the most secure research facility in the Middle East
   - Leader: Colonel David Ben-Ari

5. THE SHADOW NETWORK
   - Primary mission: Unknown
   - A mysterious organization that seems to have existed before the GODSTRAND discovery
   - Has infiltrated all major factions
   - Leader: Identity unknown, codename "The Architect"
`
    },
    {
      id: 'lore',
      title: 'Lore',
      documentId: 'PRODIGY-STORY-003',
      classification: 'TOP SECRET',
      content: `
PRODIGY COMICS
HISTORICAL LORE
DOCUMENT ID: PRODIGY-STORY-003
DATE: 2025-04-25
DISTRIBUTION: Authorized Personnel (Level 7 Clearance and Above)

EXECUTIVE SUMMARY:
The history of T.B.E.'s and the GODSTRAND extends far beyond recent discoveries. Evidence suggests that enhanced individuals have existed throughout human history, though their existence was systematically covered up by various organizations.
`,
      content2: `
HISTORICAL TIMELINE:

1908: TUNGUSKA EVENT
   - A massive explosion in Siberia, Russia
   - Now believed to be the first recorded GODSTRAND emergence event
   - Soviet operatives recovered genetic material from the site

1947: FIRST DOCUMENTED T.B.E.
   - Subject displayed regenerative capabilities
   - Contained by Soviet forces
   - Led to the establishment of the Soviet Enhancement Program

1952: NEVADA INCIDENT
   - Subject demonstrated telekinetic abilities
   - U.S. military containment failed
   - Subject remains at large, last seen in the Amazon rainforest

1967: AMAZON DISCOVERY
   - Multiple T.B.E.'s found living in isolation
   - Displayed environmental adaptation abilities
   - British Empire established the Phoenix Initiative in response

1987: GLOBAL HUMAN ENHANCEMENT OVERSIGHT ACT
   - Established international protocols for T.B.E. containment
   - Created the World Council to coordinate global response
   - Classified all T.B.E. research as TOP SECRET

2003: FIRST SUCCESSFUL GODSTRAND INTEGRATION
   - Soviet scientists achieve breakthrough
   - Subject survived for 47 days before complications
   - Data used to improve integration protocols

2015: CYBERTECH FOUNDATION
   - Established as a private security contractor
   - Quickly became the leading authority on T.B.E. research
   - Built the first dedicated T.B.E. containment facilities

2025: PRESENT DAY
   - Multiple factions actively pursuing GODSTRAND research
   - T.B.E. sightings increasing globally
   - World Council struggling to maintain control
`
    },
    {
      id: 'locations',
      title: 'Locations',
      documentId: 'PRODIGY-STORY-004',
      classification: 'TOP SECRET',
      content: `
PRODIGY COMICS
KEY LOCATIONS
DOCUMENT ID: PRODIGY-STORY-004
DATE: 2025-04-25
DISTRIBUTION: Authorized Personnel (Level 7 Clearance and Above)

EXECUTIVE SUMMARY:
The global pursuit of GODSTRAND research and T.B.E. containment has led to the establishment of numerous classified facilities and significant locations around the world.
`,
      content2: `
KEY LOCATIONS:

1. CYBERTECH HEADQUARTERS
   - Location: Geneva, Switzerland
   - Primary research facility for T.B.E. study
   - Houses the largest GODSTRAND database
   - Contains Level 5 containment cells

2. SOVIET ENHANCEMENT FACILITY
   - Location: Siberia, Russia
   - Primary facility for human enhancement experiments
   - Houses the first successful GODSTRAND integration subjects
   - Contains Level 4 containment cells

3. PHOENIX INITIATIVE ARCHIVES
   - Location: London, United Kingdom
   - Houses the largest collection of T.B.E. genealogical data
   - Contains the original Tunguska Event samples
   - Houses Level 3 containment cells

4. ISRAELI DEFENSE RESEARCH CENTER
   - Location: Negev Desert, Israel
   - Specializes in defensive applications of GODSTRAND
   - Houses the most secure research facility in the Middle East
   - Contains Level 4 containment cells

5. THE SHADOW NETWORK HEADQUARTERS
   - Location: Unknown
   - Believed to be a mobile facility
   - Last detected in the South Pacific
   - Security level unknown

6. TUNGUSKA EVENT SITE
   - Location: Siberia, Russia
   - Original site of the first GODSTRAND emergence
   - Now a restricted research zone
   - Contains anomalous radiation readings

7. AMAZON T.B.E. COLONY
   - Location: Amazon Rainforest, Brazil
   - Home to the largest known population of natural T.B.E.'s
   - Protected by the World Council
   - Access restricted to Level 7 clearance personnel
`
    },
    {
      id: 'events',
      title: 'Events',
      documentId: 'PRODIGY-STORY-005',
      classification: 'TOP SECRET',
      content: `
PRODIGY COMICS
MAJOR EVENTS
DOCUMENT ID: PRODIGY-STORY-005
DATE: 2025-04-25
DISTRIBUTION: Authorized Personnel (Level 7 Clearance and Above)

EXECUTIVE SUMMARY:
The history of T.B.E.'s and GODSTRAND research is marked by numerous significant events that have shaped the current global landscape and power dynamics.
`,
      content2: `
MAJOR EVENTS:

1. THE TUNGUSKA EVENT (1908)
   - A massive explosion in Siberia, Russia
   - Now believed to be the first recorded GODSTRAND emergence
   - Soviet operatives recovered genetic material from the site
   - Outcome: Establishment of the Soviet Enhancement Program

2. THE NEVADA INCIDENT (1952)
   - Subject demonstrated telekinetic abilities
   - U.S. military containment failed
   - Subject remains at large
   - Outcome: Increased military interest in T.B.E. research

3. THE AMAZON DISCOVERY (1967)
   - Multiple T.B.E.'s found living in isolation
   - Displayed environmental adaptation abilities
   - Outcome: British Empire established the Phoenix Initiative

4. THE GLOBAL HUMAN ENHANCEMENT OVERSIGHT ACT (1987)
   - Established international protocols for T.B.E. containment
   - Created the World Council to coordinate global response
   - Outcome: Standardized approach to T.B.E. research and containment

5. THE FIRST SUCCESSFUL GODSTRAND INTEGRATION (2003)
   - Soviet scientists achieve breakthrough
   - Subject survived for 47 days before complications
   - Outcome: Improved integration protocols and renewed interest in human enhancement

6. THE CYBERTECH FOUNDATION (2015)
   - Established as a private security contractor
   - Quickly became the leading authority on T.B.E. research
   - Outcome: Shift in power dynamics within the World Council

7. THE SHADOW NETWORK INFILTRATION (2020)
   - Multiple high-level security breaches detected
   - Evidence of pre-existing knowledge of GODSTRAND
   - Outcome: Increased security measures and internal investigations

8. THE CURRENT CRISIS (2025)
   - T.B.E. sightings increasing globally
   - Multiple factions actively pursuing GODSTRAND research
   - Outcome: Pending
`
    },
    {
      id: 'artifacts',
      title: 'Artifacts',
      documentId: 'PRODIGY-STORY-006',
      classification: 'TOP SECRET',
      content: `
PRODIGY COMICS
CLASSIFIED ARTIFACTS
DOCUMENT ID: PRODIGY-STORY-006
DATE: 2025-04-25
DISTRIBUTION: Authorized Personnel (Level 7 Clearance and Above)

EXECUTIVE SUMMARY:
Throughout the history of GODSTRAND research and T.B.E. study, numerous artifacts have been recovered and classified. These items represent some of the most valuable and dangerous objects in the world.
`,
      content2: `
CLASSIFIED ARTIFACTS:

1. THE TUNGUSKA FRAGMENT
   - Recovered from the Tunguska Event site in 1908
   - Appears to be a crystalline structure containing GODSTRAND
   - Currently housed in the Phoenix Initiative Archives
   - Significance: First physical evidence of GODSTRAND

2. THE NEVADA TELEKINETIC RESIDUE
   - Collected from the site of the Nevada Incident in 1952
   - Contains trace amounts of an unknown element
   - Currently housed in the Cybertech Headquarters
   - Significance: Only known sample of telekinetic energy

3. THE AMAZON ENVIRONMENTAL ADAPTATION SAMPLE
   - Collected from the Amazon T.B.E. Colony in 1967
   - Contains DNA from multiple T.B.E.'s
   - Currently housed in the Phoenix Initiative Archives
   - Significance: Proof of natural T.B.E. evolution

4. THE FIRST INTEGRATION SUBJECT'S REMAINS
   - Recovered from the Soviet Enhancement Facility in 2003
   - Contains the first successful GODSTRAND integration
   - Currently housed in the Soviet Enhancement Facility
   - Significance: Key to understanding integration protocols

5. THE SHADOW NETWORK DATACORE
   - Recovered from an unknown location in 2020
   - Contains encrypted data about GODSTRAND
   - Currently housed in the Israeli Defense Research Center
   - Significance: May contain information about the Shadow Network's origins

6. THE WORLD COUNCIL SEAL
   - Created in 1987 to symbolize the Global Human Enhancement Oversight Act
   - Contains a microchip with all known T.B.E. data
   - Currently housed in the World Council Headquarters
   - Significance: Symbol of global cooperation on T.B.E. research
`
    },
    {
      id: 'organizations',
      title: 'Organizations',
      documentId: 'PRODIGY-STORY-007',
      classification: 'TOP SECRET',
      content: `
PRODIGY COMICS
MAJOR ORGANIZATIONS
DOCUMENT ID: PRODIGY-STORY-007
DATE: 2025-04-25
DISTRIBUTION: Authorized Personnel (Level 7 Clearance and Above)

EXECUTIVE SUMMARY:
The global landscape of GODSTRAND research and T.B.E. containment is dominated by several major organizations, each with their own agenda and methods.
`,
      content2: `
MAJOR ORGANIZATIONS:

1. THE WORLD COUNCIL
   - Established: 1987
   - Headquarters: Geneva, Switzerland
   - Primary mission: Coordinate global response to T.B.E. emergence
   - Key members: Representatives from all major nations
   - Resources: Unlimited funding from member nations
   - Notable projects: Global Human Enhancement Oversight Act

2. CYBERTECH GLOBAL SECURITY
   - Established: 2015
   - Headquarters: Geneva, Switzerland
   - Primary mission: Contain and study T.B.E.'s
   - Key members: Dr. Elena Vasquez (CEO)
   - Resources: Private funding, government contracts
   - Notable projects: T.B.E. Containment Protocol

3. THE SOVIET ENHANCEMENT PROGRAM
   - Established: 1908
   - Headquarters: Moscow, Russia
   - Primary mission: Create super-soldiers
   - Key members: General Mikhail Volkov
   - Resources: Military funding, research facilities
   - Notable projects: First successful GODSTRAND integration

4. THE BRITISH EMPIRE'S PHOENIX INITIATIVE
   - Established: 1967
   - Headquarters: London, United Kingdom
   - Primary mission: Preserve human genetic integrity
   - Key members: Lady Victoria Blackwood
   - Resources: Government funding, royal support
   - Notable projects: T.B.E. Genealogy Database

5. THE ISRAELI DEFENSE ENHANCEMENT DIVISION
   - Established: 1987
   - Headquarters: Tel Aviv, Israel
   - Primary mission: Develop defensive applications
   - Key members: Colonel David Ben-Ari
   - Resources: Military funding, international support
   - Notable projects: T.B.E. Neutralization Techniques

6. THE SHADOW NETWORK
   - Established: Unknown
   - Headquarters: Unknown
   - Primary mission: Unknown
   - Key members: "The Architect" (identity unknown)
   - Resources: Unknown
   - Notable projects: Unknown
`
    }
  ];

  // Define navigation links for the MilitaryNavbar
  const navLinks = [
    { name: 'OVERVIEW', path: '/story', code: 'PRODIGY-STORY-001' },
    { name: 'FACTIONS', path: '/story/factions', code: 'PRODIGY-STORY-002' },
    { name: 'LORE', path: '/story/lore', code: 'PRODIGY-STORY-003' },
    { name: 'LOCATIONS', path: '/story/locations', code: 'PRODIGY-STORY-004' },
    { name: 'EVENTS', path: '/story/events', code: 'PRODIGY-STORY-005' },
    { name: 'ARTIFACTS', path: '/story/artifacts', code: 'PRODIGY-STORY-006' },
    { name: 'ORGANIZATIONS', path: '/story/organizations', code: 'PRODIGY-STORY-007' },
  ];

  // Handle document change
  const handleDocumentChange = (documentId: string) => {
    setActiveTab(documentId);
  };

  return (
    <main className="min-h-screen pt-16 bg-black text-gray-200">
      {/* Hero Section with Metal Gear Solid aesthetic */}
      <MilitaryHeader 
        title="EXPLORE THE UNIVERSE"
        backgroundImage="/images/prodigy-banner.png"
        subtitle="Power, evolution, and the rise of T.B.E.'s"
        classification="TOP SECRET"
        documentId="SITUATION REPORT"
        tailwindStyles="border-b border-red-900/50"
        accessLevel="7"
        systemStatus="OPERATIONAL"
      />

      {/* Military Navbar */}
      {/* <MilitaryNavbar 
        links={navLinks}
        systemStatus={systemStatus}
        tailwindStyles="border-b border-red-900/50"
      /> */}

      {/* Story File System */}
      <StoryFileSystem 
        documents={documents}
        initialDocumentId={activeTab}
        onDocumentChange={handleDocumentChange}
      />

      {/* Content Sections - These will be shown below the file system */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-black/90 p-8 rounded border border-red-900/50 relative overflow-hidden">
              {/* Background grid effect */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              
              {/* Scanline effect */}
              <div className="absolute inset-0 scanline"></div>
              
              <div className="relative z-10">
                <div className="filesystem-header flex items-center mb-6 border-b border-red-900/50 pb-4">
                  <div className="filesystem-title font-mono text-red-500 uppercase tracking-wider">
                    PRODIGY STORY OVERVIEW
                  </div>
                  <div className="story-overview-buttons ml-auto flex space-x-2">
                    <button 
                      className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"
                      title={isOverviewMinimized ? "Expand" : "Minimize"}
                      onClick={() => setIsOverviewMinimized(!isOverviewMinimized)}
                    ></button>
                  </div>
                </div>
                
                {!isOverviewMinimized && (
                  <div className="filesystem-content font-mono text-filesystemYellow whitespace-pre-line text-sm leading-relaxed">
                    <div className="mb-6">
                      <span className="text-red-500 font-bold">EXECUTIVE SUMMARY:</span>
                      <br />
                      In the wake of a groundbreaking discovery - the existence of T.B.E.'s (Terrestrial Biological Entities) - the world's power structure has been forever altered. The revelation began with T.B.E. 16 on Russian soil, triggering an international crisis that would reshape global alliances and military strategies.
                    </div>
                    
                    <div className="mb-6">
                      Coalition governments, led by the United States, the Soviet Union, the British Empire, and Israel, launched secret programs to identify and develop their own enhanced individuals. Their mission: to counter the emerging T.B.E. threat with equally powerful forces.
                    </div>

                    <div className="mb-6">
                      At the heart of this new arms race lies the GODSTRAND - a mysterious genetic sequence that holds the key to extraordinary human potential. As different factions vie for control and understanding of this power, the line between human and superhuman becomes increasingly blurred.
                    </div>

                    <div className="flex justify-center pt-6">
                      <Link 
                        href="https://www.youtube.com/watch?v=E7jsNUBGatQ"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-900/50 hover:bg-red-800/50 rounded border border-red-700/50 text-red-400 hover:text-red-300 font-mono text-sm transition-colors"
                      >
                        WATCH OFFICIAL TRAILER
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Key Concepts Section */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/90 p-6 rounded border border-red-900/50 relative overflow-hidden group hover:bg-black/95 transition-colors">
                {/* Background grid effect */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                
                <div className="relative z-10">
                  <div className="filesystem-header flex items-center mb-4 border-b border-red-900/30 pb-2">
                    <div className="filesystem-title font-mono text-red-500 uppercase tracking-wider text-sm">
                      THE GODSTRAND
                    </div>
                  </div>
                  
                  <div className="filesystem-content font-mono text-filesystemYellow text-xs leading-relaxed mb-4">
                    A previously unknown piece of human DNA that enables extraordinary abilities. Its discovery has changed our understanding of human potential. Multiple factions are racing to understand and harness its power.
                  </div>
                  
                  <Link 
                    href="/story/wiki/godstrand"
                    className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-xs font-mono"
                  >
                    LEARN MORE
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="bg-black/90 p-6 rounded border border-red-900/50 relative overflow-hidden group hover:bg-black/95 transition-colors">
                {/* Background grid effect */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                
                <div className="relative z-10">
                  <div className="filesystem-header flex items-center mb-4 border-b border-red-900/30 pb-2">
                    <div className="filesystem-title font-mono text-red-500 uppercase tracking-wider text-sm">
                      T.B.E.'s
                    </div>
                  </div>
                  
                  <div className="filesystem-content font-mono text-filesystemYellow text-xs leading-relaxed mb-4">
                    Terrestrial Biological Entities - humans who have evolved beyond normal capabilities through exposure to the GODSTRAND. Each T.B.E. manifests unique abilities based on their genetic profile.
                  </div>
                  
                  <Link 
                    href="/story/wiki/tbes"
                    className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-xs font-mono"
                  >
                    LEARN MORE
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="bg-black/90 p-6 rounded border border-red-900/50 relative overflow-hidden group hover:bg-black/95 transition-colors">
                {/* Background grid effect */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                
                <div className="relative z-10">
                  <div className="filesystem-header flex items-center mb-4 border-b border-red-900/30 pb-2">
                    <div className="filesystem-title font-mono text-red-500 uppercase tracking-wider text-sm">
                      THE WORLD COUNCIL
                    </div>
                  </div>
                  
                  <div className="filesystem-content font-mono text-filesystemYellow text-xs leading-relaxed mb-4">
                    A coalition of nations working together to understand and manage the implications of human evolution and the GODSTRAND phenomenon. Maintains a database of known T.B.E. sightings and abilities.
                  </div>
                  
                  <Link 
                    href="/story/wiki/world-council"
                    className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-xs font-mono"
                  >
                    LEARN MORE
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Factions Tab */}
        {activeTab === 'factions' && (
          <div className="space-y-12">
            <h2 className="text-2xl font-bold mb-8 text-red-500 uppercase tracking-wider">The Major Factions</h2>
            
            {lore.factions.map((faction, index) => (
              <div key={faction.id} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="relative h-64 md:h-80">
                  <Image
                    src={faction.logo}
                    alt={faction.name}
                    fill
                    className="object-cover rounded border border-red-900/30"
                  />
                </div>
                <div className="bg-gray-900/50 p-6 rounded border border-red-900/30">
                  <h3 className="text-2xl font-bold mb-2 text-red-500">{faction.name}</h3>
                  {faction.subtitle && <p className="text-gray-400 mb-4">{faction.subtitle}</p>}
                  <p className="text-lg mb-4">{faction.description}</p>
                  {faction.quote && <p className="text-blue-400 italic mb-4">{faction.quote}</p>}
                  {faction.trailer && (
                    <Link 
                      href={faction.trailer}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Watch Faction Trailer
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lore Tab */}
        {activeTab === 'lore' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-8 text-red-500 uppercase tracking-wider">The Lore</h2>
            
            {/* TBE Sightings Intro Section */}
            <div className="bg-gray-900/50 p-6 rounded border border-red-900/30">
              <TBESightingsIntro />
            </div>

            {/* TBE Map Section */}
            <div className="bg-gray-900/50 p-6 rounded border border-red-900/30">
              <TBEMap />
            </div>
          </div>
        )}

        {/* Locations Tab */}
        {activeTab === 'locations' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-8 text-red-500 uppercase tracking-wider">Key Locations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {lore.locations.map((location) => (
                <div key={location.id} className="bg-gray-900/50 p-6 rounded border border-red-900/30 group hover:bg-gray-800/50 transition-colors">
                  <h4 className="text-xl font-bold mb-3 text-red-500">{location.name}</h4>
                  <p className="text-gray-300 mb-4">{location.description}</p>
                  <p className="text-blue-400 text-sm mb-4">{location.significance}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {location.factions.map((faction) => (
                      <span key={faction} className="text-sm bg-gray-800 px-3 py-1 rounded border border-red-900/30">
                        {faction}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/story/wiki/${location.id}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-8 text-red-500 uppercase tracking-wider">Major Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {lore.events.map((event) => (
                <div key={event.id} className="bg-gray-900/50 p-6 rounded border border-red-900/30 group hover:bg-gray-800/50 transition-colors">
                  <h4 className="text-xl font-bold mb-3 text-red-500">{event.name}</h4>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  {event.outcomes && (
                    <div className="mb-4">
                      <h5 className="text-lg font-semibold mb-2 text-blue-400">Outcomes:</h5>
                      <ul className="list-disc list-inside text-gray-300">
                        {event.outcomes.map((outcome, index) => (
                          <li key={index}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Link 
                    href={`/story/wiki/${event.id}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Artifacts Tab */}
        {activeTab === 'artifacts' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-8 text-red-500 uppercase tracking-wider">Artifacts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {lore.artifacts.map((artifact) => (
                <div key={artifact.id} className="bg-gray-900/50 p-6 rounded border border-red-900/30 group hover:bg-gray-800/50 transition-colors">
                  <h4 className="text-xl font-bold mb-3 text-red-500">{artifact.name}</h4>
                  <p className="text-gray-300 mb-4">{artifact.description}</p>
                  <p className="text-blue-400 text-sm mb-4">Controlled by: {artifact.controlledBy}</p>
                  <Link 
                    href={`/story/wiki/${artifact.id}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Organizations Tab */}
        {activeTab === 'organizations' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-8 text-red-500 uppercase tracking-wider">Organizations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {lore.organizations.map((org) => (
                <div key={org.id} className="bg-gray-900/50 p-6 rounded border border-red-900/30 group hover:bg-gray-800/50 transition-colors">
                  <h4 className="text-xl font-bold mb-3 text-red-500">{org.name}</h4>
                  <p className="text-gray-300 mb-4">{org.description}</p>
                  {org.members && (
                    <div className="mb-4">
                      <h5 className="text-lg font-semibold mb-2 text-blue-400">Members:</h5>
                      <div className="flex flex-wrap gap-2">
                        {org.members.map((member) => (
                          <span key={member} className="text-sm bg-gray-800 px-3 py-1 rounded border border-red-900/30">
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <Link 
                    href={`/story/wiki/${org.id}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <section className="py-16 text-center bg-black/90 border-t border-red-900/50 relative overflow-hidden">
        {/* Background grid effect */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-red-500 uppercase tracking-wider">Ready to Dive Deeper?</h2>
          <p className="text-xl mb-8 text-filesystemYellow">
            Explore the characters, their abilities, and the world they inhabit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/characters"
              className="px-8 py-3 bg-red-900/50 hover:bg-red-800/50 rounded border border-red-700/50 text-red-400 hover:text-red-300 text-lg font-semibold transition-colors"
            >
              Meet the Characters
            </Link>
            <Link 
              href="/world"
              className="px-8 py-3 bg-black/50 hover:bg-gray-900/50 rounded border border-red-900/50 text-red-400 hover:text-red-300 text-lg font-semibold transition-colors"
            >
              Explore the World
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}