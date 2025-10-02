import { motion } from "framer-motion";
import { Gamepad2, Trophy, HelpCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const GamesCard = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const questions = [
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correct: 1,
    },
    {
      question: "How many moons does Jupiter have?",
      options: ["12", "53", "95", "Over 95"],
      correct: 3,
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Saturn", "Neptune", "Jupiter", "Uranus"],
      correct: 2,
    },
  ];

  const handleAnswer = (index: number) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
  };

  const scorePercentage = (score / questions.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      whileHover={{ y: -5, rotateY: isFlipped ? 180 : 0 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Card className="h-full border-accent/20 bg-card/50 backdrop-blur-sm transition-all hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-lg bg-accent/10">
              <Gamepad2 className="w-6 h-6 text-accent" />
            </div>
            <CardTitle className="text-2xl">Fun Games 🎮</CardTitle>
          </div>
          <CardDescription>Test your space knowledge</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-accent" />
            <span className="font-semibold">Score: {score}/{questions.length}</span>
          </div>

          <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />

          {currentQuestion < questions.length ? (
            <div className="space-y-4">
              <p className="font-medium text-lg">{questions[currentQuestion].question}</p>
              <div className="grid grid-cols-1 gap-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => handleAnswer(index)}
                    className="justify-start hover:bg-accent/10 hover:border-accent"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-center">
              <p className="text-xl font-bold">Quiz Complete!</p>
              <p className="text-muted-foreground">
                You scored {score} out of {questions.length}
              </p>
              {scorePercentage < 50 && (
                <Button variant="outline" className="gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Need Help? Ask AI Assist
                </Button>
              )}
              <Button onClick={resetQuiz} className="w-full">
                Try Again
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GamesCard;
