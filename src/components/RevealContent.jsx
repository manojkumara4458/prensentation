import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield, AlertTriangle, Users, MapPin, Radio,
    Smartphone, Database, Lock, Activity, CheckCircle,
    AlertOctagon, MessageSquare, BarChart3, Globe, Zap, Server
} from 'lucide-react';
import logo from '../assets/logo_splash_2048.png';

const Section = ({ children, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 ${className}`}
    >
        {children}
    </motion.div>
);

const Card = ({ children, icon: Icon, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, translateY: -5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="glass-card-light p-8 rounded-2xl group transition-all duration-300 border border-gray-200"
    >
        <div className="relative mb-6">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {Icon && <Icon className="w-10 h-10 text-primary relative z-10 group-hover:text-secondary transition-colors" />}
        </div>
        <div className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
            {children}
        </div>
    </motion.div>
);

const BackgroundEffects = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 bg-grid-pattern" />

        {/* Floating Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/5 rounded-full blur-[150px] animate-float-delayed" />
    </div>
);

const LogoReveal = ({ onComplete }) => {
    React.useEffect(() => {
        const timer = setTimeout(() => onComplete(), 4000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 bg-white flex items-center justify-center"
        >
            <div className="relative">
                {/* Glow effect behind logo */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [1, 1.5, 1.2],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-primary blur-[100px] rounded-full"
                />

                {/* Logo */}
                <motion.img
                    src={logo}
                    alt="Vigilant Logo"
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{
                        scale: 1,
                        rotate: 0,
                        opacity: 1,
                        y: [0, -10, 0]
                    }}
                    transition={{
                        scale: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1] },
                        rotate: { duration: 1.2, ease: "easeOut" },
                        opacity: { duration: 0.8 },
                        y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
                    }}
                    className="relative w-[32rem] h-[32rem] object-contain drop-shadow-[0_0_60px_rgba(6,182,212,0.6)]"
                />

                {/* Name */}
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
                    className="text-6xl font-black font-heading text-center mt-8 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary"
                >
                    VIGILANT
                </motion.h1>

                {/* Slogan */}
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
                    className="text-xl text-gray-600 text-center mt-4 tracking-[0.3em] uppercase font-light"
                >
                    Your Neighborhood Guardian
                </motion.p>
            </div>
        </motion.div>
    );
};

const RevealContent = () => {
    const [showIntro, setShowIntro] = React.useState(true);
    const [showContent, setShowContent] = React.useState(false);

    const handleIntroComplete = () => {
        setShowIntro(false);
        setTimeout(() => setShowContent(true), 500);
    };

    return (
        <div className="bg-white min-h-screen text-gray-900 overflow-hidden relative">
            <BackgroundEffects />

            <AnimatePresence>
                {showIntro && <LogoReveal onComplete={handleIntroComplete} />}
            </AnimatePresence>

            {showContent && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Sticky Logo Header */}
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm"
                    >
                        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-center gap-6">
                            <motion.img
                                src={logo}
                                alt="Vigilant Logo"
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                className="w-16 h-16 object-contain drop-shadow-lg"
                            />
                            <div className="text-center">
                                <h1 className="text-3xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                                    VIGILANT
                                </h1>
                                <p className="text-xs text-gray-500 tracking-[0.2em] uppercase">Your Neighborhood Guardian</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="pt-12">
                        {/* 7. Architecture */}
                        <Section>
                            <h2 className="text-5xl font-bold font-heading mb-16 text-center text-gray-900">
                                <span className="text-primary">07.</span> Architecture
                            </h2>
                            <div className="bg-white/60 backdrop-blur-sm p-12 rounded-3xl border-2 border-gray-200 shadow-xl overflow-x-auto relative">
                                <div className="flex flex-col md:flex-row justify-between items-center gap-12 min-w-[800px]">
                                    <motion.div whileHover={{ scale: 1.05 }} className="p-8 bg-blue-50 border-2 border-blue-200 rounded-2xl text-center w-64 shadow-lg">
                                        <Smartphone className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                                        <h3 className="font-bold text-xl text-gray-900">Client</h3>
                                        <p className="text-sm text-blue-600 mt-2">React / Flutter</p>
                                        <ul className="text-xs text-gray-600 mt-3 text-left list-disc pl-4 space-y-1">
                                            <li>Sends API requests</li>
                                            <li>Real-time WebSockets</li>
                                        </ul>
                                    </motion.div>

                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                        <span className="text-xs text-primary font-mono uppercase tracking-widest">Socket.IO</span>
                                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                    </div>

                                    <motion.div whileHover={{ scale: 1.05 }} className="p-8 bg-purple-50 border-2 border-purple-200 rounded-2xl text-center w-64 shadow-lg">
                                        <Server className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                                        <h3 className="font-bold text-xl text-gray-900">API Server</h3>
                                        <p className="text-sm text-purple-600 mt-2">Node.js / Express</p>
                                        <ul className="text-xs text-gray-600 mt-3 text-left list-disc pl-4 space-y-1">
                                            <li>Auth & Validation</li>
                                            <li>Business Logic</li>
                                        </ul>
                                    </motion.div>

                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                        <span className="text-xs text-primary font-mono uppercase tracking-widest">Query</span>
                                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                    </div>

                                    <motion.div whileHover={{ scale: 1.05 }} className="p-8 bg-green-50 border-2 border-green-200 rounded-2xl text-center w-64 shadow-lg">
                                        <Database className="w-12 h-12 mx-auto mb-4 text-green-600" />
                                        <h3 className="font-bold text-xl text-gray-900">Database</h3>
                                        <p className="text-sm text-green-600 mt-2">MongoDB</p>
                                        <ul className="text-xs text-gray-600 mt-3 text-left list-disc pl-4 space-y-1">
                                            <li>Users & Incidents</li>
                                            <li>Mongoose Schemas</li>
                                        </ul>
                                    </motion.div>
                                </div>

                                <div className="mt-12 grid grid-cols-2 gap-8">
                                    <div className="p-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl flex items-center gap-4">
                                        <Radio className="w-8 h-8 text-yellow-600" />
                                        <div>
                                            <h4 className="text-gray-900 font-bold">Notification Layer</h4>
                                            <p className="text-sm text-gray-600">Push notifications & Event broadcasting</p>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-red-50 border-2 border-red-200 rounded-xl flex items-center gap-4">
                                        <Globe className="w-8 h-8 text-red-600" />
                                        <div>
                                            <h4 className="text-gray-900 font-bold">External Integrations</h4>
                                            <p className="text-sm text-gray-600">Geolocation & Emergency APIs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        {/* 8. Features */}
                        <Section>
                            <h2 className="text-5xl font-bold font-heading mb-16 text-center text-gray-900">
                                <span className="text-primary">08.</span> Outputs / Features
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { desc: "User Registration / Login - Secure authentication via JWT & Firebase with profile management.", icon: CheckCircle },
                                    { desc: "Panic Button - One-tap emergency trigger sending instant alerts to nearby users.", icon: AlertTriangle },
                                    { desc: "Incident Reporting - Report crimes or hazards with rich media (photos/videos) and GPS location.", icon: Radio },
                                    { desc: "Admin Access - Moderation dashboard to verify reports and manage community safety.", icon: Shield },
                                    { desc: "Location Check-ins - Share your real-time safety status with trusted contacts.", icon: MapPin },
                                    { desc: "Real-Time Feed - Live stream of local incidents and safety updates in your vicinity.", icon: Activity },
                                    { desc: "Emergency Contacts - Quick access to share alerts with family and designated guardians.", icon: Users },
                                    { desc: "Incident Dashboard - Visual history of reports to track safety trends in the area.", icon: BarChart3 },
                                    { desc: "Voting & Verification - Community-driven validation system to flag fake or accurate reports.", icon: CheckCircle },
                                    { desc: "Safety Guidelines - Curated tips and protocols for various emergency scenarios.", icon: Lock }
                                ].map((feat, i) => (
                                    <Card key={i} icon={feat.icon} delay={i * 0.05}>
                                        <p className="font-medium text-gray-900">{feat.desc}</p>
                                    </Card>
                                ))}
                            </div>
                        </Section>

                        {/* 9. Conclusion */}
                        <Section>
                            <div className="text-center max-w-6xl mx-auto">
                                <h2 className="text-5xl font-bold font-heading mb-12 text-gray-900">
                                    <span className="text-primary">09.</span> Conclusion
                                </h2>
                                <p className="text-2xl text-gray-700 leading-relaxed mb-16 font-light">
                                    VIGILANT (NSAS) provides a real-time, hyperlocal, and verified safety communication platform. Through anonymous reporting, GPS-enabled alerts, interactive mapping, and emergency tools, it boosts community engagement and reliability.
                                </p>

                                <h3 className="text-4xl font-bold font-heading mb-16 text-secondary">Future Implementation</h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                                    {[
                                        { title: "AI-Powered Verification", desc: "Machine learning algorithms to automatically cross-reference reports with official data and user history to flag potential misinformation.", icon: Zap },
                                        { title: "Predictive Hotspot Mapping", desc: "Utilizing historical crime data and temporal analysis to predict potential danger zones and alert users proactively.", icon: MapPin },
                                        { title: "IoT & CCTV Integration", desc: "Direct connection with smart city infrastructure and public surveillance systems for automated incident detection.", icon: Radio },
                                        { title: "Blockchain Data Integrity", desc: "Immutable ledger recording of all incident reports to prevent tampering and ensure auditability for legal proceedings.", icon: Lock },
                                        { title: "Drone-Assisted Monitoring", desc: "Integration with autonomous drones for rapid aerial surveillance and real-time video feeds of emergency situations.", icon: Globe },
                                        { title: "Offline Mesh Network", desc: "Peer-to-peer communication capabilities allowing alerts to propagate even when cellular networks are down during disasters.", icon: Server }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1, duration: 0.5 }}
                                            whileHover={{ scale: 1.05, translateY: -10 }}
                                            className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 hover:border-primary/50 group transition-all duration-500 shadow-lg hover:shadow-xl"
                                        >
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                                                <item.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300" />
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                                {item.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </Section>

                        <div className="py-32 text-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-7xl md:text-9xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary mb-6"
                            >
                                THANK YOU
                            </motion.h1>
                            <p className="text-xl text-gray-600 font-light tracking-[0.5em] uppercase">Team Vigilant</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default RevealContent;
