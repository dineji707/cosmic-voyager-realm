import { motion } from "framer-motion";
import { BookOpen, ExternalLink, ChevronDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const LearningCard = () => {
  const faqs = [
    {
      question: "What are Near-Earth Objects (NEOs)?",
      answer: "Near-Earth Objects are asteroids or comets that come within 1.3 astronomical units of the Sun. NASA tracks these objects to ensure planetary safety.",
      image: "🌑",
      link: "https://cneos.jpl.nasa.gov/",
    },
    {
      question: "What is the PACE Mission?",
      answer: "PACE (Plankton, Aerosol, Cloud, ocean Ecosystem) is NASA's mission to study ocean health, air quality, and climate change from space.",
      image: "🌊",
      link: "https://pace.gsfc.nasa.gov/",
    },
    {
      question: "How does NASA track space weather?",
      answer: "NASA uses satellites and ground-based instruments to monitor solar activity, cosmic rays, and their effects on Earth's magnetosphere.",
      image: "☀️",
      link: "https://www.nasa.gov/spaceweather/",
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
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <span className="text-2xl">{faq.image}</span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pl-10">
                    <p className="text-muted-foreground">{faq.answer}</p>
                    <Button variant="outline" size="sm" asChild className="gap-2">
                      <a href={faq.link} target="_blank" rel="noopener noreferrer">
                        Learn More <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LearningCard;
