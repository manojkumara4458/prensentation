import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Shield, AlertTriangle, Users, MapPin, Radio,
    Smartphone, Database, Lock, Activity, CheckCircle,
    AlertOctagon, MessageSquare, BarChart3, Globe, Zap, Server
} from 'lucide-react';

const Section = ({ children, className = "", id = "" }) => (
    <motion.div
        id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 ${className}`}
    >
        {children}
    </motion.div>
);

const Card = ({ title, children, icon: Icon, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, translateY: -5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="glass-card-light p-8 rounded-2xl group transition-all duration-300 border-2 border-gray-200 shadow-lg hover:shadow-xl"
    >
        <div className="relative mb-6">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {Icon && <Icon className="w-10 h-10 text-primary relative z-10 group-hover:text-secondary transition-colors" />}
        </div>
        <h3 className="text-2xl font-bold font-heading mb-4 text-gray-900 group-hover:text-primary transition-colors">{title}</h3>
        <div className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
            {children}
        </div>
    </motion.div>
);

const BackgroundEffects = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 bg-grid-pattern" />

        {/* Floating Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/5 rounded-full blur-[150px] animate-float-delayed" />
    </div>
);

const PresentationContent = () => {
    const [isCountingDown, setIsCountingDown] = React.useState(false);
    const [count, setCount] = React.useState(3);
    const navigate = useNavigate();

    React.useEffect(() => {
        let timer;
        if (isCountingDown && count > 0) {
            timer = setTimeout(() => setCount(count - 1), 1000);
        } else if (count === 0) {
            navigate('/reveal');
        }
        return () => clearTimeout(timer);
    }, [isCountingDown, count, navigate]);

    return (
        <div className="bg-white min-h-screen text-gray-900 overflow-hidden relative selection:bg-primary/30 selection:text-primary">
            <BackgroundEffects />

            {/* 0. Title Slide */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="z-10 relative"
                >
                    {/* Glowing Ring Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] rounded-full -z-10" />

                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-center gap-3 mb-8"
                    >
                        <Shield className="w-16 h-16 text-primary drop-shadow-lg" />
                        <div className="text-left">
                            <span className="block text-sm font-bold tracking-[0.3em] text-primary uppercase mb-1">Visvesvaraya Technological University</span>
                            <span className="block text-xs text-gray-600 tracking-widest uppercase">Department of CSE (AIML)</span>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-xl md:text-2xl text-gray-600 font-light tracking-[0.2em] mb-4 uppercase"
                    >
                        Mini Project On
                    </motion.p>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-12 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 drop-shadow-xl">
                        NEIGHBOURHOOD <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                            SAFETY ALERT SYSTEM
                        </span>
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="glass-card-light p-6 rounded-xl text-left border-l-4 border-l-primary shadow-xl"
                        >
                            <p className="text-xs text-primary mb-3 uppercase tracking-widest font-bold">Presented By</p>
                            <ul className="space-y-2 text-base font-medium text-gray-800">
                                <li className="flex justify-between"><span>Anusha J</span> <span className="text-gray-500 font-mono">1GV23CI005</span></li>
                                <li className="flex justify-between"><span>J M Vaishnav Sworoop</span> <span className="text-gray-500 font-mono">1GV23CI020</span></li>
                                <li className="flex justify-between"><span>M Vikas</span> <span className="text-gray-500 font-mono">1GV23CI027</span></li>
                                <li className="flex justify-between"><span>R Manoj Kumar</span> <span className="text-gray-500 font-mono">1GV23CI045</span></li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="glass-card-light p-6 rounded-xl text-left border-l-4 border-l-accent flex flex-col justify-center shadow-xl"
                        >
                            <p className="text-xs text-accent mb-3 uppercase tracking-widest font-bold">Under the Guidance of</p>
                            <p className="text-2xl font-bold text-gray-900">Dr. R. Ezhilan</p>
                            <p className="text-sm text-gray-600 mt-1">Professor, Dept of CSE</p>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 2, duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
                >
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
                    </div>
                </motion.div>
            </section>

            {/* 1. Abstract */}
            <Section id="abstract">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -left-8 -top-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                        <h2 className="text-5xl font-bold font-heading mb-8 text-gray-900 relative z-10">
                            <span className="text-primary">01.</span> Abstract
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 border-l-4 border-primary/30 pl-6">
                            The Neighborhood Safety Alert System is a real-time web application that empowers local communities with safety alerts, emergency tools, and anonymous reporting features. By integrating official data with community-sourced reports, the system ensures timely and accurate updates on incidents within a neighborhood.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed pl-6">
                            It features an interactive map, GPS-tagged reports, push notifications, and a panic button to alert nearby users instantly. Built using Node.js, React, and Socket.IO, the platform fosters safer environments through verified alerts and community participation.
                        </p>
                    </div>
                    <div className="glass-card-light p-10 rounded-3xl relative overflow-hidden group border-2 border-gray-200 shadow-xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
                        <h3 className="text-3xl font-bold mb-6 text-gray-900 group-hover:text-accent transition-colors">Problem Statement</h3>
                        <p className="text-gray-700 mb-8 text-lg">
                            Traditional safety communication methods—such as police helplines and social media—often fail to provide timely, verified, and hyperlocal information. They are slow, fragmented, and prone to misinformation.
                        </p>
                        <div className="flex items-center gap-4 text-gray-900 font-medium bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-xl border-2 border-primary/20">
                            <CheckCircle className="w-8 h-8 text-primary shrink-0" />
                            <span className="text-lg">Need for a unified, real-time, and trustworthy platform.</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 2. Introduction */}
            <Section>
                <h2 className="text-5xl font-bold font-heading mb-16 text-center text-gray-900"><span className="text-primary">02.</span> Introduction</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card title="Objectives" icon={Activity} delay={0.1}>
                        <ul className="space-y-4">
                            {["Enhance community safety through a real-time digital platform.",
                                "Provide instant alerts and community-sourced incident reports.",
                                "Bridge the communication gap between citizens and emergency services."].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                        </ul>
                    </Card>
                    <Card title="Motivation" icon={Zap} delay={0.2}>
                        <ul className="space-y-4">
                            {["Increase in localized crime and emergencies.",
                                "Slow access to verified safety information.",
                                "Need for an integrated platform combining official and user-generated data."].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                        </ul>
                    </Card>
                </div>
            </Section>

            {/* 3. Gaps Identified */}
            <Section id="gaps" className="glass-card-light rounded-[3rem] p-12 my-12 border-2 border-gray-200 shadow-2xl">
                <h2 className="text-5xl font-bold font-heading mb-16 text-center text-gray-900">
                    <span className="text-alert">03.</span> Gaps in Current Solutions
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Unverified Reports", desc: "Risk of misinformation without fact-checking.", icon: AlertOctagon },
                        { title: "Privacy Concerns", desc: "Lack of anonymous reporting features.", icon: Lock },
                        { title: "Lack of Incentives", desc: "No gamification to encourage activity.", icon: BarChart3 },
                        { title: "Delayed Alerts", desc: "Slow dissemination of urgent information.", icon: Radio },
                        { title: "No Real-Time Sync", desc: "Limited live interaction in communities.", icon: Activity },
                        { title: "Limited Availability", desc: "Few apps widely adopted in Indian neighborhoods.", icon: Globe }
                    ].map((gap, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-alert/50 transition-all hover:bg-red-50 group shadow-lg"
                        >
                            <gap.icon className="w-8 h-8 text-gray-400 mb-4 group-hover:text-alert transition-colors" />
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-alert transition-colors">{gap.title}</h3>
                            <p className="text-gray-600">{gap.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* 4. Methodology & Tech Stack */}
            <Section id="methodology">
                <h2 className="text-5xl font-bold font-heading mb-16 text-center text-gray-900"><span className="text-primary">04.</span> Methodology</h2>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="glass-card-light p-8 rounded-2xl border-l-4 border-l-primary shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Database className="w-6 h-6 text-primary" /> Tech Stack
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { label: "Frontend", val: "Flutter, Android Studio" },
                                { label: "Backend", val: "Node.js, Express, MongoDB, Socket.IO" },
                                { label: "Authentication", val: "JWT + Firebase" },
                                { label: "Real-Time Communication", val: "Socket.IO" }
                            ].map((item, i) => (
                                <li key={i} className="flex flex-col">
                                    <span className="text-sm text-gray-600 font-bold uppercase tracking-wider">{item.label}</span>
                                    <span className="text-lg text-gray-900 font-medium">{item.val}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass-card-light p-8 rounded-2xl border-l-4 border-l-accent shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Zap className="w-6 h-6 text-accent" /> Key Modules
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Incident Reporting & Feed",
                                "Interactive Mapping",
                                "Push Notifications",
                                "Community Interaction"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-accent rounded-full" />
                                    <span className="text-lg text-gray-800">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* 5. Notification System */}
            <Section>
                <h2 className="text-5xl font-bold font-heading mb-16 text-center text-gray-900"><span className="text-primary">05.</span> Notification System</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Push Notifications", desc: "Sent via Browser Push API", icon: Radio },
                        { title: "Alert Preferences", desc: "Users choose incident types and alert radius", icon: CheckCircle },
                        { title: "Emergency Alerts", desc: "Panic button notifies all users in range", icon: AlertTriangle }
                    ].map((item, i) => (
                        <Card key={i} title={item.title} icon={item.icon} delay={i * 0.1}>
                            {item.desc}
                        </Card>
                    ))}
                </div>
            </Section>

            {/* 8. Features */}
            <Section id="features">
                <h2 className="text-5xl font-bold font-heading mb-16 text-center text-gray-900">
                    <span className="text-primary">08.</span> Outputs / Features</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { title: "Neighborhood Groups", desc: "GPS-based user grouping" },
                        { title: "User Profiles", desc: "Trust level, incident history, activity" },
                        { title: "Voting System", desc: "Helps verify credible reports" },
                        { title: "Commenting System", desc: "Community discussion on incidents" },
                        { title: "Leaderboards", desc: "Gamification to encourage safety contributions" }
                    ].map((feat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="glass-card-light p-8 rounded-2xl border-l-4 border-l-secondary flex flex-col justify-center shadow-lg"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{feat.title}</h3>
                            <p className="text-gray-700 text-lg">{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <div className="flex justify-center py-32 relative z-20">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsCountingDown(true)}
                    disabled={isCountingDown}
                    className="relative group cursor-pointer disabled:cursor-default"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-[60px] opacity-40 group-hover:opacity-80 transition-opacity duration-500 rounded-full" />
                    <div className="relative w-80 h-80 bg-white/90 backdrop-blur-xl border-4 border-primary/50 rounded-full flex flex-col items-center justify-center gap-4 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)] group-hover:border-primary transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />

                        {!isCountingDown ? (
                            <>
                                <Shield className="w-24 h-24 text-primary drop-shadow-lg animate-pulse" />
                                <span className="text-primary font-bold tracking-[0.1em] text-lg z-10 text-center px-4">
                                    GEAR UP FOR THE<br />LOGO REVEAL
                                </span>
                            </>
                        ) : (
                            <motion.span
                                key={count}
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 1.5, opacity: 0 }}
                                className="text-8xl font-black text-primary"
                            >
                                {count}
                            </motion.span>
                        )}
                    </div>
                </motion.button>
            </div>

        </div>
    );
};

export default PresentationContent;
