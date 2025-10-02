import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { PlanetData } from "../SolarSystem";

interface JupiterProps {
  onSelect: (data: PlanetData) => void;
}

const Jupiter = ({ onSelect }: JupiterProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const orbitDistance = 55;
  const orbitSpeed = 0.005;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y += orbitSpeed;
    }
  });

  const handleClick = () => {
    onSelect({
      name: "Jupiter",
      description: "The king of planets, a massive gas giant with a famous Great Red Spot storm larger than Earth.",
      diameter: "139,820 km",
      mass: "1.898 × 10²⁷ kg",
      dayLength: "10 hours",
      temperature: "-145°C average",
      moons: 95,
      funFact: "Jupiter's Great Red Spot is a storm that has been raging for at least 400 years!",
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
        <sphereGeometry args={[4.5, 32, 32]} />
        <meshStandardMaterial color="#C88B3A" roughness={0.5} />
      </mesh>
    </group>
  );
};

export default Jupiter;
