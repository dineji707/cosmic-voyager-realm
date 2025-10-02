import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { PlanetData } from "../SolarSystem";

interface NeptuneProps {
  onSelect: (data: PlanetData) => void;
}

const Neptune = ({ onSelect }: NeptuneProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const orbitDistance = 105;
  const orbitSpeed = 0.001;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.014;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y += orbitSpeed;
    }
  });

  const handleClick = () => {
    onSelect({
      name: "Neptune",
      description: "The windiest planet in our solar system, a deep blue ice giant at the outer edge of our cosmic neighborhood.",
      diameter: "49,244 km",
      mass: "1.024 × 10²⁶ kg",
      dayLength: "16 hours",
      temperature: "-214°C average",
      moons: 16,
      funFact: "Neptune has the strongest winds in the solar system, reaching speeds of 2,100 km/h!",
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
        <sphereGeometry args={[2.8, 32, 32]} />
        <meshStandardMaterial color="#4169E1" roughness={0.4} />
      </mesh>
    </group>
  );
};

export default Neptune;
