import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { PlanetData } from "../SolarSystem";

interface SaturnProps {
  onSelect: (data: PlanetData) => void;
}

const Saturn = ({ onSelect }: SaturnProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const orbitDistance = 72;
  const orbitSpeed = 0.003;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.018;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y += orbitSpeed;
    }
  });

  const handleClick = () => {
    onSelect({
      name: "Saturn",
      description: "The ringed wonder, famous for its spectacular system of icy rings that span hundreds of thousands of kilometers.",
      diameter: "116,460 km",
      mass: "5.683 × 10²⁶ kg",
      dayLength: "10.7 hours",
      temperature: "-178°C average",
      moons: 146,
      funFact: "Saturn is so light that it would float in water if you could find a bathtub big enough!",
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
      <group position={[orbitDistance, 0, 0]}>
        <mesh ref={meshRef} onClick={handleClick}>
          <sphereGeometry args={[4, 32, 32]} />
          <meshStandardMaterial color="#FAD5A5" roughness={0.5} />
        </mesh>
        
        {/* Rings */}
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <ringGeometry args={[5, 8, 64]} />
          <meshStandardMaterial 
            color="#C2B280" 
            side={THREE.DoubleSide} 
            transparent 
            opacity={0.7}
          />
        </mesh>
      </group>
    </group>
  );
};

export default Saturn;
