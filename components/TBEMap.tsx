'use client'
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '@/styles/tbemap.css';
import L, { LatLngTuple } from 'leaflet';
import { lore } from '@/data/lore';

// Fix for default marker icons in Next.js
const defaultIcon = L.icon({
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon-2x.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Custom icons for different factions
const getFactionIcon = (factions: string[]) => {
  // If multiple factions, use default icon
  if (factions.length > 1) {
    return defaultIcon;
  }
  
  // For single faction, use custom icon
  const faction = factions[0];
  
  // Custom icon configuration based on faction
  const iconConfig = {
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15],
    shadowSize: [41, 41]
  };
  
  // Return default icon for now (in a real app, you'd have custom icons for each faction)
  return defaultIcon;
};

// Define the location data with coordinates
const locationData = [
  {
    id: 'stalingrad',
    name: 'Stalingrad',
    description: 'Site of significant T.B.E. activity, particularly T.B.E. 16, which led to the formation of WOLFPAK',
    significance: 'First confirmed T.B.E. incident on Russian soil',
    factions: ['CYBERTECH', 'WOLFPAK'],
    coordinates: [48.708, 44.513] as LatLngTuple // Volgograd (formerly Stalingrad) coordinates
  },
  {
    id: 'japan',
    name: 'Japan',
    description: 'Ancient homeland of the Clan Bushido, operating independently from modern governments',
    significance: 'Base of operations for Clan Bushido since the dawn of the samurai',
    factions: ['CLAN BUSHIDO'],
    coordinates: [35.676, 139.650] as LatLngTuple // Tokyo coordinates
  },
  {
    id: 'silicon-valley',
    name: 'Silicon Valley',
    description: 'Home to the secretive tech industry leaders who fund and direct CYBERTECH operations',
    significance: 'Financial and technological hub for enhanced human programs',
    factions: ['CYBERTECH'],
    coordinates: [37.4419, -122.1430] as LatLngTuple // Silicon Valley coordinates
  },
  {
    id: 'washington-dc',
    name: 'Washington D.C.',
    description: 'Political center of the Coalition Governments working to address the T.B.E. threat',
    significance: 'Coordination hub for international response to T.B.E. incidents',
    factions: ['CYBERTECH', 'WOLFPAK'],
    coordinates: [38.9072, -77.0369] as LatLngTuple // Washington D.C. coordinates
  },
  {
    id: 'tel-aviv',
    name: 'Tel Aviv',
    description: 'One of the founding cities of the T.B.E. Joint Taskforce with KGB, CIA, and Mossad',
    significance: 'Early research center for enhanced human capabilities',
    factions: ['WOLFPAK'],
    coordinates: [32.0853, 34.7818] as LatLngTuple // Tel Aviv coordinates
  },
  {
    id: 'london',
    name: 'London',
    description: 'British Empire headquarters for T.B.E. research and countermeasures',
    significance: 'Historical center for genetic research related to the GODSTRAND',
    factions: ['CYBERTECH'],
    coordinates: [51.5074, -0.1278] as LatLngTuple // London coordinates
  }
];

interface TBEMapProps {
  className?: string;
}

const TBEMap: React.FC<TBEMapProps> = ({ className = '' }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedFaction, setSelectedFaction] = useState<string>('All');

  // Fix for SSR with Leaflet
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={`h-[500px] bg-gray-800 ${className}`}></div>;
  }

  // Filter locations based on selected faction
  const filteredLocations = selectedFaction === 'All'
    ? locationData
    : locationData.filter(location => location.factions.includes(selectedFaction));

  return (
    <div className={`tbe-map-container h-[500px] w-full ${className}`}>
      <div className="tbe-map-title">
        <h1>{`T.B.E. SIGHTINGS REPORT  ${new Date().toLocaleDateString()} - ${selectedFaction}`}</h1>
      </div>
      <MapContainer
        center={[40, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        className="dark-theme"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredLocations.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinates}
            icon={getFactionIcon(location.factions)}
          >
            <Popup>
              <div className="text-black">
                <h3 className="font-bold text-lg">{location.name}</h3>
                <p className="mt-1">{location.description}</p>
                <p className="mt-1 text-sm italic">{location.significance}</p>
                <div className="mt-2">
                  <p className="text-sm font-semibold">Factions:</p>
                  <ul className="list-disc list-inside text-sm">
                    {location.factions.map((faction) => (
                      <li key={faction}>{faction}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="tbe-map-select-container mb-4 flex justify-center">
        <select
          className="tbe-map-select bg-gray-900 text-white p-2 rounded"
          onChange={(e) => setSelectedFaction(e.target.value)}
          value={selectedFaction}
        >
          <option value="All">All Factions</option>
          {lore.factions.map(faction => (
            <option key={faction.id} value={faction.name}>{faction.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TBEMap; 