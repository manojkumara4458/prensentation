import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: 'Abstract', href: '#abstract' },
        { name: 'Gaps', href: '#gaps' },
        { name: 'Methodology', href: '#methodology' },
        { name: 'Features', href: '#features' },
        { name: 'Community', href: '#community' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/60 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-2xl font-black font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    VIGILANT
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors relative group ${isScrolled ? 'text-gray-600 hover:text-primary' : 'text-gray-800 hover:text-primary'}`}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </a>
                    ))}
                    <button className="px-5 py-2 rounded-full bg-primary text-white font-medium transition-colors hover:bg-primary/90 shadow-lg hover:shadow-primary/30">
                        Sign In
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200"
                >
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-gray-800 hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="w-full py-3 rounded-lg bg-primary text-white font-bold shadow-lg">
                            Sign In
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
