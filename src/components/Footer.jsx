import React from 'react';
import { Link } from 'react-router-dom';
import { FiShield, FiTwitter, FiLinkedin, FiGithub, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import logo from '../assets/secure8-logo-new.jpg';

const Footer = () => {
    return (
        <footer className="bg-cyber-950 text-slate-400 py-12 sm:py-16 lg:py-20 border-t border-cyber-700 relative overflow-hidden text-sm sm:text-base lg:text-lg">
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-80 shadow-[0_0_20px_rgba(57,255,136,0.8)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12 lg:mb-16">

                    {/* Company Info */}
                    <div>
                        <Link to="/" className="inline-flex items-center shrink-0 group mb-6">
                            <img src={logo} alt="Secure 8 Logo" className="h-12 sm:h-14 lg:h-16 w-auto max-w-[250px] object-contain rounded-md transition-transform duration-300 group-hover:scale-[1.02]" />
                        </Link>
                        <p className="mb-6 leading-relaxed text-sm">
                            Secure8 Technology Services delivers practical cybersecurity education designed to prepare students and professionals for real-world security careers.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-cyber-900 border border-cyber-700 flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan hover:bg-accent-blue/10 transition-all duration-300 box-glow-hover text-sm sm:text-base lg:text-lg">
                                <FiTwitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-cyber-900 border border-cyber-700 flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan hover:bg-accent-blue/10 transition-all duration-300 box-glow-hover text-sm sm:text-base lg:text-lg">
                                <FiLinkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-cyber-900 border border-cyber-700 flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan hover:bg-accent-blue/10 transition-all duration-300 box-glow-hover text-sm sm:text-base lg:text-lg">
                                <FiGithub className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About', 'Services', 'Academies', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link 
                                        to={
                                            link === 'Academies' ? '/services' : 
                                            link === 'Services' ? '/our-services' :
                                            `/${link.toLowerCase().replace(' ', '-')}`
                                        } 
                                        className="hover:text-accent-blue transition-colors text-sm"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Academies Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Academies</h4>
                        <ul className="space-y-4">
                            {['Penetration Testing', 'Cloud Security', 'Incident Response (DFIR)', 'Web App Security', 'Red Team Operations'].map((link) => (
                                <li key={link}>
                                    <Link to="/services" className="hover:text-accent-blue transition-colors text-sm">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <FiMapPin className="w-5 h-5 mr-3 mt-0.5 text-accent-cyan flex-shrink-0" />
                                <span>#110 The Louts, BNR Hills,<br />Rd No. 51, Jubliee Hills, Hyderabad, Telangana 500033</span>
                            </li>
                            <li className="flex items-center">
                                <FiPhone className="w-5 h-5 mr-3 text-accent-cyan flex-shrink-0" />
                                <span>+91 7901034846 <br /> +91 7075208789</span>
                            </li>
                            <li className="flex items-center">
                                <FiMail className="w-5 h-5 mr-3 text-accent-cyan flex-shrink-0" />
                                <a href="mailto:hello@cyberguard.com" className="hover:text-white transition-colors">secureight@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-cyber-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono opacity-80">
                    <p className="text-accent-blue text-center md:text-left">
                        &copy; {new Date().getFullYear()} SECURE-8 TECHNOLOGY SERVICES. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex space-x-6 text-slate-500">
                        <a href="#" className="hover:text-accent-cyan transition-colors hover:text-glow">PRIVACY POLICY</a>
                        <a href="#" className="hover:text-accent-cyan transition-colors hover:text-glow">TERMS OF SERVICE</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
