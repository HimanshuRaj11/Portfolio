// components/Skills.tsx
'use client'
interface Skill {
    name: string;
    level: number;
    category: string;
}
const Skills = () => {
    const skills: Skill[] = [
        // Languages
        { name: 'Javascript', level: 80, category: 'language' },
        { name: 'Java', level: 50, category: 'language' },
        { name: 'Python', level: 60, category: 'language' },

        // Frontend
        { name: 'React.js', level: 90, category: 'frontend' },
        { name: 'Next.js', level: 85, category: 'frontend' },
        { name: 'TypeScript', level: 80, category: 'frontend' },
        { name: 'Tailwind CSS', level: 85, category: 'frontend' },

        // Backend
        { name: 'Node.js', level: 80, category: 'backend' },
        { name: 'Express.js', level: 75, category: 'backend' },
        { name: 'Python (DRF)', level: 85, category: 'backend' },
        // { name: 'REST APIs', level: 80, category: 'backend' },

        // Database
        { name: 'MongoDB', level: 80, category: 'database' },
        { name: 'MySQL', level: 60, category: 'database' },
        // { name: 'Redis', level: 65, category: 'database' },

        // ML & Data Science
        { name: 'Machine Learning', level: 75, category: 'ml' },
        { name: 'TensorFlow', level: 70, category: 'ml' },
        { name: 'Pandas', level: 70, category: 'ml' },
        { name: 'Numpy', level: 60, category: 'ml' },

        // Tools
        { name: 'Git', level: 85, category: 'tools' },
        { name: 'Hostinger', level: 40, category: 'tools' },
        { name: 'Vercel', level: 70, category: 'tools' },
        // { name: 'AWS', level: 65, category: 'tools' },


    ]

    const categories = {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        ml: 'ML & Data Science',
        tools: 'Tools & DevOps',
        language: "language"
    }

    const categoryColors = {
        frontend: 'from-blue-500 to-cyan-500',
        backend: 'from-green-500 to-emerald-500',
        database: 'from-orange-500 to-red-500',
        ml: 'from-purple-500 to-pink-500',
        tools: 'from-yellow-500 to-orange-500',
        language: 'from-red-500 to-green-500'
    }

    return (
        <section id="skills" className="section-padding py-3">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl font-bold mb-4">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Here are the technologies and tools I work with to bring ideas to life
                    </p>
                </div>

                <div className="space-y-12">
                    {Object.entries(categories).map(([key, title], categoryIndex) => {
                        const categorySkills = skills.filter(skill => skill.category === key)
                        return (
                            <div
                                key={key}
                                className="glass-effect p-8 rounded-lg animate-slide-up"
                                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                            >
                                <h3 className="text-2xl font-semibold mb-8 text-center">
                                    <span className={`bg-gradient-to-r ${categoryColors[key as keyof typeof categoryColors]} bg-clip-text text-transparent`}>
                                        {title}
                                    </span>
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categorySkills.map((skill, index) => (
                                        <div
                                            key={skill.name}
                                            className="bg-gray-800/50 p-4 rounded-lg animate-fade-in"
                                            style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                                        >
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-white font-medium">{skill.name}</span>
                                                <span className="text-blue-400 text-sm">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-2">
                                                <div
                                                    className={`h-2 rounded-full bg-gradient-to-r ${categoryColors[key as keyof typeof categoryColors]} transition-all duration-1000 ease-out`}
                                                    style={{
                                                        width: `${skill.level}%`,
                                                        animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s`
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills
