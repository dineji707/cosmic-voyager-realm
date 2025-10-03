import { motion } from "framer-motion";
import { Bot, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

interface Message {
  text: string;
  isUser: boolean;
  isTyping?: boolean;
}

const AIAssistCard = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm your NASA Space Assistant. Ask me anything about space, planets, or missions!", isUser: false },
  ]);
  const [input, setInput] = useState("");

  const mockAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Mars related
    if (lowerMessage.includes("mars")) {
      return "Mars is the fourth planet from the Sun, known as the Red Planet due to iron oxide (rust) on its surface. NASA has multiple rovers exploring Mars: Perseverance is searching for signs of ancient microbial life, while Curiosity studies Martian geology. The planet has the largest volcano in our solar system (Olympus Mons) and a massive canyon system (Valles Marineris). Future plans include sending humans to Mars by the 2030s!";
    }
    
    // Moon related
    if (lowerMessage.includes("moon") || lowerMessage.includes("lunar")) {
      return "The Moon is Earth's only natural satellite, formed about 4.5 billion years ago. It takes 27.3 days to orbit Earth and is tidally locked, so we always see the same side. NASA's Artemis program aims to return humans to the Moon by 2025, including the first woman and person of color. The Moon has water ice at its poles and will serve as a stepping stone for Mars missions!";
    }
    
    // ISS related
    if (lowerMessage.includes("iss") || lowerMessage.includes("space station")) {
      return "The International Space Station (ISS) is a habitable artificial satellite orbiting Earth at about 408 km altitude. It travels at 28,000 km/h, completing one orbit every 90 minutes! Astronauts conduct scientific experiments in microgravity, studying biology, physics, astronomy, and meteorology. The ISS has been continuously occupied since November 2000, making it over 24 years of human presence in space!";
    }
    
    // Black holes
    if (lowerMessage.includes("black hole")) {
      return "Black holes are regions where gravity is so intense that nothing can escape, not even light! They form when massive stars collapse. The first image of a black hole was captured in 2019 by the Event Horizon Telescope, showing the supermassive black hole in galaxy M87. Black holes range from stellar-mass (3-100 solar masses) to supermassive (millions to billions of solar masses) found at galaxy centers.";
    }
    
    // Sun related
    if (lowerMessage.includes("sun") || lowerMessage.includes("solar")) {
      return "The Sun is our nearest star, a massive ball of hot plasma that's been burning for 4.6 billion years! It's 109 times wider than Earth and contains 99.86% of the solar system's mass. The Sun generates energy through nuclear fusion, converting 600 million tons of hydrogen to helium every second. NASA's Parker Solar Probe is the fastest human-made object, flying through the Sun's corona to study solar activity!";
    }
    
    // Exoplanets
    if (lowerMessage.includes("exoplanet") || lowerMessage.includes("alien planet")) {
      return "Exoplanets are planets orbiting stars beyond our solar system. NASA has discovered over 5,500 exoplanets using the Kepler and TESS missions! Some exist in the 'habitable zone' where liquid water could exist. The closest exoplanet is Proxima Centauri b, just 4.2 light-years away. Scientists use the transit method (watching stars dim as planets pass) and radial velocity to detect these distant worlds.";
    }
    
    // James Webb
    if (lowerMessage.includes("webb") || lowerMessage.includes("jwst") || lowerMessage.includes("telescope")) {
      return "The James Webb Space Telescope (JWST) is the most powerful space telescope ever built! Launched in December 2021, it observes in infrared, allowing it to see through cosmic dust and study the first galaxies formed after the Big Bang. JWST has already discovered the oldest galaxies (13.4 billion years old), analyzed exoplanet atmospheres, and captured stunning images of nebulae. It's positioned at Lagrange Point 2, 1.5 million km from Earth!";
    }
    
    // General space
    if (lowerMessage.includes("space") || lowerMessage.includes("universe") || lowerMessage.includes("cosmos")) {
      return "Space is vast beyond imagination! The observable universe is 93 billion light-years across and contains approximately 2 trillion galaxies. Space isn't completely empty - it has about 1 atom per cubic meter. The Voyager 1 spacecraft, launched in 1977, is now in interstellar space, over 24 billion km from Earth! Temperature in space near Earth is about -270°C, just 3 degrees above absolute zero.";
    }
    
    // Astronauts
    if (lowerMessage.includes("astronaut") || lowerMessage.includes("spacewalk")) {
      return "Astronauts are highly trained individuals who travel to space! They exercise 2 hours daily on the ISS to prevent muscle and bone loss in microgravity. Fun facts: they can't cry properly because tears don't fall, their spines elongate (they grow 2 inches taller!), and they eat specially prepared food. Astronauts sleep in sleeping bags attached to walls. NASA requires candidates to have STEM degrees and pass rigorous physical tests!";
    }
    
    // Rockets
    if (lowerMessage.includes("rocket") || lowerMessage.includes("launch")) {
      return "Rockets work by Newton's third law: for every action, there's an equal and opposite reaction! They burn fuel to create hot gas that shoots out the back, pushing the rocket forward. NASA's Space Launch System (SLS) is the most powerful rocket ever, producing 8.8 million pounds of thrust! Rockets need to reach 28,000 km/h (orbital velocity) to stay in orbit. SpaceX and NASA are developing reusable rockets to reduce costs.";
    }
    
    // Gravity
    if (lowerMessage.includes("gravity") || lowerMessage.includes("weightless")) {
      return "Gravity is the force that attracts objects with mass toward each other. On Earth, it gives us weight and keeps us grounded. In space, astronauts aren't actually weightless - they're in constant free fall! The ISS experiences 90% of Earth's gravity, but because it's falling around Earth at high speed, astronauts float. Fun fact: your weight would be different on other planets - you'd weigh 38% on Mars and 236% on Jupiter!";
    }
    
    // Default response with suggestions
    return "That's an interesting question! I can help you learn about space topics like: Mars and planetary exploration 🔴, the Moon and Artemis program 🌙, the International Space Station 🛰️, black holes ⚫, exoplanets 🪐, the James Webb Space Telescope 🔭, astronaut life 👨‍🚀, rockets 🚀, gravity, and much more! What would you like to know about?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages([...messages, userMessage]);
    setInput("");

    // Show typing indicator
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "", isUser: false, isTyping: true }]);
    }, 500);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = mockAIResponse(input);
      setMessages(prev => prev.filter(m => !m.isTyping).concat({ text: aiResponse, isUser: false }));
    }, 1500);
  };

  return (
    <motion.div
      id="ai-assist-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full border-primary/20 bg-card/30 backdrop-blur-md transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-lg bg-primary/10">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">AI Assist 🤖</CardTitle>
          </div>
          <CardDescription>Your personal space exploration guide</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ScrollArea className="h-[300px] pr-4">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: msg.isUser ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                >
                  <motion.div
                    className={`max-w-[80%] rounded-xl p-4 ${
                      msg.isUser
                        ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
                        : "bg-secondary text-secondary-foreground shadow-[0_0_20px_hsl(var(--secondary)/0.3)]"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    animate={
                      msg.isUser
                        ? {
                            boxShadow: [
                              "0 0 20px hsl(var(--primary)/0.5)",
                              "0 0 30px hsl(var(--primary)/0.7)",
                              "0 0 20px hsl(var(--primary)/0.5)",
                            ],
                          }
                        : {}
                    }
                    transition={
                      msg.isUser
                        ? { duration: 2, repeat: Infinity }
                        : {}
                    }
                  >
                    {msg.isTyping ? (
                      <div className="flex gap-1">
                        <motion.span
                          className="text-lg"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        >
                          •
                        </motion.span>
                        <motion.span
                          className="text-lg"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        >
                          •
                        </motion.span>
                        <motion.span
                          className="text-lg"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        >
                          •
                        </motion.span>
                      </div>
                    ) : (
                      msg.text
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>

          <div className="flex gap-2">
            <Input
              placeholder="Ask about space..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="flex-1"
            />
            <Button onClick={handleSend} size="icon">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AIAssistCard;
