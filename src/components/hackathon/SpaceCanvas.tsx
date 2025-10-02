import { motion } from "framer-motion";
import { ZoomIn, ZoomOut, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const SpaceCanvas = () => {
  const [zoom, setZoom] = useState(1);

  const planets = [
    { size: 60, color: "hsl(45 93% 58%)", orbitRadius: 0, delay: 0 }, // Sun
    { size: 20, color: "hsl(217 91% 60%)", orbitRadius: 120, delay: 0 },
    { size: 28, color: "hsl(140 60% 50%)", orbitRadius: 180, delay: 2 },
    { size: 24, color: "hsl(0 84% 60%)", orbitRadius: 240, delay: 4 },
  ];

  return (
    <div className="relative w-full h-[60vh] bg-gradient-to-b from-background via-background/95 to-background overflow-hidden">
      {/* Controls */}
      <div className="absolute top-6 left-6 z-20 flex gap-3">
        <Button 
          size="lg" 
          className="gap-2"
          onClick={() => window.location.href = '/solar-system'}
        >
          <Rocket className="w-5 h-5" />
          Explore Solar System
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setZoom(prev => Math.min(prev + 0.2, 2))}
        >
          <ZoomIn className="w-5 h-5" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setZoom(prev => Math.max(prev - 0.2, 0.5))}
        >
          <ZoomOut className="w-5 h-5" />
        </Button>
      </div>

      {/* User Profile */}
      <div className="absolute top-6 right-6 z-20">
        <Avatar className="w-12 h-12 border-2 border-primary ring-2 ring-primary/20">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback className="bg-primary text-primary-foreground">NS</AvatarFallback>
        </Avatar>
      </div>

      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-foreground rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Planets with Orbits */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ scale: zoom }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {planets.map((planet, i) => (
          <div key={i} className="absolute">
            {/* Orbit */}
            {planet.orbitRadius > 0 && (
              <motion.div
                className="absolute border border-primary/20 rounded-full"
                style={{
                  width: planet.orbitRadius * 2,
                  height: planet.orbitRadius * 2,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            )}
            
            {/* Planet */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: planet.size,
                height: planet.size,
                backgroundColor: planet.color,
                boxShadow: `0 0 ${planet.size}px ${planet.color}`,
                top: "50%",
                left: "50%",
              }}
              animate={{
                x: planet.orbitRadius > 0
                  ? [
                      Math.cos(0) * planet.orbitRadius,
                      Math.cos(Math.PI / 2) * planet.orbitRadius,
                      Math.cos(Math.PI) * planet.orbitRadius,
                      Math.cos((3 * Math.PI) / 2) * planet.orbitRadius,
                      Math.cos(2 * Math.PI) * planet.orbitRadius,
                    ]
                  : 0,
                y: planet.orbitRadius > 0
                  ? [
                      Math.sin(0) * planet.orbitRadius,
                      Math.sin(Math.PI / 2) * planet.orbitRadius,
                      Math.sin(Math.PI) * planet.orbitRadius,
                      Math.sin((3 * Math.PI) / 2) * planet.orbitRadius,
                      Math.sin(2 * Math.PI) * planet.orbitRadius,
                    ]
                  : 0,
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
                delay: planet.delay,
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SpaceCanvas;
