import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const LearningCard = () => {
  const faqs = [
    {
      question: "What are Near-Earth Objects (NEOs)?",
      answer: "Near-Earth Objects are asteroids or comets that come within 1.3 astronomical units of the Sun. NASA tracks over 30,000 NEOs to ensure planetary safety and study potential resources for future space missions.",
      image: "🌑",
      link: "https://cneos.jpl.nasa.gov/",
    },
    {
      question: "What is the PACE Mission?",
      answer: "PACE (Plankton, Aerosol, Cloud, ocean Ecosystem) is NASA's mission to study ocean health, air quality, and climate change from space. Launched in 2024, it provides unprecedented insights into Earth's oceans and atmosphere.",
      image: "🌊",
      link: "https://pace.gsfc.nasa.gov/",
    },
    {
      question: "How does NASA track space weather?",
      answer: "NASA uses satellites like SOHO, SDO, and ground-based instruments to monitor solar activity, cosmic rays, and their effects on Earth's magnetosphere. This helps protect astronauts, satellites, and power grids.",
      image: "☀️",
      link: "https://www.nasa.gov/spaceweather/",
    },
    {
      question: "What is the James Webb Space Telescope?",
      answer: "The James Webb Space Telescope (JWST) is the most powerful space telescope ever built. Launched in 2021, it peers deeper into space and time than any previous telescope, revealing the first galaxies and studying exoplanet atmospheres.",
      image: "🔭",
      link: "https://www.jwst.nasa.gov/",
    },
    {
      question: "How do astronauts live in space?",
      answer: "Astronauts on the ISS live in microgravity, exercising 2 hours daily to prevent muscle loss, eating specially prepared food, and conducting scientific experiments. They orbit Earth every 90 minutes, experiencing 16 sunrises and sunsets per day!",
      image: "👨‍🚀",
      link: "https://www.nasa.gov/mission_pages/station/main/",
    },
    {
      question: "What is Mars exploration about?",
      answer: "NASA's Mars exploration program includes rovers like Perseverance and Curiosity, searching for signs of ancient microbial life, studying Martian geology, and preparing for future human missions. The ultimate goal is to send humans to Mars by the 2030s.",
      image: "🔴",
      link: "https://mars.nasa.gov/",
    },
    {
      question: "What are exoplanets?",
      answer: "Exoplanets are planets orbiting stars outside our solar system. NASA has discovered over 5,000 exoplanets using missions like Kepler and TESS. Some exist in the 'habitable zone' where liquid water could exist, potentially supporting life.",
      image: "🪐",
      link: "https://exoplanets.nasa.gov/",
    },
    {
      question: "How does gravity work in space?",
      answer: "Gravity exists everywhere in space! The ISS experiences 90% of Earth's gravity, but astronauts float because they're in constant free fall around Earth. This state of continuous falling creates the sensation of weightlessness.",
      image: "🌌",
      link: "https://www.nasa.gov/stem-ed-resources/",
    },
    {
      question: "What is the Artemis program?",
      answer: "Artemis is NASA's program to return humans to the Moon by 2025, including the first woman and person of color. The program will establish a sustainable lunar presence and prepare for missions to Mars.",
      image: "🌙",
      link: "https://www.nasa.gov/specials/artemis/",
    },
    {
      question: "How do black holes work?",
      answer: "Black holes are regions where gravity is so strong that nothing, not even light, can escape. They form when massive stars collapse. NASA studies them using X-ray telescopes and the Event Horizon Telescope, which captured the first black hole image in 2019.",
      image: "⚫",
      link: "https://www.nasa.gov/black-holes",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-lg bg-primary/10">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Learning 📖</CardTitle>
          </div>
          <CardDescription>Explore space science with interactive FAQs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="max-h-[400px] overflow-y-auto pr-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    <motion.span 
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span 
                        className="text-3xl"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      >
                        {faq.image}
                      </motion.span>
                      <span className="text-sm md:text-base">{faq.question}</span>
                    </motion.span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3 pl-12 pr-4"
                    >
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                      <Button variant="outline" size="sm" asChild className="gap-2 hover:bg-primary/10">
                        <a href={faq.link} target="_blank" rel="noopener noreferrer">
                          Learn More <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="pt-4 border-t border-border/50">
            <Button 
              className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]" 
              size="lg"
              onClick={() => {
                const quizSection = document.getElementById('quiz-section');
                quizSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
            >
              <Rocket className="w-5 h-5" />
              Ready for Quiz? Let's Go!
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LearningCard;
