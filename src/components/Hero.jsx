import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTerminal, FiShield } from 'react-icons/fi';
import heroBg from '../assets/hero-cyber-bg.png';

const Hero = () => {
    return (
        <section
            className="relative py-16 lg:py-0 min-h-[100dvh] w-full overflow-hidden bg-cover bg-top bg-no-repeat flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            {/* Cyber Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60 z-0"></div>

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-cyber-950/60 sm:bg-cyber-950/50 z-0 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-950 via-cyber-950/30 to-transparent z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center justify-center gap-12 lg:gap-16 w-full -mt-16 sm:-mt-20 lg:-mt-24">

                {/* Text Content */}
                <div className="w-full max-w-4xl flex flex-col items-center text-center">
                    {/* Cyber Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-accent-cyan/30 bg-cyber-900/60 backdrop-blur-md mb-6 shadow-lg shadow-accent-cyan/5 group border-glow hover:border-accent-cyan transition-colors duration-500">
                        <FiTerminal className="text-accent-cyan mr-3 opacity-80" />
                        <span className="text-sm font-mono text-slate-300 tracking-wider">SECURE-8 LABS ONLINE</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6 leading-[1.15] lg:leading-[1.1] w-full">
                        <span className="block text-white mb-2">Defend the</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-cyan to-white pb-2 text-glow">
                            Digital Frontier.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Master cybersecurity and ethical hacking through immersive, hands-on training. Prepare yourself for real-world threats in our advanced cyber lab environments.
                    </p>

                    {/* Neon Actions */}
                    <div className="flex flex-col sm:flex-row justify-center w-full gap-4">
                        <Link to="/contact" className="relative group overflow-hidden bg-accent-blue/10 border border-accent-cyan/70 hover:bg-accent-blue/20 text-accent-cyan px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 box-glow hover:shadow-[0_0_40px_rgba(57,255,136,0.6)] flex items-center justify-center">
                            <span className="relative z-10 group-hover:text-white transition-colors duration-200">Start Training</span>
                            <div className="absolute inset-0 h-full w-0 bg-accent-blue/40 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
                            <FiArrowRight className="relative z-10 ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform group-hover:text-white" />
                        </Link>
                        <Link to="/services" className="px-8 py-4 rounded-lg font-semibold text-lg text-slate-300 hover:text-white border border-cyber-700 bg-cyber-900/40 hover:bg-cyber-800 backdrop-blur-sm transition-all flex items-center justify-center group hover:border-slate-500">
                            <FiShield className="mr-3 text-slate-500 group-hover:text-accent-cyan transition-colors" />
                            View Academies
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
