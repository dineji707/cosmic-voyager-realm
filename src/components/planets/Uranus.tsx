import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { PlanetData } from "../SolarSystem";

interface UranusProps {
  onSelect: (data: PlanetData) => void;
}

const Uranus = ({ onSelect }: UranusProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const orbitDistance = 88;
  const orbitSpeed = 0.002;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.015;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y += orbitSpeed;
    }
  });

  const handleClick = () => {
    onSelect({
      name: "Uranus",
      description: "The tilted ice giant that rotates on its side, with a beautiful blue-green color from methane in its atmosphere.",
      diameter: "50,724 km",
      mass: "8.681 × 10²⁵ kg",
      dayLength: "17.2 hours",
      temperature: "-224°C average",
      moons: 28,
      funFact: "Uranus rotates on its side at almost 98 degrees - it literally rolls around the Sun!",
    });
  };

  return (
    <group ref={orbitRef}>
      {/* Orbit line */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[orbitDistance - 0.1, orbitDistance + 0.1, 64]} />
        <meshBasicMaterial color="#444" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Planet */}
      <mesh ref={meshRef} position={[orbitDistance, 0, 0]} onClick={handleClick}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial color="#4FD0E0" roughness={0.4} />
      </mesh>
    </group>
  );
};

export default Uranus;
