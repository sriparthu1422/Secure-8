import React from 'react';
import { ShieldCheck, UserCheck, CheckCircle2 } from 'lucide-react';

const WhyChoose = () => {
    return (
        <section className="py-12 lg:py-24 bg-slate-900 text-white relative overflow-hidden text-center md:text-left">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwdjJIMFptMCAyMGg0MHYySDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9zdmc+')] z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2 block">Why Choose CyberGuard</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white leading-tight">
                        Complete Cyber Defense Against Modern Attacks
                    </h2>
                    <p className="text-lg text-slate-400">
                        Our multi-layered security approach ensures that your infrastructure remains resilient against both known vulnerabilities and emerging zero-day exploits.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-20 max-w-6xl mx-auto">
                    {/* Column 1 */}
                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm relative">
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-500 rounded-xl flex justify-center items-center shadow-lg">
                            <ShieldCheck className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 mt-2">Advanced Threat Detection</h3>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            We utilize machine learning algorithms to map your network's baseline behavior, automatically detecting and neutralizing anomalous activities before they can disrupt operations.
                        </p>
                        <ul className="space-y-3">
                            {['Behavioral Analysis', 'AI-Driven Heuristics', 'Automated Remediation'].map((item, idx) => (
                                <li key={idx} className="flex items-center text-slate-400">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm relative">
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-500 rounded-xl flex justify-center items-center shadow-lg">
                            <UserCheck className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 mt-2">Zero Trust Architecture</h3>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            Never trust, always verify. Our zero trust frameworks authenticate and validate every access request on your network, isolating potential breaches and minimizing blast radius.
                        </p>
                        <ul className="space-y-3">
                            {['Micro-segmentation', 'Continuous Verification', 'Least Privilege Access'].map((item, idx) => (
                                <li key={idx} className="flex items-center text-slate-400">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 4 Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto border-t border-slate-800 pt-16">
                    <div className="text-center">
                        <p className="text-4xl font-extrabold text-white mb-2">5,000+</p>
                        <p className="text-slate-400 font-medium">Hours of Active Defense</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-extrabold text-blue-400 mb-2">300+</p>
                        <p className="text-slate-400 font-medium">Happy Enterprise Customers</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-extrabold text-indigo-400 mb-2">100%</p>
                        <p className="text-slate-400 font-medium">Compliance Rate Guarantee</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-extrabold text-emerald-400 mb-2">24/7</p>
                        <p className="text-slate-400 font-medium">Global SOC Support</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChoose;
