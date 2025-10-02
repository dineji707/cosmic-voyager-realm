import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { PlanetData } from "../SolarSystem";

interface MercuryProps {
  onSelect: (data: PlanetData) => void;
}

const Mercury = ({ onSelect }: MercuryProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const orbitDistance = 15;
  const orbitSpeed = 0.02;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y += orbitSpeed;
    }
  });

  const handleClick = () => {
    onSelect({
      name: "Mercury",
      description: "The smallest and fastest planet, closest to the Sun with extreme temperature variations.",
      diameter: "4,879 km",
      mass: "3.285 × 10²³ kg",
      dayLength: "59 Earth days",
      temperature: "-180°C to 430°C",
      moons: 0,
      funFact: "Mercury has no atmosphere, so there's nothing to trap heat - that's why its nights are so cold!",
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
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color="#8C7853" roughness={0.9} />
      </mesh>
    </group>
  );
};

export default Mercury;
