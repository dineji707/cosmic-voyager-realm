import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SpaceCanvas from "@/components/hackathon/SpaceCanvas";
import LearningCard from "@/components/hackathon/LearningCard";
import EnhancedGamesCard from "@/components/hackathon/EnhancedGamesCard";
import AIAssistCard from "@/components/hackathon/AIAssistCard";
import TeamSection from "@/components/hackathon/TeamSection";
import JoinCommunity from "@/components/hackathon/JoinCommunity";
import NASAGallery from "@/components/hackathon/NASAGallery";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      
      <Navigation />
      
      {/* Section 1: Home Animation - Space Canvas */}
      <section id="home-section" className="relative pt-16">
        <SpaceCanvas />
      </section>

      {/* Section 2: NASA Space - Learning, Quiz, AI Assist */}
      <section id="nasa-space-section" className="relative">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              NASA Space Hackathon
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore, Learn, and Play in the cosmic mission control center
            </p>
          </motion.div>

          {/* Three Interactive Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <LearningCard />
            <EnhancedGamesCard />
            <AIAssistCard />
          </div>
        </div>
      </section>

      {/* Section 3: Join Community */}
      <section className="relative">
        <JoinCommunity />
      </section>

      {/* Section 4: Team Cards + NASA Gallery */}
      <section id="team-gallery-section" className="relative">
        <TeamSection />
        <NASAGallery />
      </section>
    </div>
  );
};

export default LandingPage;
