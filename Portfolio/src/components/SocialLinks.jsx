// src/components/SocialLinks.jsx
import { motion } from 'framer-motion'
import { fadeInUp } from '../config/motion'

const SocialLinks = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="flex justify-center gap-6"
        >
            <a
                href="https://github.com/mohdjaved291"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
            >
                <i className="ri-github-line text-2xl"></i>
            </a>

            <a
                href="https://www.linkedin.com/in/mohammad-javed-a9a8aab4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
            >
                <i className="ri-linkedin-box-line text-2xl"></i>
            </a>
        </motion.div >
    );
};

export default SocialLinks