import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTerminal, FiShield } from 'react-icons/fi';
import heroBg from '../assets/hero-cyber-bg.png';

const Hero = () => {
    return (
        <section
            className="relative w-full min-h-[calc(100dvh-5rem)] lg:min-h-[calc(100dvh-6rem)] overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            {/* Cyber Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60 z-0"></div>

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-cyber-950/60 sm:bg-cyber-950/50 z-0 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-950 via-cyber-950/30 to-transparent z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16 w-full py-12 md:py-20">

                {/* Text Content */}
                <div className="w-full max-w-4xl flex flex-col items-center text-center">
                    {/* Cyber Badge */}
                    <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-accent-cyan/30 bg-cyber-900/60 backdrop-blur-md mb-6 shadow-lg shadow-accent-cyan/5 group border-glow hover:border-accent-cyan transition-colors duration-500">
                        <FiTerminal className="text-accent-cyan mr-2 sm:mr-3 text-sm sm:text-base opacity-80" />
                        <span className="text-[10px] sm:text-xs md:text-sm font-mono text-slate-300 tracking-wider uppercase">Secure8 Labs – Real-World Cyber Training</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6 leading-[1.15] lg:leading-[1.1] w-full">
                        <span className="block text-white mb-2">Learn Cybersecurity by Doing — Not Just Watching</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-cyan to-white pb-2 text-glow-sm">
                            Become Job-Ready in Ethical Hacking & VAPT
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
                        Train in real lab environments using tools like Burp Suite, Nmap, and SQLMap.
                        Master OWASP Top 10 vulnerabilities and gain hands-on experience with real-world attack simulations.
                    </p>

                    {/* Neon Actions */}
                    <div className="flex flex-col sm:flex-row justify-center w-full sm:w-auto gap-4">
                        <Link to="/contact" className="relative group overflow-hidden bg-accent-blue/10 border border-accent-cyan/70 hover:bg-accent-blue/20 text-accent-cyan px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 box-glow hover:shadow-[0_0_40px_rgba(57,255,136,0.6)] flex items-center justify-center">
                            <span className="relative z-10 group-hover:text-white transition-colors duration-200">Start Training</span>
                            <div className="absolute inset-0 h-full w-0 bg-accent-blue/40 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
                            <FiArrowRight className="relative z-10 ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform group-hover:text-white" />
                        </Link>
                        <Link to="/services" className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg text-slate-300 hover:text-white border border-cyber-700 bg-cyber-900/40 hover:bg-cyber-800 backdrop-blur-sm transition-all flex items-center justify-center group hover:border-slate-500">
                            <FiShield className="mr-3 text-slate-500 group-hover:text-accent-cyan transition-colors" />
                            Explore Programs
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
