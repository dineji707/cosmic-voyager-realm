import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { PlanetData } from "../SolarSystem";

interface SunProps {
  onSelect: (data: PlanetData) => void;
}

const Sun = ({ onSelect }: SunProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  const handleClick = () => {
    onSelect({
      name: "The Sun",
      description: "The heart of our solar system, a massive sphere of hot plasma that provides light and heat to all the planets.",
      diameter: "1.39 million km",
      mass: "1.989 × 10³⁰ kg (333,000 Earths)",
      dayLength: "~25 Earth days (at equator)",
      temperature: "5,500°C (surface) / 15 million°C (core)",
      funFact: "The Sun contains 99.86% of all the mass in our solar system!",
    });
  };

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} onClick={handleClick}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial
        color="#FDB813"
        emissive="#FDB813"
        emissiveIntensity={2}
      />
      
      {/* Sun glow */}
      <mesh scale={1.2}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshBasicMaterial
          color="#FDB813"
          transparent
          opacity={0.3}
        />
      </mesh>
    </mesh>
  );
};

export default Sun;
