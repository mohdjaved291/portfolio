// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [isCopied, setIsCopied] = useState(false);
    const email = 'mohdjaved291@gmail.com';
    const mailtoLink = `mailto:${email}?subject=Backend%20Engineering%20Opportunity`;

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <section id="contact" className="relative min-h-screen w-full flex items-center justify-center z-10">
            {/* Contact Container */}
            <div className="max-w-4xl mx-auto px-4 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {/* Title */}
                    <h2 className="text-4xl font-bold tracking-tight">
                        Let's Connect
                    </h2>

                    {/* Description */}
                    <div className="space-y-6">
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Looking for a backend engineer who can build robust, scalable systems? Whether you have a specific project in mind or want to discuss potential opportunities, I'm here to help turn your ideas into efficient solutions.
                        </p>

                        <p className="text-lg text-gray-600">
                            Feel free to reach out—I'm always open to discussing new challenges and exciting projects.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            {/* Email client button */}
                            <motion.a
                                href={mailtoLink}
                                className="group inline-flex items-center gap-2 px-6 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="text-lg">Send Email</span>
                                <i className="ri-mail-send-line text-xl"></i>
                            </motion.a>

                            {/* Copy email button */}
                            <motion.button
                                onClick={handleCopyEmail}
                                className="group relative inline-flex items-center gap-2 px-6 py-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="text-lg text-gray-800">{email}</span>
                                <i className={`ri-${isCopied ? 'check-line text-green-500' : 'file-copy-line text-gray-400'} text-xl group-hover:text-gray-600 transition-colors`}></i>

                                {isCopied && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-sm px-3 py-1 rounded"
                                    >
                                        Copied!
                                    </motion.div>
                                )}
                            </motion.button>
                        </div>

                        {/* Social links */}
                        <div className="flex justify-center gap-6 mt-8">
                            <a
                                href="https://github.com/mohdjaved291"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-900 transition-colors p-2"
                            >
                                <i className="ri-github-line text-2xl"></i>
                                <span className="sr-only">GitHub Profile</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mohammad-javed-a9a8aab4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-900 transition-colors p-2"
                            >
                                <i className="ri-linkedin-box-line text-2xl"></i>
                                <span className="sr-only">LinkedIn Profile</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;