'use client';

import { useState } from 'react';

interface CharacterHistoryProps {
  character: {
    alias: string;
    role?: string;
    category?: string;
    description?: string;
    story?: string;
    TBENum?: string;
  };
}

export default function CharacterHistory({ character }: CharacterHistoryProps) {
  const [activeTab, setActiveTab] = useState<'background' | 'dossier' | 'intel'>('background');

  const tabs = [
    { id: 'background', label: 'BACKGROUND', icon: '📋' },
    { id: 'dossier', label: 'DOSSIER', icon: '📁' },
    { id: 'intel', label: 'INTEL', icon: '🔍' }
  ];

  const renderFactionRelationship = () => {
    switch (character.category) {
      case 'CYBERTECH':
        return (
          <div className="space-y-3">
            <p className="text-blue-200 leading-relaxed">
              Subject is a confirmed operative of CYBERTECH Global Security Solutions. 
              Enhanced through classified augmentation protocols using partial GODSTRAND mapping.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-200">Operates under coalition government authority</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-200">Enhanced through Silicon Valley tech protocols</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-200">Subject to classified containment protocols</span>
            </div>
          </div>
        );
      
      case 'WOLFPAK':
        return (
          <div className="space-y-3">
            <p className="text-blue-200 leading-relaxed">
              Subject is affiliated with WOLFPAK, a specialized T.B.E. countermeasures unit. 
              Formed in response to increasing T.B.E. incidents, particularly T.B.E. 16 in Stalingrad.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-200">Operates independently of traditional military structures</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-200">Specialized in T.B.E. neutralization and containment</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-200">Maintains loose alliance with coalition forces</span>
            </div>
          </div>
        );
      
      case 'CLAN BUSHIDO':
        return (
          <div className="space-y-3">
            <p className="text-blue-200 leading-relaxed">
              Subject is a member of Clan Bushido, an ancient warrior organization operating 
              independently from modern governments. Masters of traditional and enhanced combat techniques.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-200">Ancient lineage dating back to samurai traditions</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-200">Combines traditional martial arts with enhanced abilities</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-200">Operates under their own code of honor and discipline</span>
            </div>
          </div>
        );
      
      case 'D.O.A.':
        return (
          <div className="space-y-3">
            <p className="text-blue-200 leading-relaxed">
              Subject is affiliated with D.O.A. (Dead On Arrival), a mercenary organization 
              specializing in high-risk operations and bounty hunting. Known for ruthless efficiency.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-200">Operates on a contract basis for highest bidder</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-200">No permanent alliances - strictly business relationships</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-200">Known for completing missions regardless of collateral damage</span>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="space-y-3">
            <p className="text-blue-200 leading-relaxed">
              Subject's faction affiliation remains unknown or unconfirmed. 
              Operates independently with unclear motives and allegiances.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span className="text-red-300">Faction allegiance: UNKNOWN</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-yellow-300">Motives and objectives: CLASSIFIED</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-200">Enhanced abilities confirmed through field reports</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-6 blue-military-section-title">Character History</h3>
      
      <div className="flex border-b border-blue-500/30 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 font-mono text-sm transition-all duration-300 border-b-2 character-history-tab ${
              activeTab === tab.id
                ? 'border-blue-400 text-blue-300 bg-blue-500/10 active'
                : 'border-transparent text-gray-400 hover:text-blue-300 hover:bg-blue-500/5'
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="min-h-[300px]">
        {activeTab === 'background' && (
          <div className="space-y-6">
            {character.description && (
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6">
                <h4 className="text-lg font-bold text-blue-300 mb-4 font-mono">BRIEFING NOTES</h4>
                <p className="text-blue-200 leading-relaxed">{character.description}</p>
              </div>
            )}
            
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6">
              <h4 className="text-lg font-bold text-blue-300 mb-4 font-mono">FACTION RELATIONSHIP</h4>
              <div className="space-y-4">
                {renderFactionRelationship()}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dossier' && (
          <div className="space-y-6">
            {character.story ? (
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6">
                <h4 className="text-lg font-bold text-blue-300 mb-4 font-mono">CLASSIFIED DOSSIER</h4>
                <div className="space-y-4">
                  <p className="text-blue-200 leading-relaxed">{character.story}</p>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6">
                <h4 className="text-lg font-bold text-blue-300 mb-4 font-mono">DOSSIER STATUS</h4>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse dossier-status"></div>
                  <p className="text-red-400 font-mono">DOSSIER INCOMPLETE - ADDITIONAL INTEL REQUIRED</p>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6">
              <h4 className="text-lg font-bold text-blue-300 mb-4 font-mono">THREAT ASSESSMENT</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-red-600 to-red-800 rounded-full border-2 border-red-400 flex items-center justify-center">
                    <span className="text-red-200 font-bold text-xl">?</span>
                  </div>
                  <p className="text-sm text-gray-400">THREAT LEVEL</p>
                  <p className="text-red-300 font-mono">UNKNOWN</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                    <span className="text-yellow-200 font-bold text-xl">?</span>
                  </div>
                  <p className="text-sm text-gray-400">COMBAT RATING</p>
                  <p className="text-yellow-300 font-mono">UNKNOWN</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-blue-200 font-bold text-xl">?</span>
                  </div>
                  <p className="text-sm text-gray-400">INTELLIGENCE</p>
                  <p className="text-blue-300 font-mono">UNKNOWN</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'intel' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6">
              <h4 className="text-lg font-bold text-blue-300 mb-4 font-mono">INTELLIGENCE REPORT</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 intel-report-item text-blue-200 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <p>Subject has been observed in multiple T.B.E. related incidents</p>
                </div>
                <div className="flex items-center gap-3 intel-report-item text-blue-200 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <p>Enhanced abilities confirmed through field reports</p>
                </div>
                <div className="flex items-center gap-3 intel-report-item text-blue-200 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <p>Allegiance patterns remain unclear - monitoring required</p>
                </div>
                <div className="flex items-center gap-3 intel-report-item text-red-300 text-sm">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <p>WARNING: Subject may possess classified information</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6">
              <h4 className="text-lg font-bold text-blue-300 mb-4 font-mono">RECENT ACTIVITY</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-500 font-mono">[REDACTED]</span>
                  <span className="text-blue-300">Last known location: CLASSIFIED</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-500 font-mono">[REDACTED]</span>
                  <span className="text-blue-300">Recent sightings: MULTIPLE CONFIRMED</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-500 font-mono">[REDACTED]</span>
                  <span className="text-blue-300">Threat assessment: ONGOING</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 