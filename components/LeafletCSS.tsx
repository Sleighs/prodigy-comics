'use client';

import { useEffect } from 'react';

const LeafletCSS = () => {
  useEffect(() => {
    // Add Leaflet CSS to document head
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';
    document.head.appendChild(link);
    
    // Clean up on unmount
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
};

export default LeafletCSS; 