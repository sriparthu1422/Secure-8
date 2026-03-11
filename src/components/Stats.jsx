import React from 'react';
import SectionTitle from './SectionTitle';

const Stats = () => {
    const stats = [
        { value: '95%', label: 'Placement Rate' },
        { value: '15K+', label: 'Students Enrolled' },
        { value: '200+', label: 'Hiring Partners' },
        { value: '40+', label: 'Expert Courses' },
    ];

    return (
        <section className="py-20 bg-cyber-950 border-t border-cyber-800">
            <div className="container mx-auto px-4">
                <SectionTitle title="Academy Metrics" subtitle="Student Success" center />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-cyber-900 border border-cyber-700 hover:border-accent-blue transition-colors duration-300 text-center box-glow-hover group">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan mb-3 group-hover:scale-110 transition-transform">
                                {stat.value}
                            </h3>
                            <p className="text-slate-400 font-medium tracking-wide uppercase text-sm">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
