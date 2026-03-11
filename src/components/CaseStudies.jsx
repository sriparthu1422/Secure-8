import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
    const cases = [
        {
            title: 'E-Commerce Platform Security',
            desc: 'Safeguard your online store with end-to-end protection against DDoS attacks and transaction fraud.',
            image: 'bg-gradient-to-br from-indigo-900 to-slate-900',
            tag: 'Retail'
        },
        {
            title: 'Financial Data Compliance',
            desc: 'Seamless migration to a zero-trust architecture, ensuring PCI-DSS compliance and securing sensitive client portals.',
            image: 'bg-gradient-to-br from-blue-900 to-slate-900',
            tag: 'Finance'
        },
        {
            title: 'Healthcare Infrastructure Defense',
            desc: 'Hardened internal networks and secured IoT medical devices against ransomware, protecting critical patient data.',
            image: 'bg-gradient-to-br from-emerald-900 to-slate-900',
            tag: 'Healthcare'
        }
    ];

    return (
        <section className="py-12 lg:py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-6 md:mb-0">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Case Studies</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                            Real-World Cybersecurity Success Stories
                        </h2>
                    </div>
                    <button className="flex items-center text-primary font-semibold hover:text-blue-700 transition-colors">
                        View All Cases <ArrowUpRight className="w-5 h-5 ml-1" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {cases.map((item, idx) => (
                        <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg h-96 flex flex-col justify-end">
                            {/* Background Mock Image */}
                            <div className={`absolute inset-0 ${item.image} group-hover:scale-105 transition-transform duration-700`}></div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                            {/* Content */}
                            <div className="relative z-10 p-8 pt-0">
                                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold text-white mb-4">
                                    {item.tag}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    {item.desc}
                                </p>
                                <button className="inline-flex items-center text-blue-300 font-semibold group-hover:text-white transition-colors">
                                    Read Full Case <ArrowUpRight className="w-4 h-4 ml-1" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
