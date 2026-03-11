import React from 'react';
import { Target, Lock, AlertTriangle } from 'lucide-react';

const Threats = () => {
    return (
        <section className="py-12 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Threat Prevention</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                        Keeping Your Business One Step Ahead of Hackers
                    </h2>
                    <p className="text-lg text-slate-600">
                        We employ proactive security measures and continuous testing to identify vulnerabilities before malicious actors can exploit them.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                        <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                            <Target className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Penetration Testing</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Simulated cyber attacks on your systems to expose weaknesses and fortify your defenses against real-world threats.
                        </p>
                    </div>

                    <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                        <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                            <Lock className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Data Security</h3>
                        <p className="text-slate-600 leading-relaxed">
                            End-to-end encryption and robust access controls to protect sensitive organizational and customer data.
                        </p>
                    </div>

                    <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                        <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                            <AlertTriangle className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Incident Response</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Rapid deployment protocols to contain breaches, minimize damage, and restore systematic operations immediately.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Threats;
