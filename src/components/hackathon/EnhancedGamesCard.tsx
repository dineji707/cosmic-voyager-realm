import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Trophy, HelpCircle, Timer, Star, Zap, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Question {
  question: string;
  options: string[];
  correct: number;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  points: number;
}

const EnhancedGamesCard = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy");
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [streak, setStreak] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const allQuestions: Question[] = [
    // Easy Planets
    { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1, category: "planets", difficulty: "easy", points: 10 },
    { question: "What is the largest planet in our solar system?", options: ["Saturn", "Neptune", "Jupiter", "Uranus"], correct: 2, category: "planets", difficulty: "easy", points: 10 },
    { question: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Earth", "Mars"], correct: 1, category: "planets", difficulty: "easy", points: 10 },
    
    // Medium Planets
    { question: "How many moons does Jupiter have?", options: ["12", "53", "95", "Over 95"], correct: 3, category: "planets", difficulty: "medium", points: 20 },
    { question: "Which planet has the most prominent rings?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 1, category: "planets", difficulty: "medium", points: 20 },
    { question: "What is the hottest planet in our solar system?", options: ["Mercury", "Venus", "Mars", "Earth"], correct: 1, category: "planets", difficulty: "medium", points: 20 },
    
    // Hard Planets
    { question: "What is the orbital period of Neptune around the Sun?", options: ["84 years", "165 years", "248 years", "29 years"], correct: 1, category: "planets", difficulty: "hard", points: 30 },
    { question: "Which planet rotates on its side?", options: ["Saturn", "Neptune", "Uranus", "Jupiter"], correct: 2, category: "planets", difficulty: "hard", points: 30 },
    
    // Easy Missions
    { question: "Which mission first landed humans on the Moon?", options: ["Apollo 10", "Apollo 11", "Apollo 13", "Gemini 7"], correct: 1, category: "missions", difficulty: "easy", points: 10 },
    { question: "What does ISS stand for?", options: ["International Space Station", "Interstellar Space System", "Internal Solar Station", "Ionic Space Satellite"], correct: 0, category: "missions", difficulty: "easy", points: 10 },
    
    // Medium Missions
    { question: "Which rover is currently exploring Mars?", options: ["Curiosity", "Perseverance", "Both A and B", "Spirit"], correct: 2, category: "missions", difficulty: "medium", points: 20 },
    { question: "What year did the first person walk on the Moon?", options: ["1965", "1967", "1969", "1971"], correct: 2, category: "missions", difficulty: "medium", points: 20 },
    
    // Hard Missions
    { question: "Which spacecraft visited all four gas giant planets?", options: ["Pioneer 10", "Voyager 2", "Galileo", "Cassini"], correct: 1, category: "missions", difficulty: "hard", points: 30 },
    
    // Easy General
    { question: "What force keeps planets in orbit around the Sun?", options: ["Magnetism", "Gravity", "Inertia", "Nuclear Force"], correct: 1, category: "general", difficulty: "easy", points: 10 },
    { question: "What is the name of our galaxy?", options: ["Andromeda", "Milky Way", "Triangulum", "Whirlpool"], correct: 1, category: "general", difficulty: "easy", points: 10 },
    
    // Medium General
    { question: "What is a light-year?", options: ["A year on another planet", "Time light takes to travel to Earth", "Distance light travels in a year", "A year in space"], correct: 2, category: "general", difficulty: "medium", points: 20 },
    { question: "What is the closest star to Earth?", options: ["Alpha Centauri", "Proxima Centauri", "The Sun", "Sirius"], correct: 2, category: "general", difficulty: "medium", points: 20 },
    
    // Hard General
    { question: "What is the estimated age of the universe?", options: ["4.5 billion years", "10 billion years", "13.8 billion years", "20 billion years"], correct: 2, category: "general", difficulty: "hard", points: 30 },
  ];

  const filteredQuestions = allQuestions.filter(
    (q) => (category === "all" || q.category === category) && q.difficulty === difficulty
  );

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isPlaying) {
      handleTimeout();
    }
  }, [timeLeft, isPlaying]);

  const handleTimeout = () => {
    setShowResult(true);
    setStreak(0);
    setTimeout(() => {
      nextQuestion();
    }, 1500);
  };

  const handleAnswer = (index: number) => {
    if (showResult || !isPlaying) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    const currentQ = filteredQuestions[currentQuestion];
    if (index === currentQ.correct) {
      const timeBonus = Math.floor(timeLeft / 3);
      const streakBonus = streak * 5;
      const totalPoints = currentQ.points + timeBonus + streakBonus;
      setScore(score + totalPoints);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      nextQuestion();
    }, 1500);
  };

  const nextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsPlaying(false);
    }
  };

  const startGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setStreak(0);
    setTimeLeft(30);
    setIsPlaying(true);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const resetQuiz = () => {
    setIsPlaying(false);
    setScore(0);
    setCurrentQuestion(0);
    setStreak(0);
    setTimeLeft(30);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "easy": return "text-green-500";
      case "medium": return "text-yellow-500";
      case "hard": return "text-red-500";
    }
  };

  return (
    <motion.div
      id="quiz-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full border-accent/20 bg-card/30 backdrop-blur-md transition-all hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-accent/10">
                <Gamepad2 className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-2xl">Space Quiz 🎮</CardTitle>
            </div>
            {streak > 0 && isPlaying && (
              <Badge variant="secondary" className="gap-1">
                <Zap className="w-3 h-3" />
                {streak}x Streak
              </Badge>
            )}
          </div>
          <CardDescription>Test your space knowledge across multiple categories</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isPlaying ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  <span className="font-semibold">Best Score: {score}</span>
                </div>
                <Badge className={getDifficultyColor()}>{difficulty.toUpperCase()}</Badge>
              </div>

              <Tabs defaultValue="planets" onValueChange={setCategory}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="planets">Planets</TabsTrigger>
                  <TabsTrigger value="missions">Missions</TabsTrigger>
                  <TabsTrigger value="general">General</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="space-y-2">
                <p className="text-sm font-medium">Select Difficulty:</p>
                <div className="grid grid-cols-3 gap-2">
                  {(["easy", "medium", "hard"] as const).map((diff) => (
                    <Button
                      key={diff}
                      variant={difficulty === diff ? "default" : "outline"}
                      onClick={() => setDifficulty(diff)}
                      className="capitalize"
                    >
                      {diff}
                    </Button>
                  ))}
                </div>
              </div>

              <Button onClick={startGame} className="w-full gap-2" size="lg">
                <Star className="w-5 h-5" />
                Start Quiz
              </Button>

              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Easy: 10 points</p>
                <p>• Medium: 20 points</p>
                <p>• Hard: 30 points</p>
                <p>• Time bonus & streak multiplier!</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  <span className="font-semibold">Score: {score}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Timer className="w-5 h-5" />
                  <span className={`font-bold ${timeLeft < 10 ? "text-destructive" : ""}`}>
                    {timeLeft}s
                  </span>
                </div>
              </div>

              <Progress value={(currentQuestion / filteredQuestions.length) * 100} className="h-2" />

              {currentQuestion < filteredQuestions.length ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">
                        Question {currentQuestion + 1}/{filteredQuestions.length}
                      </Badge>
                      <Badge className={getDifficultyColor()}>
                        {filteredQuestions[currentQuestion].difficulty}
                      </Badge>
                    </div>

                    <p className="font-medium text-lg">{filteredQuestions[currentQuestion].question}</p>
                    
                    <div className="grid grid-cols-1 gap-2">
                      {filteredQuestions[currentQuestion].options.map((option, index) => {
                        const isCorrect = index === filteredQuestions[currentQuestion].correct;
                        const isSelected = index === selectedAnswer;
                        
                        let buttonClass = "justify-start hover:bg-accent/10 hover:border-accent transition-all";
                        if (showResult) {
                          if (isCorrect) {
                            buttonClass += " bg-green-500/20 border-green-500";
                          } else if (isSelected && !isCorrect) {
                            buttonClass += " bg-destructive/20 border-destructive";
                          }
                        }

                        return (
                          <motion.div
                            key={index}
                            whileHover={{ scale: showResult ? 1 : 1.02 }}
                            whileTap={{ scale: showResult ? 1 : 0.98 }}
                          >
                            <Button
                              variant="outline"
                              onClick={() => handleAnswer(index)}
                              className={buttonClass}
                              disabled={showResult}
                            >
                              {option}
                            </Button>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>
              ) : null}

              <div className="space-y-3">
                <Button onClick={resetQuiz} variant="outline" className="w-full">
                  Reset Quiz
                </Button>
                
                <Button 
                  variant="secondary"
                  className="w-full gap-2"
                  onClick={() => {
                    const aiSection = document.getElementById('ai-assist-section');
                    aiSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                >
                  <Bot className="w-4 h-4" />
                  Need Help? Ask AI Assist
                </Button>
              </div>
            </div>
          )}
          
          {!isPlaying && currentQuestion > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 p-4 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/30"
            >
              <div className="text-center">
                <Trophy className="w-12 h-12 text-accent mx-auto mb-2" />
                <h3 className="text-2xl font-bold mb-1">Final Score</h3>
                <p className="text-4xl font-bold text-primary mb-2">{score} points</p>
                <p className="text-sm text-muted-foreground">
                  {score >= 200 ? "🌟 Amazing! You're a space expert!" :
                   score >= 100 ? "🚀 Great job! Keep learning!" :
                   "💫 Good start! Try again to improve!"}
                </p>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EnhancedGamesCard;
