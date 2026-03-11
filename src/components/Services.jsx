import React from 'react';
import { Network, Database, Fingerprint, Activity, Server, Settings, ArrowUpRight } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Network className="w-6 h-6" />,
            title: 'Network Security',
            desc: 'Protect your internal networks with Next-Gen Firewalls, IDS/IPS, and Zero Trust access management protocols.',
            color: 'text-blue-500 bg-blue-50'
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: 'Data Encryption',
            desc: 'Military-grade encryption for data at rest and in transit, ensuring sensitive information remains confidential.',
            color: 'text-indigo-500 bg-indigo-50'
        },
        {
            icon: <Fingerprint className="w-6 h-6" />,
            title: 'Identity & Access',
            desc: 'Multi-factor authentication (MFA) and granular role-based access control (RBAC) implementations.',
            color: 'text-purple-500 bg-purple-50'
        },
        {
            icon: <Activity className="w-6 h-6" />,
            title: 'Security Monitoring',
            desc: '24/7 SIEM monitoring and proactive threat hunting to catch anomalies before they escalate to breaches.',
            color: 'text-rose-500 bg-rose-50'
        },
        {
            icon: <Server className="w-6 h-6" />,
            title: 'Backup & Recovery',
            desc: 'Immutable backups and continuous data protection to prevent catastrophic ransomware data loss scenarios.',
            color: 'text-emerald-500 bg-emerald-50'
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: 'Security Configuration',
            desc: 'Hardening of cloud and on-premise infrastructure in line with CIS benchmarks and ISO 27001 standards.',
            color: 'text-orange-500 bg-orange-50'
        }
    ];

    return (
        <section className="py-12 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">What We Provide</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                        Comprehensive Cybersecurity Arsenal
                    </h2>
                    <p className="text-lg text-slate-600">
                        From granular network protection to global threat intelligence, our comprehensive service portfolio covers every aspect of your security posture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-200/50 ${service.color}`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                                {service.desc}
                            </p>
                            <a href="#" className="inline-flex items-center text-primary font-semibold group-hover:text-blue-700 transition-colors">
                                Learn More
                                <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
