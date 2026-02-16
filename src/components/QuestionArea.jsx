import React from 'react';
import { motion } from 'framer-motion';

function QuestionArea({ data, onAnswer, showFeedback, selected }) {
  const { question, options, answer } = data;

  const getButtonStyles = (option) => {
    if (!showFeedback) {
      return "bg-slate-800 hover:bg-slate-700 border-slate-700 hover:border-purple-500/50 text-slate-200 hover:text-white";
    }

    if (option === answer) {
      return "bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]";
    }

    if (option === selected) {
      return "bg-rose-500/20 border-rose-500 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.2)]";
    }

    return "bg-slate-900/40 border-slate-800 text-slate-500 opacity-50";
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-slate-900/80 p-8 rounded-[2.5rem] shadow-2xl w-full max-w-xl border border-white/5 backdrop-blur-xl relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-purple-500/20 to-transparent" />

      <motion.p
        variants={itemVariants}
        className="text-3xl text-white font-bold mb-8 leading-tight tracking-tight text-center"
      >
        {question}
      </motion.p>

      <div className="grid grid-cols-1 gap-4">
        {options.map((option, index) => (
          <motion.button
            key={index}
            variants={itemVariants}
            whileHover={!showFeedback ? { scale: 1.02, x: 5 } : {}}
            whileTap={!showFeedback ? { scale: 0.98 } : {}}
            onClick={() => onAnswer(option)}
            disabled={showFeedback}
            className={`
              ${getButtonStyles(option)}
              relative flex items-center p-5 rounded-2xl border-2 transition-all duration-300 group
              ${!showFeedback ? 'cursor-pointer' : 'cursor-default'}
            `}
            aria-label={`Option ${index + 1}: ${option}`}
          >
            <span className={`
              w-10 h-10 rounded-xl flex items-center justify-center mr-4 text-sm font-black transition-colors duration-300
              ${!showFeedback ? 'bg-slate-700/50 text-slate-400 group-hover:bg-purple-500 group-hover:text-white' :
                option === answer ? 'bg-emerald-500 text-white' :
                  option === selected ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-600'}
            `}>
              {String.fromCharCode(65 + index)}
            </span>
            <span className="text-xl font-semibold">{option}</span>

            {!showFeedback && (
              <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export default QuestionArea;
