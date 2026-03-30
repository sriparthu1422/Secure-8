import React from 'react';
import { ShieldAlert, Terminal, Lock, ChevronRight } from 'lucide-react';

const WhyChoose = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-cyber-950 text-white relative overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,136,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-md bg-accent-blue/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(57,255,136,0.2)]">
                        System Architecture
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan text-glow">Secure-8</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        Our academy doesn't just teach theory. We immerse you in live attack simulations, advanced defense heuristics, and weaponized payloads.
                    </p>
                </div>

                {/* Terminal Styled Section */}
                <div className="max-w-6xl mx-auto bg-[#05080c] border border-cyber-700 rounded-xl overflow-hidden shadow-[0_10px_50px_rgba(57,255,136,0.05)] mb-16 lg:mb-20 group relative">
                    {/* Header */}
                    <div className="bg-[#0a111a] px-4 py-3 flex items-center border-b border-cyber-700/50">
                        <div className="flex space-x-2 mr-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="text-xs text-slate-500 font-mono tracking-widest uppercase flex-1 text-center">root@secure8:/features# ls -la</div>
                    </div>

                    {/* Body */}
                    <div className="p-6 sm:p-8 lg:p-12 relative font-mono">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:gap-12 relative z-10">
                            {/* Column 1 */}
                            <div>
                                <div className="flex items-center text-accent-blue mb-4">
                                    <Terminal className="w-6 h-6 mr-3" />
                                    <h3 className="text-xl font-bold text-white tracking-wide">Live Attack Sims</h3>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    Execute real-world exploits in our safe containerized environments. Map networks, pivot through subnets, and exfiltrate data.
                                </p>
                                <ul className="space-y-3 text-sm">
                                    {['Red Team Operations', 'Exploit Development', 'Post-Exploitation Tactics'].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-accent-cyan">
                                            <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div>
                                <div className="flex items-center text-accent-blue mb-4">
                                    <Lock className="w-6 h-6 mr-3" />
                                    <h3 className="text-xl font-bold text-white tracking-wide">Enterprise Defense</h3>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    Learn to hunt threats, configure enterprise SIEMs, and respond to live incidents. Reverse engineer malware bypassing AV.
                                </p>
                                <ul className="space-y-3 text-sm">
                                    {['Malware Analysis', 'Threat Hunting', 'Incident Response (DFIR)'].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-accent-cyan">
                                            <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cyber Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
                    {[
                        { num: '5,000+', label: 'Students Certified' },
                        { num: '30+', label: 'Advanced Modules' },
                        { num: '98%', label: 'Success Rate' },
                        { num: '24/7', label: 'Lab Access' }
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-cyber-900/50 backdrop-blur-md border border-cyber-800 p-4 sm:p-6 rounded-2xl text-center group hover:border-accent-cyan transition-all duration-300 box-glow-hover">
                            <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 group-hover:from-accent-blue group-hover:to-accent-cyan transition-all duration-300 mb-2">
                                {stat.num}
                            </p>
                            <p className="text-slate-400 text-sm font-semibold tracking-wide uppercase group-hover:text-slate-300 transition-colors">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChoose;
