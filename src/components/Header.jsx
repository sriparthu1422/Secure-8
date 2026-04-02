import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX, FiShield } from 'react-icons/fi';
import logo from '../assets/secure8-logo-new.jpg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Academics', path: '/academics' },
        // { name: 'Success Stories', path: '/case-studies' },
        // { name: 'Blog', path: '/blog' },
        // { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' },
    ];

    const activeStyle = "text-accent-cyan font-bold drop-shadow-[0_0_12px_rgba(57,255,136,1)] relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent-cyan after:shadow-[0_0_10px_rgba(57,255,136,0.8)]";
    const inactiveStyle = "text-slate-300 font-medium relative hover:text-accent-cyan hover:drop-shadow-[0_0_8px_rgba(57,255,136,0.5)] transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent-cyan after:scale-x-0 after:origin-right hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300";

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-950/70 backdrop-blur-xl border-b border-cyber-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 lg:h-24 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center shrink-0 lg:mr-12 group">
                    <img
                        src={logo}
                        alt="Secure8 Logo"
                        className="h-[45px] sm:h-[52px] lg:h-[58px] w-auto object-contain transition-all duration-300 group-hover:scale-[1.05] invert hue-rotate-180 brightness-110 contrast-125 mix-blend-screen"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => isActive ? activeStyle : inactiveStyle}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex space-x-4 items-center">
                    <Link to="/contact" className="relative group overflow-hidden bg-accent-blue/10 border border-accent-blue/50 hover:bg-accent-blue/20 text-accent-cyan px-7 py-2.5 rounded-md font-bold transition-all duration-300 box-glow hover:shadow-[0_0_30px_rgba(57,255,136,0.6)] flex items-center justify-center">
                        <span className="relative z-10 group-hover:text-glow">Enroll Now</span>
                        <div className="absolute inset-0 h-full w-0 bg-accent-blue/20 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-slate-300 hover:text-white p-2 text-sm sm:text-base lg:text-lg"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Nav Drawer */}
            {isOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-cyber-950/98 backdrop-blur-xl border-b border-cyber-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.9)] pb-6 px-4 sm:px-6 flex flex-col space-y-4 animate-slide-down origin-top">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => `block py-2 ${isActive ? activeStyle : inactiveStyle}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <div className="h-px bg-cyber-800/50 my-2"></div>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="block bg-accent-blue/20 border border-accent-cyan/50 text-center text-accent-cyan box-glow px-6 py-3 rounded-md font-bold mt-2">
                        Enroll Now
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
