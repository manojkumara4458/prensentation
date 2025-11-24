import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-gray-300">Next Gen Presentation</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                        Crafting Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                            Masterpieces
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        Elevate your ideas with stunning visuals and seamless transitions.
                        A presentation experience that leaves a lasting impact.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/25 flex items-center gap-2 group"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold backdrop-blur-sm hover:border-white/20 transition-colors"
                        >
                            Learn More
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
