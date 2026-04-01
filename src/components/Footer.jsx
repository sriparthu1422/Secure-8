import React from 'react';
import { Link } from 'react-router-dom';
import { FiShield, FiTwitter, FiLinkedin, FiGithub, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import logo from '../assets/secure8-logo-new.jpg';

const Footer = () => {
    return (
        <footer className="bg-cyber-950 text-slate-400 py-12 sm:py-16 lg:py-24 border-t border-cyber-800 relative overflow-hidden">
            {/* Top Border Glow - Aesthetic Brand element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-80 shadow-[0_0_20px_rgba(57,255,136,0.8)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 lg:gap-12 mb-12 lg:mb-20">

                    {/* Branding & Mission */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left order-1">
                        <Link to="/" className="inline-flex items-center shrink-0 group mb-6 transition-transform hover:scale-[1.01] active:scale-95">
                            <img src={logo} alt="Secure 8 Logo" className="h-12 sm:h-14 lg:h-16 w-auto max-w-[240px] sm:max-w-[280px] object-contain rounded-md shadow-2xl" />
                        </Link>
                        <p className="mb-4 leading-relaxed text-sm font-bold text-white/90 max-w-sm sm:max-w-none">
                            Secure8 Technology Services is a cybersecurity training academy focused on building real-world skills.
                        </p>
                        <p className="mb-8 leading-relaxed text-sm max-w-sm sm:max-w-none">
                            We help students and professionals become job-ready through hands-on labs, expert mentorship, and industry-focused programs.
                        </p>
                        <div className="flex space-x-4">
                            {[FiTwitter, FiLinkedin, FiGithub].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-11 h-11 rounded-full bg-cyber-900 border border-cyber-700 flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan hover:bg-accent-blue/10 transition-all duration-300 shadow-xl group/social" aria-label={`Social link ${idx}`}>
                                    <Icon className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Navigation */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left order-2 lg:pl-4">
                        <h4 className="text-white font-bold text-base sm:text-lg mb-6 uppercase tracking-wider">Company</h4>
                        <ul className="space-y-4">
                            {['About', 'Services', 'Academies', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link
                                        to={
                                            link === 'Academies' ? '/services' :
                                                link === 'Services' ? '/our-services' :
                                                    `/${link.toLowerCase().replace(' ', '-')}`
                                        }
                                        className="hover:text-accent-blue transition-colors text-sm py-1 inline-block hover:pl-1 duration-200"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Core Programs */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left order-3 lg:pl-4">
                        <h4 className="text-white font-bold text-base sm:text-lg mb-6 uppercase tracking-wider">Academies</h4>
                        <ul className="space-y-4">
                            {['Ethical Hacking & VAPT', 'Cloud Security', 'Web Application Security', 'API Security', 'Identity & Access Management (IAM)', 'Career Prep & CTFs'].map((link) => (
                                <li key={link}>
                                    <Link to="/services" className="hover:text-accent-blue transition-colors text-sm py-1 inline-block hover:pl-1 duration-200">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Direct Contact */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left text-sm order-4">
                        <h4 className="text-white font-bold text-base sm:text-lg mb-6 uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start justify-center sm:justify-start group/contact">
                                <FiMapPin className="w-5 h-5 mr-3 mt-0.5 text-accent-cyan flex-shrink-0 group-hover/contact:text-accent-blue transition-colors" />
                                <span className="leading-relaxed">#110, The Lotus, BNR Hills,<br />Road #51, Jubilee Hills, Hyderabad, Telangana 500033</span>
                            </li>
                            <li className="flex items-center justify-center sm:justify-start group/contact">
                                <FiPhone className="w-5 h-5 mr-3 text-accent-cyan flex-shrink-0 group-hover/contact:text-accent-blue transition-colors" />
                                <div className="flex flex-col space-y-1">
                                    <a href="tel:+917901034846" className="hover:text-white transition-colors">+91 79010 34846</a>
                                    <a href="tel:+917075208789" className="hover:text-white transition-colors">+91 70752 08789</a>
                                </div>
                            </li>
                            <li className="flex items-center justify-center sm:justify-start group/contact">
                                <FiMail className="w-5 h-5 mr-3 text-accent-cyan flex-shrink-0 group-hover/contact:text-accent-blue transition-colors" />
                                <a href="mailto:secureight@gmail.com" className="hover:text-white transition-colors break-all">secureight@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Legal & Copyright */}
                <div className="border-t border-cyber-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-8 text-xs sm:text-sm font-mono opacity-80 text-center md:text-left">
                    <p className="text-accent-blue uppercase tracking-tight md:max-w-md">
                        &copy; {new Date().getFullYear()} Secure8 Technology Services. All rights reserved.
                    </p>
                    <div className="flex space-x-6 sm:space-x-10 text-slate-500">
                        <a href="#" className="hover:text-accent-cyan transition-colors py-2 uppercase tracking-widest hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-accent-cyan transition-colors py-2 uppercase tracking-widest hover:text-white">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
