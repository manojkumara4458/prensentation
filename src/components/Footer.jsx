import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="text-2xl font-black font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6 block">
                            VIGILANT
                        </a>
                        <p className="text-gray-600 max-w-sm mb-6">
                            Empowering communities with real-time safety alerts and seamless communication.
                        </p>
                        <div className="flex gap-4">
                            {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-gray-900 font-bold mb-6">Product</h4>
                        <ul className="space-y-4">
                            {['Features', 'Templates', 'Integrations', 'Pricing', 'Changelog'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-900 font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Careers', 'Blog', 'Legal', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2024 Vigilant. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
