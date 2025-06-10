'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sky, Environment, Cloud } from '@react-three/drei';
import * as THREE from 'three';

function Terrain() {
  const terrainRef = useRef<THREE.Mesh>(null);
  
  // Create terrain geometry with more detail
  const terrainGeometry = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(100, 100, 128, 128);
    
    // Add some height variation to create hills
    const vertices = geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const z = vertices[i + 2];
      vertices[i + 1] = Math.sin(x * 0.1) * Math.cos(z * 0.1) * 2;
    }
    
    geometry.computeVertexNormals();
    return geometry;
  }, []);

  // Create terrain material
  const terrainMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: '#2c5530',
      metalness: 0.1,
      roughness: 0.8,
      flatShading: true,
    });
  }, []);

  return (
    <mesh ref={terrainRef} geometry={terrainGeometry} material={terrainMaterial} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <meshStandardMaterial
        color="#2c5530"
        metalness={0.1}
        roughness={0.8}
        flatShading
      />
    </mesh>
  );
}

function Ocean() {
  const oceanRef = useRef<THREE.Mesh>(null);
  
  // Create ocean geometry
  const oceanGeometry = useMemo(() => {
    return new THREE.PlaneGeometry(100, 100, 32, 32);
  }, []);

  // Animate ocean waves
  useFrame((state) => {
    if (oceanRef.current) {
      const time = state.clock.getElapsedTime();
      oceanRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={oceanRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.9, 0]}>
      <planeGeometry args={[100, 100, 32, 32]} />
      <meshPhysicalMaterial
        color="#0077be"
        metalness={0.9}
        roughness={0.1}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        transmission={0.9}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function Clouds() {
  const cloudsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={cloudsRef}>
      <Cloud position={[-10, 5, -10]} speed={0.2} opacity={0.5} />
      <Cloud position={[10, 7, -15]} speed={0.2} opacity={0.5} />
      <Cloud position={[0, 6, -20]} speed={0.2} opacity={0.5} />
    </group>
  );
}

export default function HaloScene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
        <color attach="background" args={['#87CEEB']} />
        
        {/* Sunny sky */}
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        <Terrain />
        <Ocean />
        <Clouds />
        
        <Environment preset="sunset" />
      </Canvas>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
    </div>
  );
} 