// components/Hero.tsx
'use client'

import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
    const stats = [
        { label: 'Experience', value: 'Fresher' },
        { label: 'Projects Completed', value: '5+' },
        { label: 'Technologies', value: '8+' },
        { label: 'Code Commits', value: '100+' },
    ]

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-gray-900"></div>
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <div className="mb-8 animate-slide-up">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                            Hello, I'm{' '}
                            <span className="gradient-text">Himanshu</span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8">
                            Full Stack Developer & ML Enthusiast
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            A passionate developer with expertise in modern web technologies and machine learning.
                            I craft scalable solutions that bridge the gap between innovative design and powerful functionality.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        {[
                            { icon: Github, href: 'https://github.com/HimanshuRaj11', label: 'GitHub' },
                            { icon: Linkedin, href: 'https://www.linkedin.com/in/himanshu-raj-yadav-37b185252/', label: 'LinkedIn' },
                            { icon: Mail, href: 'mailto: himanshurajyadav11@gmail.com', label: 'Email' },
                        ].map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                className="p-3 glass-effect rounded-full hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                aria-label={label}
                            >
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="glass-effect p-6 rounded-lg text-center hover:bg-white/10 transition-colors duration-300 animate-fade-in"
                                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                            >
                                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>



                </div>
            </div>
        </section>
    )
}

export default Hero