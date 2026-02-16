import { motion } from "framer-motion";

function Home({ onStart }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full bg-gray-900/50 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl text-center"
        >
            <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="mb-8"
            >
                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-amber-600 mb-4">
                    Ready to Test Your Brain?
                </h2>
                <p className="text-sky-200/80 text-lg">
                    Embark on a journey of knowledge and speed.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-10 text-left">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <h3 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center text-xs">?</span>
                        HOW TO PLAY
                    </h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li>• 10 random questions per round</li>
                        <li>• 15 seconds per question</li>
                        <li>• Choose the best answer quickly</li>
                        <li>• Automatic progression</li>
                    </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <h3 className="text-sky-400 font-bold mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-sky-400/20 flex items-center justify-center text-xs">$</span>
                        SCORING SYSTEM
                    </h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li>• <span className="text-white font-medium">+100</span> Base points per correct answer</li>
                        <li>• <span className="text-white font-medium">+10×</span> bonus for every second remaining</li>
                        <li>• Aim for high speed & accuracy!</li>
                    </ul>
                </div>
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onStart}
                className="group relative bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-black px-12 py-5 rounded-2xl transition-all shadow-xl shadow-purple-500/20 overflow-hidden"
            >
                <span className="relative z-10 flex items-center justify-center gap-2 text-xl">
                    NEW GAME
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.button>
        </motion.div>
    );
}

export default Home;
