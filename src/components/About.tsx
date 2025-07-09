// components/About.tsx
'use client'

import { Code, Brain, Rocket, Users } from 'lucide-react'

const About = () => {
    const highlights = [
        {
            icon: Code,
            title: 'Full Stack Development',
            description: 'Expert in modern web technologies including React, Next.js, Node.js, and TypeScript'
        },
        {
            icon: Brain,
            title: 'Machine Learning',
            description: 'Passionate about AI/ML with hands-on experience in data science and predictive modeling'
        },
        {
            icon: Rocket,
            title: 'Innovation Focus',
            description: 'Always exploring cutting-edge technologies to build scalable and efficient solutions'
        },
        {
            icon: Users,
            title: 'Client Success',
            description: 'Delivered successful freelance projects with focus on user experience and business value'
        }
    ]

    return (
        <section id="about" className="section-padding ">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="animate-slide-up">
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                            Hi, I'm Himanshu Raj Yadav
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            A dedicated full-stack developer currently pursuing B.Tech from Chandigarh Group of Colleges.
                            I have a deep passion for creating innovative web applications that solve real-world problems.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            My journey in technology spans across modern web development frameworks and machine learning,
                            allowing me to build comprehensive solutions that are both user-friendly and technically robust.
                            I thrive on challenges and am constantly learning new technologies to stay ahead in this
                            ever-evolving field.
                        </p>

                        <a
                            href="#contact"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 
          rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300
          hover:scale-105"
                        >
                            Let's Work Together
                        </a>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        {highlights.map((item, index) => (
                            <div
                                key={item.title}
                                className="glass-effect p-6 rounded-lg hover:bg-white/10 transition-colors duration-300 animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="mb-4">
                                    <item.icon className="w-8 h-8 text-blue-400" />
                                </div>
                                <h4 className="text-lg font-semibold mb-3 text-white">{item.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
