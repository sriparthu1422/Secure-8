import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTerminal, FiShield } from 'react-icons/fi';
import { TerminalWindow } from './CyberComponents';

const Hero = () => {
    return (
        <section className="relative py-16 lg:py-0 min-h-[calc(100vh-6rem)] w-full overflow-hidden bg-cyber-950 flex flex-col justify-center items-center w-full">
            {/* Dynamic CSS Cyber Grid Background */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(57,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,136,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            {/* Scanning Line overlay */}
            <div className="absolute inset-0 w-full h-[150%] bg-gradient-to-b from-transparent via-accent-cyan/10 to-transparent -translate-y-full animate-scanline pointer-events-none z-0"></div>

            {/* Glowing Accent Orbs */}
            <div className="absolute top-0 right-1/4 w-[600px] min-h-[600px] w-full bg-accent-blue/10 rounded-full blur-[150px] z-0 pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-1/4 left-1/4 w-[500px] min-h-[500px] w-full bg-accent-cyan/10 rounded-full blur-[120px] z-0 pointer-events-none mix-blend-screen"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyber-950 to-transparent z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full">
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
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
                    <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed border-l-4 border-accent-blue/50 pl-6 shadow-[-10px_0_10px_-10px_rgba(34,166,82,0.5)]">
                        Master cybersecurity and ethical hacking through immersive, hands-on training. Prepare yourself for real-world threats in our advanced cyber lab environments.
                    </p>

                    {/* Neon Actions */}
                    <div className="flex flex-col sm:flex-row w-full gap-4">
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

                {/* Right Visual: Terminal Window */}
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-8 xl:pl-10">
                    <TerminalWindow 
                        title="sec-8-init.sh"
                        command="grep -r 'vulnerabilities' /sys/network"
                        outputLines={[
                            "[+] Initializing advanced security scan...",
                            "[+] Target acquired: 192.168.1.104",
                            "[*] Bypassing firewall heuristics... SUCCESS",
                            "[*] Escalating privileges to root...",
                            "[!] CRITICAL VULNERABILITY FOUND: CVE-2024-8911",
                            "→ Ready to exploit payload."
                        ]}
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
