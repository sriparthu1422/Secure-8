import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX, FiShield } from 'react-icons/fi';
import logo from '../assets/secure8-logo-new.jpg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/our-services' },
        { name: 'Academies', path: '/services' },
        // { name: 'Success Stories', path: '/case-studies' },
        // { name: 'Blog', path: '/blog' },
        // { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' },
    ];

    const activeStyle = "text-accent-cyan font-semibold drop-shadow-[0_0_8px_rgba(57,255,136,0.8)] relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent-cyan";
    const inactiveStyle = "text-slate-300 font-medium relative hover:text-accent-cyan hover:drop-shadow-[0_0_8px_rgba(57,255,136,0.5)] transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent-cyan after:scale-x-0 after:origin-right hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300";

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-950/90 backdrop-blur-md border-b border-cyber-700">
            <div className="container mx-auto px-4 h-24 flex justify-between items-center">
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
                    {/* <Link to="/contact" className="text-slate-300 hover:text-white font-medium transition-colors">
                        Free Trial
                    </Link> */}
                    <Link to="/contact" className="bg-accent-blue hover:bg-[#0E6B3A] text-white px-6 py-2.5 rounded-md font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(57, 255, 136,0.5)] hover:shadow-[0_0_25px_rgba(57, 255, 136,0.7)]">
                        Enroll Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-slate-300 hover:text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Nav Drawer */}
            {isOpen && (
                <div className="lg:hidden absolute top-24 left-0 w-full bg-cyber-900 border-b border-cyber-700 shadow-2xl pb-6 px-4 flex flex-col space-y-4">
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
                    <div className="h-px bg-cyber-700 my-2"></div>
                    {/* <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-slate-300 hover:text-white font-medium">
                        Free Trial
                    </Link> */}
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="block bg-accent-blue text-center text-white px-6 py-3 rounded-md font-semibold mt-2">
                        Enroll Now
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
