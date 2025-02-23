// src/components/About.jsx
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="relative py-20 z-10 backdrop-blur-sm bg-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    {/* Animated introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6"
                    >
                        {/* Profile and name */}
                        <div className="flex items-center justify-center gap-4 mb-3 mr-12">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="relative w-20 h-20 rounded-full overflow-hidden bg-white shadow-md"
                            >
                                <img
                                    src="./images/Pic.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Hi, I'm Javed
                            </h2>
                        </div>

                        {/* Location */}
                        <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                            >
                                <i className="ri-map-pin-line"></i>
                            </motion.div>
                            <span>Hyderabad, India</span>
                        </div>

                        {/* Description */}
                        <motion.p
                            className="text-lg text-gray-600"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            I transform complex backend challenges into elegant, scalable solutions that power the digital world.
                        </motion.p>
                    </motion.div>

                    {/* Horizontal line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="w-24 h-1 bg-gray-200 mx-auto mb-8"
                    />
                </motion.div>

                {/* Core Expertise */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8 text-gray-600"
                >
                    <div className="backdrop-blur-sm bg-white/90 rounded-2xl border border-gray-100 p-8 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Core Expertise
                        </h3>
                        <p className="leading-relaxed">
                            I develop backend systems using <strong>Node.js</strong> and <strong>TypeScript</strong>, focusing on <strong>RESTful API</strong> development. I work with <strong>MongoDB</strong> and <strong>MySQL</strong> databases, and implement caching solutions with <strong>Redis</strong> to improve application performance.
                        </p>
                    </div>

                    {/* Development Approach */}
                    <div className="backdrop-blur-sm bg-white/90 rounded-2xl border border-gray-100 p-8 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Development Approach
                        </h3>
                        <p className="leading-relaxed">
                            I write maintainable code with comprehensive <strong>error handling</strong> and <strong>type safety</strong>. My experience includes implementing <strong>JWT authentication</strong>, optimizing <strong>database queries</strong>, and ensuring thorough <strong>API testing</strong> for reliable deployments.
                        </p>
                    </div>

                    {/* Current Focus */}
                    <div className="backdrop-blur-sm bg-white/90 rounded-2xl border border-gray-100 p-8 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Current Focus
                        </h3>
                        <p className="leading-relaxed">
                            Currently building backend applications that handle <strong>concurrent user requests</strong> efficiently. I implement <strong>API rate limiting</strong>, <strong>database indexing</strong>, and <strong>caching strategies</strong> to enhance application responsiveness.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;