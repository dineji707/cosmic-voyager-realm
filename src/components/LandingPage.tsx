import { motion } from "framer-motion";
import SpaceCanvas from "@/components/hackathon/SpaceCanvas";
import LearningCard from "@/components/hackathon/LearningCard";
import GamesCard from "@/components/hackathon/GamesCard";
import AIAssistCard from "@/components/hackathon/AIAssistCard";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Section - Space Canvas */}
      <SpaceCanvas />

      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            NASA Space Hackathon
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore, Learn, and Play in the cosmic mission control center
          </p>
        </motion.div>

        {/* Bottom Section - Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <LearningCard />
          <GamesCard />
          <AIAssistCard />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
