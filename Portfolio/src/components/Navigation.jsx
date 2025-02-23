// src/components/Navigation.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navAnimation } from '../config/motion';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = ['Home', 'Projects', 'Skills', 'About', 'Contact'];

    useEffect(() => {
        const handleScroll = () => {
            // Get all sections
            const sections = document.querySelectorAll('section[id]');

            // Get current scroll position with offset
            const scrollPosition = window.scrollY + 100; // Offset for better section detection

            // Find the current section
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            // Get the navigation bar height (64px + 16px padding)
            const navHeight = 80;

            // Calculate the target scroll position
            const targetPosition = section.offsetTop - navHeight;

            // Scroll to the target position
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            setIsMenuOpen(false);
        }
    };

    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-7xl z-50 px-4">
            <motion.nav
                initial="initial"
                animate="animate"
                variants={navAnimation}
                className="w-full bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm"
            >
                <div className="h-14 px-6 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="flex items-center gap-2"
                        >
                            <span className="text-lg font-semibold text-gray-900">Mohammad Javed</span>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) => {
                            const itemId = item.toLowerCase();
                            return (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(itemId)}
                                    className={`px-4 py-2 rounded-full text-sm transition-colors ${activeSection === itemId
                                            ? 'text-gray-900 bg-gray-100 font-medium'
                                            : 'text-gray-600 hover:text-custom-accent'
                                        }`}
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            className="p-2 rounded-full text-gray-600 hover:bg-gray-100/80 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i className="ri-menu-line text-xl"></i>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <div className="fixed right-4 top-20 bg-white rounded-2xl shadow-lg p-4 z-50 min-w-[200px] border border-gray-100">
                        {navItems.map((item) => {
                            const itemId = item.toLowerCase();
                            return (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(itemId)}
                                    className={`block w-full text-left px-4 py-2 rounded-full text-sm transition-colors ${activeSection === itemId
                                            ? 'text-gray-900 bg-gray-100 font-medium'
                                            : 'text-gray-600 hover:text-custom-accent'
                                        }`}
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navigation;