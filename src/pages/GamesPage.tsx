import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import EnhancedGamesCard from "@/components/hackathon/EnhancedGamesCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, Zap, Target } from "lucide-react";

const GamesPage = () => {
  const achievements = [
    { title: "Space Cadet", description: "Complete your first quiz", icon: Star, unlocked: true },
    { title: "Planet Expert", description: "Score 100% on Planets category", icon: Target, unlocked: true },
    { title: "Speed Demon", description: "Answer 10 questions under 5 seconds", icon: Zap, unlocked: false },
    { title: "Cosmic Scholar", description: "Complete all categories", icon: Trophy, unlocked: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Space Learning Games
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge and unlock achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <EnhancedGamesCard />
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-accent" />
                    Achievements
                  </CardTitle>
                  <CardDescription>Unlock badges as you learn</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => {
                      const Icon = achievement.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className={`p-4 rounded-lg border transition-all ${
                            achievement.unlocked
                              ? "border-accent bg-accent/10"
                              : "border-border bg-background/50 opacity-50"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${
                              achievement.unlocked ? "bg-accent/20" : "bg-muted"
                            }`}>
                              <Icon className={`w-5 h-5 ${
                                achievement.unlocked ? "text-accent" : "text-muted-foreground"
                              }`} />
                            </div>
                            <div>
                              <h4 className="font-semibold">{achievement.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle>Leaderboard</CardTitle>
                  <CardDescription>Top scores this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "AstroExplorer", score: 2450 },
                      { name: "SpaceWizard", score: 2280 },
                      { name: "CosmicBrain", score: 2150 },
                      { name: "You", score: 0 },
                    ].map((player, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          player.name === "You"
                            ? "bg-primary/10 border border-primary/20"
                            : "bg-background/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`font-bold ${
                            index === 0 ? "text-accent" : "text-muted-foreground"
                          }`}>
                            #{index + 1}
                          </span>
                          <span className="font-medium">{player.name}</span>
                        </div>
                        <span className="font-bold">{player.score}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
