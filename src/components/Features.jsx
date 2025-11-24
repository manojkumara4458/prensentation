import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Layers } from 'lucide-react';

const features = [
    {
        icon: <Zap className="w-6 h-6 text-cyan-400" />,
        title: "Lightning Fast",
        description: "Optimized for speed with zero-runtime overhead animations."
    },
    {
        icon: <Shield className="w-6 h-6 text-violet-400" />,
        title: "Secure by Default",
        description: "Enterprise-grade security built into every component."
    },
    {
        icon: <Globe className="w-6 h-6 text-fuchsia-400" />,
        title: "Global Scale",
        description: "Deploy anywhere with edge-ready infrastructure."
    },
    {
        icon: <Layers className="w-6 h-6 text-blue-400" />,
        title: "Modular Design",
        description: "Compose complex UIs from simple, atomic building blocks."
    }
];

const FeatureCard = ({ feature, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group"
        >
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
            </div>
            <h3 className="text-xl font-bold font-heading mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">
                {feature.description}
            </p>
        </motion.div>
    );
};

const Features = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-heading mb-4"
                    >
                        Why Choose Us?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Experience the future of presentation with our cutting-edge platform.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
