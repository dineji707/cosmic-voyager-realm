import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Satellite, Waves, Cloud, Wind, Droplets } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const PACEMissionPage = () => {
  const oceanData = [
    { parameter: "Ocean Chlorophyll", value: 85, unit: "mg/m³", icon: Droplets, color: "text-green-500" },
    { parameter: "Aerosol Optical Depth", value: 65, unit: "AOD", icon: Cloud, color: "text-blue-500" },
    { parameter: "Cloud Coverage", value: 42, unit: "%", icon: Cloud, color: "text-gray-500" },
    { parameter: "Wind Speed", value: 78, unit: "km/h", icon: Wind, color: "text-cyan-500" },
  ];

  const measurements = [
    {
      title: "Phytoplankton Monitoring",
      description: "Track microscopic ocean plants that produce 50% of Earth's oxygen",
      metric: "2.5 billion",
      unit: "measurements/day",
    },
    {
      title: "Aerosol Analysis",
      description: "Monitor air quality and particulate matter affecting climate",
      metric: "1.8 million",
      unit: "data points/hour",
    },
    {
      title: "Cloud Properties",
      description: "Study cloud formation and their impact on weather patterns",
      metric: "360°",
      unit: "global coverage",
    },
    {
      title: "Ocean Color",
      description: "Analyze ocean health through color spectrum analysis",
      metric: "UV to NIR",
      unit: "spectral range",
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Satellite className="w-12 h-12 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              PACE Mission
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plankton, Aerosol, Cloud, ocean Ecosystem - Monitoring Earth's health from space
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {oceanData.map((data, index) => {
            const Icon = data.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-3">
                      <Icon className={`w-8 h-8 ${data.color}`} />
                      <span className="text-2xl font-bold">{data.value}{data.unit}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{data.parameter}</p>
                    <Progress value={data.value} className="mt-3 h-2" />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {measurements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Waves className="w-5 h-5 text-primary" />
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">{item.metric}</span>
                    <span className="text-muted-foreground">{item.unit}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle>Mission Objectives</CardTitle>
              <CardDescription>Key goals of the PACE mission</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Extend key climate data records on ocean biology and ecology",
                  "Make global measurements of ocean color to identify phytoplankton types",
                  "Study aerosols and clouds to understand their impact on climate",
                  "Provide atmospheric correction for ocean color measurements",
                  "Monitor ocean health and water quality worldwide",
                  "Support fisheries management and harmful algal bloom detection",
                ].map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm">{objective}</p>
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

export default PACEMissionPage;
