import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars as DreiStars } from "@react-three/drei";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Sun from "./planets/Sun";
import Mercury from "./planets/Mercury";
import Venus from "./planets/Venus";
import Earth from "./planets/Earth";
import Mars from "./planets/Mars";
import Jupiter from "./planets/Jupiter";
import Saturn from "./planets/Saturn";
import Uranus from "./planets/Uranus";
import Neptune from "./planets/Neptune";
import InfoPanel from "./InfoPanel";
import { useNavigate } from "react-router-dom";

export interface PlanetData {
  name: string;
  description: string;
  diameter: string;
  mass: string;
  dayLength: string;
  temperature: string;
  moons?: number;
  funFact: string;
}

const SolarSystem = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen relative bg-background">
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 50, 100], fov: 60 }}>
        <color attach="background" args={["#0a0e27"]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#FDB813" />
        
        {/* Background Stars */}
        <DreiStars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Sun */}
        <Sun onSelect={setSelectedPlanet} />
        
        {/* Planets */}
        <Mercury onSelect={setSelectedPlanet} />
        <Venus onSelect={setSelectedPlanet} />
        <Earth onSelect={setSelectedPlanet} />
        <Mars onSelect={setSelectedPlanet} />
        <Jupiter onSelect={setSelectedPlanet} />
        <Saturn onSelect={setSelectedPlanet} />
        <Uranus onSelect={setSelectedPlanet} />
        <Neptune onSelect={setSelectedPlanet} />
        
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={20}
          maxDistance={200}
        />
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute top-6 left-6 z-10">
        <Button
          onClick={() => navigate("/")}
          variant="secondary"
          size="lg"
          className="gap-2"
        >
          <Home className="w-5 h-5" />
          Home
        </Button>
      </div>

      <div className="absolute top-6 right-6 z-10 text-right">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-border"
        >
          <h2 className="text-2xl font-bold text-primary">Solar System Explorer</h2>
          <p className="text-sm text-muted-foreground">Click any planet to learn more</p>
        </motion.div>
      </div>

      {/* Info Panel */}
      <AnimatePresence>
        {selectedPlanet && (
          <InfoPanel 
            planet={selectedPlanet} 
            onClose={() => setSelectedPlanet(null)} 
          />
        )}
      </AnimatePresence>

      {/* Controls Guide */}
      <div className="absolute bottom-6 left-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-border text-sm"
        >
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Controls:</span> Drag to rotate • Scroll to zoom • Right-click to pan
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SolarSystem;
