import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiBook, FiMonitor, FiAward } from 'react-icons/fi';
import { FeatureCard } from '../components/Cards';
import heroBg from '../assets/hero-cyber-bg.png';

const Hero = () => {
    return (
        <section className="relative pt-24 pb-20 lg:pt-2 lg:pb-32 overflow-hidden bg-cyber-950 flex flex-col">
            {/* Dynamic Cyber Background */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat opacity-80"
                style={{ backgroundImage: `url(${heroBg})` }}
            ></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] z-0 mix-blend-overlay"></div>
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[150px] z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px] z-0 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-950/60 via-cyber-950/80 to-cyber-950 z-0 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyber-700/60 bg-cyber-800/40 backdrop-blur-md mb-5 shadow-lg shadow-black/20">
                        <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse mr-3 shadow-[0_0_8px_rgba(57,255,136,0.6)]"></span>
                        <span className="text-sm font-medium text-slate-300 tracking-wide">Next-Gen Cybersecurity Academy</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[76px] font-extrabold tracking-tight mb-4 leading-[1.15] text-white">
                        <span className="block mb-1 md:mb-2 text-slate-100">Defend the Future.</span>
                        <span className="block text-gradient pb-2 drop-shadow-[0_0_20px_rgba(57,255,136,0.4)]">
                            Master Cybersecurity.
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6 max-w-3xl mx-auto">
                        Your Trusted Partner in Cybersecurity Education and Career Growth
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-slate-400 mb-6 max-w-3xl mx-auto leading-relaxed">
                        Secure8 Technology Services provides hands-on cybersecurity training designed to prepare the next generation of security professionals. Our programs combine expert instruction, real attack simulations, and industry tools to build practical cybersecurity skills.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-4 sm:gap-6">
                        <Link to="/contact" className="w-full sm:w-auto bg-accent-blue hover:bg-[#0E6B3A] px-8 py-4 rounded-lg font-bold text-lg text-white transition-all shadow-[0_0_15px_rgba(57,255,136,0.15)] hover:shadow-[0_0_25px_rgba(57,255,136,0.3)] flex items-center justify-center group">
                            Enroll Now
                            <FiArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/services" className="w-full sm:w-auto bg-transparent border border-cyber-700 hover:border-accent-blue px-8 py-4 rounded-lg font-bold text-lg text-white hover:bg-cyber-800/50 transition-all flex items-center justify-center">
                            Explore Academies
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
