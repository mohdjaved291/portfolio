// src/components/MobileMenu.jsx
import { motion, AnimatePresence } from 'framer-motion'
import { menuAnimation } from '../config/motion'

function MobileMenu({ isOpen, onClose }) {
    const menuItems = ['About', 'Skills', 'Projects', 'Contact']

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={menuAnimation}
                    className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 shadow-lg md:hidden transition-colors duration-400 ease-custom-in"
                >
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-400 ease-custom-in">Menu</h2>
                            <button
                                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-400 ease-custom-in"
                                onClick={onClose}
                            >
                                <i className="ri-close-line text-2xl"></i>
                            </button>
                        </div>
                        <nav className="flex flex-col space-y-4">
                            {menuItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-600 dark:text-gray-300 hover:text-custom-accent dark:hover:text-custom-accent transition-colors duration-400 ease-custom-in"
                                    onClick={onClose}
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MobileMenu