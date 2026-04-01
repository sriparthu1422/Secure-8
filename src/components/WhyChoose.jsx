import React from 'react';
import { ShieldAlert, Terminal, Lock, ChevronRight } from 'lucide-react';

const WhyChoose = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-cyber-950 text-white relative overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,136,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
                    <span className="inline-block py-1 px-3 rounded-md bg-accent-blue/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(57,255,136,0.2)]">
                        System Architecture
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-[1.1] tracking-tight">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan text-glow">Secure8 Technology Services</span>?
                        <span className="block mt-2 text-xl sm:text-2xl md:text-3xl text-slate-300 font-bold">
                            We Train You for Real Cybersecurity Careers — Not Just Certifications
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Our academy doesn't just teach theory. We immerse you in live attack simulations, advanced defense heuristics, and weaponized payloads.
                    </p>
                </div>

                {/* Terminal Styled Section */}
                <div className="max-w-6xl mx-auto bg-[#05080c] border border-cyber-700 rounded-xl overflow-hidden shadow-[0_10px_50px_rgba(57,255,136,0.05)] mb-12 lg:mb-20 group relative">
                    {/* Header */}
                    <div className="bg-[#0a111a] px-4 py-3 flex items-center border-b border-cyber-700/50">
                        <div className="flex space-x-2 mr-4">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="text-[10px] sm:text-xs text-slate-500 font-mono tracking-widest uppercase flex-1 text-center">root@secure8:/features# ls -la</div>
                    </div>

                    {/* Body */}
                    <div className="p-5 sm:p-8 md:p-10 lg:p-12 relative font-mono">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 relative z-10">
                            {/* Column 1 */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center text-accent-blue">
                                    <Terminal className="w-6 h-6 mr-3 text-accent-cyan" />
                                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">Live Cyber Attack Simulations</h3>
                                </div>
                                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                                    Practice real-world penetration testing in safe, controlled lab environments. Learn how to identify vulnerabilities, exploit them, and understand how attacks actually happen.
                                </p>
                                <ul className="space-y-3">
                                    {['Real-world lab platforms (DVWA, JuiceShop, bWAPP)', 'OWASP Top 10 vulnerability testing', 'Hands-on exploitation techniques', 'Practical VAPT workflows'].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-accent-cyan text-xs sm:text-sm">
                                            <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div className="flex flex-col gap-4 border-t border-cyber-700/50 md:border-t-0 pt-8 md:pt-0">
                                <div className="flex items-center text-accent-blue">
                                    <Lock className="w-6 h-6 mr-3 text-accent-cyan" />
                                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">Real-World Defense & Job Skills</h3>
                                </div>
                                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                                    Cybersecurity is not just about attacking — it's about protecting. Learn how organizations detect, respond, and secure systems against threats.
                                </p>
                                <ul className="space-y-3">
                                    {['Threat detection & basic SOC concepts', 'Incident response fundamentals', 'Security best practices & defense strategies', 'Industry-ready project experience'].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-accent-cyan text-xs sm:text-sm">
                                            <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
