// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../config/motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "Multithreaded Proxy-Server with Caching",
            year: "2024",
            description: [
                'Engineered a high-performance proxy server using **TypeScript** and **Express.js**, implementing a **custom LRU cache** with **O(1) time complexity** for HTTP response optimization and **type safety**.',
                'Architected a concurrent request handling system using **TypeScript\'s asynchronous patterns** and **Express.js middleware**, utilizing **semaphores** to prevent **race conditions** in **shared resources**.',
                'Designed and integrated a **distributed caching mechanism** with **cache invalidation** and **error handling**, ensuring **consistency** across system operations through effective **memory management**.'
            ].join('\n'),
            tech: ["TypeScript", "Express.js", "LRU Cache", "Semaphores", "WebSocket", "React"],
            githubUrl: "https://github.com/mohdjaved291/proxy-server",
            projectDemo: "https://proxy-server-frontend.onrender.com/",
            imageUrl: "/images/proxy-dashboard.png"
        },
        {
            title: "MERN Authentication with JWT",
            year: "2024",
            description: [
                'Implemented secure authentication system using **TypeScript**, **Express.js**, and **MongoDB**, featuring **JWT** with **HTTP-only cookies** for both **access** and **refresh tokens**, ensuring robust security with automated token refresh.',
                'Designed scalable **API architecture** with layered approach (**routes**, **controllers**, **services**, **models**), implementing comprehensive **error handling middleware** with **errorCatch()** utility for streamlined error management.',
                'Developed full authentication flow including **session management**, **account verification**, and **password reset** functionalities, integrating **email service** (Resend) for secure user verification processes.',
                'Built responsive frontend using **React** with **React Query**, implementing **custom hooks** for auth state management and seamless token refresh handling on **401 errors**, ensuring uninterrupted user experience.'
            ].join('\n'),
            tech: ["TypeScript", "Express.js", "MongoDB", "JWT", "React", "React Query", "Resend"],
            githubUrl: "https://github.com/mohdjaved291/Mern-Authentication",
            projectDemo: "https://mern-auth-frontend.onrender.com/",
            imageUrl: "/images/Create-Account-Mern-Auth-App.png"
        }
    ];

    return (
        <section
            id="projects"
            className="relative w-full py-10 z-10 backdrop-blur-sm bg-white/5"
        >
            <div className="md:w-8/12 mx-auto px-4 sm:px-6 lg:px-8 min-h-screen py-32">
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Projects
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Showcasing production-ready applications with robust API architecture, secure authentication systems, and scalable infrastructure.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-52"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;