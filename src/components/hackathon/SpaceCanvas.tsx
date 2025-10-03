import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, ZoomOut, Rocket, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CelestialBody {
  name: string;
  size: number;
  color: string;
  orbitRadius: number;
  delay: number;
  data: {
    description: string;
    diameter: string;
    orbitSpeed: string;
    distance: string;
    discoveryYear?: string;
    missionData?: string;
    funFact: string;
  };
}

const SpaceCanvas = () => {
  const [zoom, setZoom] = useState(1);
  const [selectedBody, setSelectedBody] = useState<CelestialBody | null>(null);

  const celestialBodies: CelestialBody[] = [
    {
      name: "Sun",
      size: 60,
      color: "hsl(45 93% 58%)",
      orbitRadius: 0,
      delay: 0,
      data: {
        description: "The heart of our solar system, providing light and heat to all planets.",
        diameter: "1.39 million km",
        orbitSpeed: "N/A (Center)",
        distance: "0 AU from center",
        discoveryYear: "Ancient",
        funFact: "The Sun contains 99.86% of the mass in our solar system!",
      },
    },
    {
      name: "Mercury",
      size: 20,
      color: "hsl(217 91% 60%)",
      orbitRadius: 120,
      delay: 0,
      data: {
        description: "The smallest and fastest planet, closest to the Sun.",
        diameter: "4,879 km",
        orbitSpeed: "47.87 km/s",
        distance: "0.39 AU from Sun",
        discoveryYear: "Ancient",
        missionData: "MESSENGER mission (2004-2015)",
        funFact: "A year on Mercury is just 88 Earth days!",
      },
    },
    {
      name: "Venus",
      size: 28,
      color: "hsl(140 60% 50%)",
      orbitRadius: 180,
      delay: 2,
      data: {
        description: "The hottest planet with thick toxic atmosphere.",
        diameter: "12,104 km",
        orbitSpeed: "35.02 km/s",
        distance: "0.72 AU from Sun",
        discoveryYear: "Ancient",
        missionData: "Akatsuki orbiter (ongoing)",
        funFact: "Venus rotates backwards compared to most planets!",
      },
    },
    {
      name: "Earth",
      size: 24,
      color: "hsl(200 84% 60%)",
      orbitRadius: 240,
      delay: 4,
      data: {
        description: "Our home planet, the only known world with life.",
        diameter: "12,742 km",
        orbitSpeed: "29.78 km/s",
        distance: "1.00 AU from Sun",
        discoveryYear: "Ancient",
        missionData: "Multiple satellites monitoring climate (PACE, etc.)",
        funFact: "Earth is the only planet not named after a god!",
      },
    },
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
        {celestialBodies.map((body, i) => (
          <div key={i} className="absolute">
            {/* Orbit */}
            {body.orbitRadius > 0 && (
              <motion.div
                className="absolute border border-primary/20 rounded-full"
                style={{
                  width: body.orbitRadius * 2,
                  height: body.orbitRadius * 2,
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
              className="absolute rounded-full cursor-pointer transition-all hover:scale-110"
              style={{
                width: body.size,
                height: body.size,
                backgroundColor: body.color,
                boxShadow: `0 0 ${body.size}px ${body.color}`,
                top: "50%",
                left: "50%",
              }}
              animate={{
                x: body.orbitRadius > 0
                  ? [
                      Math.cos(0) * body.orbitRadius,
                      Math.cos(Math.PI / 2) * body.orbitRadius,
                      Math.cos(Math.PI) * body.orbitRadius,
                      Math.cos((3 * Math.PI) / 2) * body.orbitRadius,
                      Math.cos(2 * Math.PI) * body.orbitRadius,
                    ]
                  : 0,
                y: body.orbitRadius > 0
                  ? [
                      Math.sin(0) * body.orbitRadius,
                      Math.sin(Math.PI / 2) * body.orbitRadius,
                      Math.sin(Math.PI) * body.orbitRadius,
                      Math.sin((3 * Math.PI) / 2) * body.orbitRadius,
                      Math.sin(2 * Math.PI) * body.orbitRadius,
                    ]
                  : 0,
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
                delay: body.delay,
              }}
              onClick={() => setSelectedBody(body)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            />
          </div>
        ))}
      </motion.div>

      {/* Side Panel */}
      <AnimatePresence>
        {selectedBody && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm z-30"
              onClick={() => setSelectedBody(null)}
            />
            
            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[500px] z-40 p-6 overflow-y-auto"
            >
              <Card className="h-full border-2 border-primary/30 bg-card/95 backdrop-blur-xl shadow-[0_0_50px_hsl(var(--primary)/0.5)]">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-3xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {selectedBody.name}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {selectedBody.data.description}
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedBody(null)}
                      className="hover:bg-destructive/20"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Visual Indicator */}
                  <motion.div
                    className="w-32 h-32 mx-auto rounded-full"
                    style={{
                      backgroundColor: selectedBody.color,
                      boxShadow: `0 0 60px ${selectedBody.color}`,
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      scale: { duration: 2, repeat: Infinity },
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    }}
                  />

                  {/* Stats */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <span className="text-muted-foreground">Diameter</span>
                      <Badge variant="secondary">{selectedBody.data.diameter}</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <span className="text-muted-foreground">Orbit Speed</span>
                      <Badge variant="secondary">{selectedBody.data.orbitSpeed}</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <span className="text-muted-foreground">Distance</span>
                      <Badge variant="secondary">{selectedBody.data.distance}</Badge>
                    </div>
                    {selectedBody.data.discoveryYear && (
                      <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                        <span className="text-muted-foreground">Discovery</span>
                        <Badge variant="secondary">{selectedBody.data.discoveryYear}</Badge>
                      </div>
                    )}
                    {selectedBody.data.missionData && (
                      <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                        <span className="text-sm font-semibold text-accent">Mission Data:</span>
                        <p className="text-sm mt-1">{selectedBody.data.missionData}</p>
                      </div>
                    )}
                  </div>

                  {/* Fun Fact */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30"
                  >
                    <p className="text-sm font-semibold text-primary mb-2">✨ Fun Fact</p>
                    <p className="text-sm">{selectedBody.data.funFact}</p>
                  </motion.div>

                  {/* Learn More Button */}
                  <Button className="w-full gap-2" size="lg">
                    <ExternalLink className="w-4 h-4" />
                    Learn More on NASA.gov
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpaceCanvas;
