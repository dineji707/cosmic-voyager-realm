import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { PlanetData } from "../SolarSystem";

interface EarthProps {
  onSelect: (data: PlanetData) => void;
}

const Earth = ({ onSelect }: EarthProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const moonRef = useRef<THREE.Mesh>(null);
  const orbitDistance = 30;
  const orbitSpeed = 0.01;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y += orbitSpeed;
    }
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.02;
    }
  });

  const handleClick = () => {
    onSelect({
      name: "Earth",
      description: "Our home, the only known planet with life. A beautiful blue marble with vast oceans and diverse ecosystems.",
      diameter: "12,742 km",
      mass: "5.972 × 10²⁴ kg",
      dayLength: "24 hours",
      temperature: "-88°C to 58°C",
      moons: 1,
      funFact: "Earth is the only planet not named after a Greek or Roman deity - it comes from Old English 'eorþe'!",
    });
  };

  return (
    <group ref={orbitRef}>
      {/* Orbit line */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[orbitDistance - 0.1, orbitDistance + 0.1, 64]} />
        <meshBasicMaterial color="#4169E1" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Planet */}
      <mesh ref={meshRef} position={[orbitDistance, 0, 0]} onClick={handleClick}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#4169E1" roughness={0.6} />
      </mesh>

      {/* Moon */}
      <mesh ref={moonRef} position={[orbitDistance + 4, 0, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#8C8C8C" roughness={0.9} />
      </mesh>
    </group>
  );
};

export default Earth;
