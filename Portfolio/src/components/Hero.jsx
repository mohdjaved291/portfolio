// src/components/Hero.jsx
import { memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SocialLinks from './SocialLinks';

const AnimatedCharacter = memo(({ char, delay }) => (
    <motion.span
        className="inline-block relative"
        style={{ lineHeight: '1.2' }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
            duration: 0.5,
            delay,
            ease: [0.25, 0.1, 0.25, 1]
        }}
    >
        {char}
    </motion.span>
));

AnimatedCharacter.displayName = 'AnimatedCharacter';

const AnimatedButton = memo(({ href, className, children, delay = 0 }) => (
    <motion.a
        href={href}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
        className={className}
    >
        {children}
    </motion.a>
));

AnimatedButton.displayName = 'AnimatedButton';

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const gradientOpacity = useTransform(
        scrollYProgress,
        [0, 0.5],
        [1, 0.7]
    );

    const backendText = "Backend".split("");
    const engineerText = "Engineer".split("");
    const buildingText = "Building".split("");
    const scalableText = "Scalable".split("");
    const solutionsText = "Solutions".split("");

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-8 lg:pt-32 lg:pb-8 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                {/* Main Title Container */}
                <div className="overflow-hidden mb-5 py-4 w-full text-center">
                    {/* Backend Engineer */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-gray-800 tracking-tight font-['Roboto'] leading-tight overflow-visible flex flex-col items-center justify-center">
                        <span className="overflow-visible inline-flex justify-center mb-4">
                            {/* Backend */}
                            <span className="inline-flex">
                                {backendText.map((char, index) => (
                                    <AnimatedCharacter
                                        key={`backend-${index}`}
                                        char={char}
                                        delay={index * 0.05}
                                    />
                                ))}
                            </span>
                            {/* Space between words */}
                            <span className="inline-block w-4" />
                            {/* Engineer */}
                            <span className="inline-flex">
                                {engineerText.map((char, index) => (
                                    <AnimatedCharacter
                                        key={`engineer-${index}`}
                                        char={char}
                                        delay={0.4 + (index * 0.05)}
                                    />
                                ))}
                            </span>
                        </span>

                        {/* Building Scalable Solutions */}
                        <span className="overflow-visible inline-flex justify-center">
                            <span className="inline-flex">
                                {buildingText.map((char, index) => (
                                    <AnimatedCharacter
                                        key={`building-${index}`}
                                        char={char}
                                        delay={0.9 + (index * 0.05)}
                                    />
                                ))}
                            </span>
                            <span className="inline-block w-4" />
                            <span className="inline-flex">
                                {scalableText.map((char, index) => (
                                    <AnimatedCharacter
                                        key={`scalable-${index}`}
                                        char={char}
                                        delay={1.2 + (index * 0.05)}
                                    />
                                ))}
                            </span>
                            <span className="inline-block w-4" />
                            <span className="inline-flex">
                                {solutionsText.map((char, index) => (
                                    <AnimatedCharacter
                                        key={`solutions-${index}`}
                                        char={char}
                                        delay={1.5 + (index * 0.05)}
                                    />
                                ))}
                            </span>
                        </span>
                    </h1>
                </div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                    animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
                    transition={{ duration: 1, delay: 1.8 }}
                    className="text-base sm:text-lg text-gray-600 mb-16 max-w-3xl text-center leading-relaxed font-['Merriweather']"
                >
                    Specializing in <strong>robust backend architectures</strong>,{' '}
                    <strong>API design</strong>, and <strong>distributed systems</strong>.{' '}
                    I build <strong>RESTful APIs</strong> with <strong>Express.js</strong>,{' '}
                    manage <strong>MySQL</strong> and <strong>MongoDB</strong> databases,{' '}
                    and implement <strong>Redis caching</strong> to transform complex{' '}
                    challenges into <strong>efficient, scalable solutions</strong>.
                </motion.p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <AnimatedButton
                        href="#projects"
                        className="group px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg flex items-center gap-3 transition-all duration-500 ease-in-out justify-center"
                        delay={2}
                    >
                        <span className="font-medium">View Projects</span>
                        <motion.i
                            className="ri-arrow-right-line text-xl"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                        />
                    </AnimatedButton>

                    <AnimatedButton
                        href="#contact"
                        className="group px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 rounded-lg flex items-center gap-3 transition-all duration-500 ease-in-out border border-gray-200 justify-center"
                        delay={2.1}
                    >
                        <span className="font-medium">Contact Me</span>
                        <motion.i
                            className="ri-mail-line text-xl"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        />
                    </AnimatedButton>
                </div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.2 }}
                    className="animate-gradient-fade"
                >
                    <SocialLinks />
                </motion.div>
            </div>
        </section>
    );
};

export default memo(Hero);