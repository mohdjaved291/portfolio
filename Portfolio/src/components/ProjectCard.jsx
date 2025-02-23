// src/components/ProjectCard.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

// Reusable styles
const styles = {
    tag: "px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors",
    button: {
        primary: "inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg",
        secondary: "inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-md",
        arrow: "w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 shadow-md text-white hover:bg-gray-800 transition-all duration-300"
    },
    imageCounter: "absolute bottom-3 right-3 bg-gray-900/90 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
};

// Navigation Arrow Button Component
const NavigationArrow = ({ direction, onClick }) => (
    <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={styles.button.arrow}
        aria-label={`${direction} image`}
    >
        <i className={`ri-arrow-${direction}-line text-lg`}></i>
    </motion.button>
);

const ProjectCard = ({ project }) => {
    const { title, year, description, tech, githubUrl, projectDemo } = project;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Images for MERN Auth project
    const authImages = [
        "/images/Create-Account-Mern-Auth-App.png",
        "/images/MERN-AUTH-SignUpLogin.png",
        "/images/Reset-Account Mern-Auth-App.png"
    ];

    const isAuthProject = title === "MERN Authentication with JWT";
    const images = isAuthProject ? authImages : [project.imageUrl];

    const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="transform-gpu w-full px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 h-full"
            >
                <div className="flex flex-col md:flex-row md:h-[550px]">
                    {/* Left side content */}
                    <div className="p-6 md:p-8 md:w-3/5 flex flex-col">
                        <div className="flex-grow space-y-5">
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-600 font-medium tracking-wider uppercase">
                                    PERSONAL PROJECT
                                </span>
                                <span className="text-gray-400">•</span>
                                <span className="text-xs text-gray-600">{year}</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900">
                                {title}
                            </h3>

                            {/* Description with bullet points and bold text */}
                            <div className="space-y-2.5">
                                {description.split('\n').map((bullet, index) => {
                                    const parts = bullet.split(/(\*\*.*?\*\*)/g);
                                    return (
                                        <div key={index} className="flex gap-2">
                                            <span className="text-gray-600 mt-0.5 flex-shrink-0 text-xs">•</span>
                                            <p className="text-gray-600 leading-relaxed text-xs">
                                                {parts.map((part, pIndex) => {
                                                    if (part.startsWith('**') && part.endsWith('**')) {
                                                        return (
                                                            <span key={pIndex} className="font-semibold text-gray-800">
                                                                {part.slice(2, -2)}
                                                            </span>
                                                        );
                                                    }
                                                    return <span key={pIndex}>{part}</span>;
                                                })}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-1.5">
                                {tech.map((item, index) => (
                                    <span key={index} className={styles.tag}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-3 mt-6">
                            <a
                                href={projectDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.button.primary}
                            >
                                View Demo
                                <i className="ri-arrow-right-line"></i>
                            </a>
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.button.secondary}
                            >
                                <i className="ri-github-line"></i>
                                Source Code
                            </a>
                        </div>
                    </div>

                    {/* Right side image/preview */}
                    <div className="relative md:w-2/5 flex items-center justify-center p-6">
                        <div className="w-full h-full max-w-md mx-auto flex flex-col items-center justify-center">
                            {/* Image container */}
                            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                                <motion.img
                                    key={currentImageIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    src={images[currentImageIndex]}
                                    alt={`${title} - Screen ${currentImageIndex + 1}`}
                                    className="w-full h-full object-contain bg-gray-50"
                                    loading="lazy"
                                />

                                {/* Image counter */}
                                {isAuthProject && (
                                    <div className={styles.imageCounter}>
                                        {currentImageIndex + 1} / {images.length}
                                    </div>
                                )}
                            </div>

                            {/* Navigation arrows */}
                            {isAuthProject && images.length > 1 && (
                                <div className="flex justify-center items-center gap-6 mt-4">
                                    <NavigationArrow direction="left" onClick={prevImage} />
                                    <NavigationArrow direction="right" onClick={nextImage} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;