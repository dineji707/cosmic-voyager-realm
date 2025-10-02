import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { PlanetData } from "../SolarSystem";

interface VenusProps {
  onSelect: (data: PlanetData) => void;
}

const Venus = ({ onSelect }: VenusProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const orbitDistance = 22;
  const orbitSpeed = 0.015;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y += orbitSpeed;
    }
  });

  const handleClick = () => {
    onSelect({
      name: "Venus",
      description: "The hottest planet with a thick toxic atmosphere, often called Earth's 'evil twin'.",
      diameter: "12,104 km",
      mass: "4.867 × 10²⁴ kg",
      dayLength: "243 Earth days",
      temperature: "465°C average",
      moons: 0,
      funFact: "Venus rotates backwards compared to most planets - the Sun rises in the west!",
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
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshStandardMaterial color="#FFC649" roughness={0.7} />
      </mesh>
    </group>
  );
};

export default Venus;
