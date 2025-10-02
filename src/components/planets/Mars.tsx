import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { PlanetData } from "../SolarSystem";

interface MarsProps {
  onSelect: (data: PlanetData) => void;
}

const Mars = ({ onSelect }: MarsProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const orbitDistance = 40;
  const orbitSpeed = 0.008;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.009;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y += orbitSpeed;
    }
  });

  const handleClick = () => {
    onSelect({
      name: "Mars",
      description: "The Red Planet, home to the largest volcano and canyon in the solar system. A prime target for future human exploration.",
      diameter: "6,779 km",
      mass: "6.39 × 10²³ kg",
      dayLength: "24.6 hours",
      temperature: "-140°C to 20°C",
      moons: 2,
      funFact: "Mars has the tallest mountain in the solar system - Olympus Mons is nearly 3 times the height of Mount Everest!",
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
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#CD5C5C" roughness={0.8} />
      </mesh>
    </group>
  );
};

export default Mars;
