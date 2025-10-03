import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const NASAGallery = () => {
  const nasaImages = [
    {
      title: "Pillars of Creation",
      url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
      description: "Eagle Nebula captured by James Webb Space Telescope",
    },
    {
      title: "Mars Rover View",
      url: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80",
      description: "Perseverance Rover's view of Martian landscape",
    },
    {
      title: "Earth from ISS",
      url: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80",
      description: "Beautiful Earth view from International Space Station",
    },
    {
      title: "Spiral Galaxy",
      url: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800&q=80",
      description: "Stunning spiral galaxy millions of light-years away",
    },
    {
      title: "Solar Flare",
      url: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&q=80",
      description: "Powerful solar flare captured by Solar Dynamics Observatory",
    },
    {
      title: "Nebula Cloud",
      url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
      description: "Colorful nebula where new stars are born",
    },
  ];

  return (
    <div id="gallery-section" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          NASA Image Gallery 🌌
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore stunning imagery from NASA's missions and telescopes
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nasaImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <Card className="overflow-hidden border-2 border-primary/20 bg-card/30 backdrop-blur-sm hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all group">
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <a
                      href={image.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">View Full Size</span>
                    </a>
                  </div>
                </motion.div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                <p className="text-sm text-muted-foreground">{image.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NASAGallery;
