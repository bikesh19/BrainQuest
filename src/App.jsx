import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import QuestionArea from "./components/QuestionArea"
import ProgressBar from "./components/ProgressBar"
import Timer from "./components/Timer"
import { questions } from "./data/questions.js";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [shuffledQuestions, setShuffledQuestions] = useState(() => {
    return [...questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
  });

  useEffect(() => {
    if (showFeedback || completed) return;

    if (timeLeft <= 0) {
      handleTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showFeedback, completed]);

  const handleAnswer = useCallback((option) => {
    if (showFeedback) return;
    setSelectedAnswer(option);
    setShowFeedback(true);
    if (option === shuffledQuestions[currentQuestion].answer) {
      const bonus = timeLeft * 10;
      setScore(prev => prev + 100 + bonus);
    }
  }, [showFeedback, currentQuestion, shuffledQuestions, timeLeft]);

  const handleTimeUp = useCallback(() => {
    if (!showFeedback) {
      handleAnswer(null); // Mark as wrong if time is up
    }
  }, [showFeedback, handleAnswer]);

  const gotonextquestion = () => {
    if (currentQuestion + 1 < 10) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
      setTimeLeft(15)
    }
    else {
      setCompleted(true)
    }
  }

  const playagain = () => {
    const shuffled = [...questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    setShuffledQuestions(shuffled);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowFeedback(false);
    setCompleted(false);
    setTimeLeft(15);
  }

  return (
    <div className="min-h-screen text-amber-50 flex items-center justify-center bg-linear-to-br from-indigo-900 via-slate-900 to-blue-900 flex-col p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-yellow-400 font-bold text-6xl tracking-tighter mb-2 drop-shadow-lg">BrainQuest</h1>
        <p className="text-sky-300 font-medium tracking-widest uppercase text-sm">Elevate Your Mind</p>
      </motion.div>

      {!completed && (
        <div className="w-full max-w-xl flex flex-col items-center">
          <ProgressBar current={currentQuestion} total={10} />
          <div className="flex justify-between w-full mb-4 px-2 text-sm font-semibold text-sky-200/70">
            <span>QUESTION {currentQuestion + 1} OF 10</span>
            <span>SCORE: {score}</span>
          </div>
          {!showFeedback && (
            <Timer
              duration={15}
              timeLeft={timeLeft}
              resetTrigger={currentQuestion}
            />
          )}
        </div>
      )}

      <AnimatePresence mode="wait">
        {completed ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-gray-900/50 p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl"
          >
            <h2 className="text-4xl font-bold text-green-400 mb-6">Quiz Complete!</h2>
            <div className="mb-8">
              <p className="text-gray-400 text-lg mb-2">Your Final Score</p>
              <p className="text-7xl font-black text-yellow-400">{score}</p>
            </div>
            <button
              onClick={playagain}
              className="bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-10 py-4 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20"
            >
              Play Again
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col items-center"
          >
            <QuestionArea
              showFeedback={showFeedback}
              onAnswer={handleAnswer}
              data={shuffledQuestions[currentQuestion]}
              selected={selectedAnswer}
            />

            <div className="h-20 flex items-center">
              {showFeedback && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={gotonextquestion}
                  className="bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold px-8 py-3 rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95"
                >
                  {currentQuestion + 1 < 10 ? "Continue" : "View Result"}
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App