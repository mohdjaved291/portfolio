// src/App.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
    const { scrollYProgress } = useScroll();

    const backgroundOpacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.6, 1],
        [0, 0.05, 0.1, 0.15]
    );

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-base-lightest">
            {/* Background layers */}
            <div className="fixed inset-0 bg-section-gradient" />
            <motion.div
                className="fixed inset-0 bg-gray-900"
                style={{ opacity: backgroundOpacity }}
            />
            <div className="fixed inset-0 bg-hero-pattern opacity-50" />

            <Navigation />
            <main className="relative">
                {/* Home/Hero Section */}
                <section id="home" className="min-h-screen">
                    <Hero />
                </section>

                {/* Other Sections */}
                <Projects />
                <Skills />
                <About />
                <Contact />
            </main>
        </div>
    );
};

export default App;