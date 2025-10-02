import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, AlertTriangle, CheckCircle, Calendar } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const NEOTrackerPage = () => {
  const neoData = [
    {
      name: "2024 PT5",
      size: "10-20 meters",
      distance: "0.05 AU",
      velocity: "15 km/s",
      hazardous: false,
      date: "2025-03-15",
    },
    {
      name: "Apophis",
      size: "370 meters",
      distance: "0.10 AU",
      velocity: "30 km/s",
      hazardous: true,
      date: "2029-04-13",
    },
    {
      name: "Bennu",
      size: "490 meters",
      distance: "0.25 AU",
      velocity: "28 km/s",
      hazardous: true,
      date: "2025-09-24",
    },
    {
      name: "2024 XY1",
      size: "50 meters",
      distance: "0.15 AU",
      velocity: "20 km/s",
      hazardous: false,
      date: "2025-06-08",
    },
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Near-Earth Object Tracker
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Monitor asteroids and comets that come close to Earth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Objects Tracked", value: "32,451", icon: Target },
            { label: "Potentially Hazardous", value: "158", icon: AlertTriangle },
            { label: "This Month", value: "12", icon: Calendar },
            { label: "Safe Distance", value: "100%", icon: CheckCircle },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Upcoming Close Approaches
              </CardTitle>
              <CardDescription>
                Near-Earth Objects approaching in the next 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {neoData.map((neo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="p-4 rounded-lg border border-border bg-background/50 hover:bg-background/80 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{neo.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Closest approach: {neo.date}
                        </p>
                      </div>
                      {neo.hazardous ? (
                        <Badge variant="destructive" className="gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          Potentially Hazardous
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Safe
                        </Badge>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Size</p>
                        <p className="font-medium">{neo.size}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Distance</p>
                        <p className="font-medium">{neo.distance}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Velocity</p>
                        <p className="font-medium">{neo.velocity}</p>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Distance from Earth</span>
                        <span>{(parseFloat(neo.distance) * 100).toFixed(1)}% of max safe range</span>
                      </div>
                      <Progress value={parseFloat(neo.distance) * 100} className="h-2" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default NEOTrackerPage;
