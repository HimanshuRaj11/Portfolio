import { Github, Linkedin, Mail, ExternalLink, Heart, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/HimanshuRaj11',
            color: 'hover:text-gray-900'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/himanshu-raj-yadav-37b185252/',
            color: 'hover:text-blue-600'
        },
        {
            name: 'Email',
            icon: Mail,
            url: 'mailto:himanshurajyadav11@gmail.com',
            color: 'hover:text-red-500'
        }
    ];

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' }
    ];


    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'himanshurajyadav11@gmail.com',
            href: 'mailto:himanshurajyadav11@gmail.com'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 73208 69391',
            href: 'tel:+917320869391'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Chandigarh, India',
            href: '#'
        }
    ]


    return (
        <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Himanshu
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Full-stack developer passionate about creating innovative solutions
                            and building exceptional digital experiences.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4 pt-2">
                            {socialLinks.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-lg bg-gray-800 text-gray-400 transition-all duration-300 ${link.color} hover:bg-gray-700 hover:scale-110 hover:shadow-lg`}
                                        aria-label={link.name}
                                    >
                                        <IconComponent size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-200">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {link.name}
                                        </span>
                                        <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4" id="contact">
                        <h4 className="text-lg font-semibold text-gray-200">Get In Touch</h4>
                        <div className="space-y-3">
                            {
                                contactInfo.map((info, i) => (
                                    <div className="text-gray-400" key={i}>
                                        <info.icon />
                                        <p className="font-medium text-gray-300">{info.label}</p>
                                        <Link
                                            href={`${info.href}`}
                                            className="hover:text-white transition-colors duration-300"
                                        >
                                            {info.value}
                                        </Link>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="max-w-6xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center text-gray-400 text-sm">
                            <span>© {currentYear} HimanshuRajYadav. All rights reserved.</span>
                        </div>

                        <div className="flex items-center text-gray-400 text-sm">
                            <span>Made with</span>
                            <Heart size={16} className="mx-1 text-red-400 animate-pulse" />
                            <span>using Next.js & Tailwind CSS</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        </footer>
    );
}