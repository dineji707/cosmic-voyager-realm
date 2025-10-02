import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Image, Telescope, Rocket, Globe } from "lucide-react";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = {
    nebulae: [
      { title: "Carina Nebula", description: "Star-forming region captured by JWST", emoji: "🌟" },
      { title: "Orion Nebula", description: "Closest region of massive star formation", emoji: "✨" },
      { title: "Eagle Nebula", description: "Pillars of Creation", emoji: "🦅" },
      { title: "Horsehead Nebula", description: "Dark nebula in Orion", emoji: "🐴" },
    ],
    planets: [
      { title: "Jupiter's Great Red Spot", description: "Giant storm on Jupiter", emoji: "🔴" },
      { title: "Saturn's Rings", description: "Iconic ring system", emoji: "💫" },
      { title: "Mars Olympus Mons", description: "Largest volcano in solar system", emoji: "🏔️" },
      { title: "Earth from ISS", description: "Our blue marble from space", emoji: "🌍" },
    ],
    galaxies: [
      { title: "Andromeda Galaxy", description: "Our nearest spiral galaxy", emoji: "🌌" },
      { title: "Whirlpool Galaxy", description: "Classic spiral structure", emoji: "🌀" },
      { title: "Sombrero Galaxy", description: "Unusually large central bulge", emoji: "🎩" },
      { title: "Pinwheel Galaxy", description: "Face-on spiral galaxy", emoji: "⚡" },
    ],
    missions: [
      { title: "Apollo 11 Landing", description: "First human moon landing", emoji: "🚀" },
      { title: "ISS Construction", description: "International collaboration", emoji: "🛰️" },
      { title: "Mars Rover Selfie", description: "Perseverance on Mars", emoji: "📸" },
      { title: "Hubble Deployment", description: "Space telescope launch", emoji: "🔭" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            NASA Image Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore stunning images from space missions and telescopes
          </p>
        </motion.div>

        <Tabs defaultValue="nebulae" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="nebulae" className="gap-2">
              <Telescope className="w-4 h-4" />
              <span className="hidden sm:inline">Nebulae</span>
            </TabsTrigger>
            <TabsTrigger value="planets" className="gap-2">
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">Planets</span>
            </TabsTrigger>
            <TabsTrigger value="galaxies" className="gap-2">
              <Image className="w-4 h-4" />
              <span className="hidden sm:inline">Galaxies</span>
            </TabsTrigger>
            <TabsTrigger value="missions" className="gap-2">
              <Rocket className="w-4 h-4" />
              <span className="hidden sm:inline">Missions</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(images).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                  >
                    <Card 
                      className="overflow-hidden cursor-pointer border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all"
                      onClick={() => setSelectedImage(item.title)}
                    >
                      <CardContent className="p-0">
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-8xl">
                          {item.emoji}
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          <Badge variant="secondary" className="mt-3">
                            NASA Archive
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="max-w-4xl w-full"
            >
              <Card className="border-primary/20">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">{selectedImage}</h2>
                  <p className="text-muted-foreground">
                    Click anywhere to close • Full NASA API integration coming soon
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
