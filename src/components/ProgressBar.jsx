import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ current, total }) => {
    const progress = ((current + 1) / total) * 100;

    return (
        <div className="w-full max-w-xl h-2 bg-gray-700/50 rounded-full overflow-hidden mb-6 backdrop-blur-sm">
            <motion.div
                className="h-full bg-linear-to-r from-yellow-400 to-orange-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />
        </div>
    );
};

export default ProgressBar;
