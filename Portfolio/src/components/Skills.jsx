// src/components/Skills.jsx
import { motion } from 'framer-motion';

const skillsData = [
    {
        title: "Backend Technologies",  // Renamed from "Frameworks & Libraries" to emphasize backend focus
        skills: [
            { name: "Node.js", icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" },
            { name: "Express.js", icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" },
            { name: "Spring Boot", icon: "https://img.icons8.com/?size=100&id=A3Ulk2RcONKs&format=png&color=000000" }
        ],
        delay: 0.2  // Fastest delay for primary skills
    },
    {
        title: "Databases & Caching",  // Moved up as it's crucial for backend
        skills: [
            { name: "MongoDB", icon: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" },
            { name: "MySQL", icon: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000" },
            { name: "Redis", icon: "https://img.icons8.com/?size=100&id=pHS3eRpynIRQ&format=png&color=000000" }
        ],
        delay: 0.3
    },
    {
        title: "Programming Languages",
        skills: [
            { name: "TypeScript", icon: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" },
            { name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
            { name: "Java", icon: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000" },
            { name: "SQL", icon: "https://img.icons8.com/?size=100&id=RO6Tm3NdrSGE&format=png&color=000000" }
        ],
        delay: 0.4
    },
    {
        title: "API Development",  // Moved up as it's core to backend
        skills: [
            { name: "RESTful APIs", icon: "https://img.icons8.com/?size=100&id=21896&format=png&color=000000" }
        ],
        delay: 0.5
    },
    {
        title: "Development Tools",
        skills: [
            { name: "Git", icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
            { name: "Linux", icon: "https://img.icons8.com/?size=100&id=17842&format=png&color=000000" },
            { name: "Postman", icon: "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000" },
            { name: "Vite", icon: "https://img.icons8.com/?size=100&id=dJjTWMogzFzg&format=png&color=000000" }
        ],
        delay: 0.6
    },
    {
        title: "Frontend Technologies",  // Moved to end as it's supplementary for backend
        skills: [
            { name: "React.js", icon: "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000" },
            { name: "HTML", icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
            { name: "CSS", icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
            { name: "TailwindCSS", icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" }
        ],
        delay: 0.7
    }
];

const SkillItem = ({ skill, index, categoryIndex }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{
            // Sequence animation based on both category and item index
            delay: 0.1 * (categoryIndex + index),
            duration: 0.2,
            // Optimize hover animation
            scale: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all transform-gpu"
    >
        <div className="w-12 h-12 flex items-center justify-center p-2 rounded-lg bg-gray-50">
            <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-full h-full object-contain"
                loading="lazy"
            />
        </div>
        <span className="text-sm font-medium text-gray-800">{skill.name}</span>
    </motion.div>
);

const SkillCategory = ({ title, skills, categoryIndex }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.3,
            delay: categoryIndex * 0.1
        }}
        viewport={{ once: true }}
        className="backdrop-blur-sm bg-white/90 rounded-2xl border border-gray-100 p-8 shadow-sm"
    >
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            {title}
            <span className="text-sm font-normal text-gray-500">
                ({skills.length})
            </span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
                <SkillItem
                    key={skill.name}
                    skill={skill}
                    index={index}
                    categoryIndex={categoryIndex}
                />
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="relative py-20 z-10 backdrop-blur-sm bg-white/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Technical Skills
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Focused on building robust backend solutions using modern technologies
                        and best practices in distributed systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, categoryIndex) => (
                        <SkillCategory
                            key={category.title}
                            title={category.title}
                            skills={category.skills}
                            categoryIndex={categoryIndex}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;