import { motion } from "framer-motion";
import { X, Globe2, Ruler, Weight, Clock, Thermometer, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { PlanetData } from "./SolarSystem";

interface InfoPanelProps {
  planet: PlanetData;
  onClose: () => void;
}

const InfoPanel = ({ planet, onClose }: InfoPanelProps) => {
  const stats = [
    { icon: <Ruler className="w-5 h-5" />, label: "Diameter", value: planet.diameter },
    { icon: <Weight className="w-5 h-5" />, label: "Mass", value: planet.mass },
    { icon: <Clock className="w-5 h-5" />, label: "Day Length", value: planet.dayLength },
    { icon: <Thermometer className="w-5 h-5" />, label: "Temperature", value: planet.temperature },
  ];

  if (planet.moons !== undefined) {
    stats.push({
      icon: <Moon className="w-5 h-5" />,
      label: "Moons",
      value: planet.moons.toString(),
    });
  }

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="absolute right-0 top-0 h-full w-full md:w-[500px] z-20"
    >
      <Card className="h-full rounded-none md:rounded-l-2xl border-0 md:border-l bg-card/95 backdrop-blur-md flex flex-col overflow-hidden">
        {/* Header */}
        <div className="relative p-6 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 hover:bg-background/20"
          >
            <X className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-3 mb-2">
            <Globe2 className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">{planet.name}</h2>
          </div>
          <p className="text-muted-foreground">{planet.description}</p>
        </div>

        {/* Stats Grid */}
        <div className="p-6 space-y-4 flex-1 overflow-y-auto">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
              Explorer's Data
            </h3>
            
            <div className="grid gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors"
                >
                  <div className="text-primary">{stat.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="font-semibold">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-4 bg-accent/10 border border-accent/30 rounded-lg"
          >
            <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
              <span className="text-lg">✨</span>
              Fun Fact
            </h4>
            <p className="text-sm">{planet.funFact}</p>
          </motion.div>

          {/* Visit Button */}
          <Button 
            className="w-full mt-4" 
            size="lg"
            onClick={() => window.open(`https://science.nasa.gov/`, '_blank')}
          >
            Learn More at NASA
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default InfoPanel;
