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
    const responses: { [key: string]: string } = {
      mars: "Mars is the fourth planet from the Sun and is often called the Red Planet due to iron oxide on its surface. NASA has several rovers exploring Mars!",
      moon: "The Moon is Earth's only natural satellite. It takes about 27.3 days to orbit Earth. NASA's Artemis program aims to return humans to the Moon!",
      default: "That's a great question! NASA is constantly making new discoveries. For detailed information, I recommend visiting nasa.gov or checking out the latest mission updates.",
    };

    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes("mars")) return responses.mars;
    if (lowerMessage.includes("moon")) return responses.moon;
    return responses.default;
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
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
