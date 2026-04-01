import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const CTA = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
            {/* Background with Cyber Gradients */}
            <div className="absolute inset-0 bg-cyber-900 z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-accent-blue/10 blur-[100px] z-0 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[80px] z-0 rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-cyber-800/80 backdrop-blur-md border border-cyber-700/50 p-6 sm:p-10 md:p-12 lg:p-16 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 box-glow overflow-hidden">
                    <div className="max-w-2xl text-center md:text-left relative z-10">
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                            Ready to <span className="text-gradient">Start Your Career</span> in Cybersecurity?
                        </h2>
                        <p className="text-base sm:text-lg text-slate-300">
                            Build real cybersecurity skills through practical training, expert mentorship, and industry-focused programs.
                        </p>
                    </div>
                    <div className="flex-shrink-0 relative z-10 w-full sm:w-auto">
                        <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto bg-accent-blue hover:bg-[#0E6B3A] text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-[0_0_20px_rgba(57,255,136,0.3)] hover:shadow-[0_0_30px_rgba(57,255,136,0.5)] group">
                            Get Started
                            <FiArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
