import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Timer = ({ duration, onTimeUp, resetTrigger }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        setTimeLeft(duration);
    }, [resetTrigger, duration]);

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, onTimeUp]);

    const progress = (timeLeft / duration) * 100;

    return (
        <div className="flex flex-col items-center mb-6">
            <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        className="text-gray-700/50"
                    />
                    <motion.circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray="175.929"
                        animate={{ strokeDashoffset: 175.929 - (175.929 * progress) / 100 }}
                        className={`${timeLeft < 5 ? 'text-rose-500' : 'text-yellow-400'
                            }`}
                    />
                </svg>
                <span className={`absolute text-xl font-bold ${timeLeft < 5 ? 'text-rose-500' : 'text-amber-50'}`}>
                    {timeLeft}
                </span>
            </div>
        </div>
    );
};

export default Timer;
