import { motion } from "framer-motion";
import { MessageCircle, Users, Globe, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const JoinCommunity = () => {
  const whatsappGroupLink = "https://chat.whatsapp.com/your-group-link"; // Replace with actual WhatsApp group link

  return (
    <div id="community-section" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <Card className="border-2 border-primary/30 bg-card/30 backdrop-blur-md relative overflow-hidden">
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <CardHeader className="text-center relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="mx-auto mb-4"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-[0_0_40px_hsl(var(--primary)/0.6)]">
                <Users className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            
            <CardTitle className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Join Our Space Community! 🚀
            </CardTitle>
            <CardDescription className="text-lg">
              Connect with fellow space enthusiasts, share knowledge, and explore the cosmos together
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-center"
              >
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Live Discussions</h3>
                <p className="text-sm text-muted-foreground">Real-time space conversations</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 rounded-lg bg-accent/10 border border-accent/20 text-center"
              >
                <Globe className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Global Network</h3>
                <p className="text-sm text-muted-foreground">Connect with space lovers worldwide</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-center"
              >
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Expert Insights</h3>
                <p className="text-sm text-muted-foreground">Learn from space professionals</p>
              </motion.div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="w-full text-lg gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]"
                onClick={() => window.open(whatsappGroupLink, '_blank')}
              >
                <MessageCircle className="w-6 h-6" />
                Join WhatsApp Community
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
            
            <p className="text-center text-sm text-muted-foreground">
              Join 500+ space enthusiasts already exploring together! 🌌
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default JoinCommunity;
