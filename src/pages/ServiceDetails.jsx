import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import { FiCheckCircle, FiShield, FiArrowRight } from 'react-icons/fi';

const ServiceDetails = () => {
    return (
        <div>
            {/* Hero */}
            <section className="pt-32 pb-24 bg-cyber-950 relative border-b border-cyber-800 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-transparent to-cyber-950"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center space-x-3 mb-6">
                            <FiShield className="w-8 h-8 text-accent-cyan" />
                            <span className="text-accent-cyan font-bold tracking-widest uppercase text-sm">Featured Course</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Ethical Hacking <span className="text-gradient">Bootcamp</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                            Master offensive security with a comprehensive curriculum covering penetration testing, network defense, and vulnerability exploitation to launch your cyber career.
                        </p>
                        <button className="bg-accent-blue hover:bg-[#0E6B3A] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(57, 255, 136,0.4)]">
                            Enroll in Course
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-cyber-900 border-b border-cyber-800">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Left Column (Content) */}
                        <div className="lg:w-2/3">
                            <SectionTitle title="Comprehensive Curriculum" />
                            <div className="prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-headings:text-white">
                                <p>
                                    Modern cybersecurity requires a diverse skill set. The traditional concept of perimeter defense has evolved with the advent of remote work, cloud infrastructure, and sophisticated threat actors. To defend today's networks, you need practical, hands-on offensive and defensive understanding.
                                </p>
                                <p>
                                    Our Ethical Hacking course immerses you in real-world scenarios through hands-on labs. We don't just teach theory; we guide you in exploiting and securing real environments using industry-standard tools and practices.
                                </p>

                                <h3 className="text-2xl font-bold mt-12 mb-6">Overview of Features</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 not-prose">
                                    {[
                                        'Advanced Penetration Testing',
                                        'Network Traffic Analysis',
                                        'Vulnerability Exploitation',
                                        'Social Engineering Tactics',
                                        'Active Directory Security',
                                        'Incident Response Protocols'
                                    ].map((feature, idx) => (
                                        <div key={idx} className="bg-cyber-800 border border-cyber-700 p-6 rounded-2xl flex items-start space-x-4">
                                            <FiCheckCircle className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-0.5" />
                                            <span className="text-white font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold mb-6">Career Benefits</h3>
                                <p>
                                    By mastering our Ethical Hacking curriculum, you immediately benefit from a higher chance of landing top cybersecurity roles. Our career team helps refine your credentials, ensuring that when you apply for a job, you represent a highly capable security professional.
                                </p>
                                <p>
                                    Furthermore, our lab-based learning model is designed to simulate a real-world Security Operations Center (SOC) environment. You will collaborate using modern tools, threat intelligence feeds, and incident reporting formatting, ensuring you are ready for day one on the job.
                                </p>
                            </div>
                        </div>

                        {/* Right Column (Sidebar / CTA) */}
                        <div className="lg:w-1/3 space-y-8">
                            {/* <div className="bg-gradient-cyber p-8 rounded-3xl border border-cyber-700 relative overflow-hidden box-glow">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 blur-[40px] rounded-full"></div>
                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Start Your Free Trial Lab</h3>
                                <p className="text-slate-400 mb-8 relative z-10">Our instructors will guide you through your first interactive security lab and outline your career map.</p>
                                <button className="w-full bg-accent-blue hover:bg-[#0E6B3A] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center relative z-10">
                                    Start Trial Now <FiArrowRight className="ml-2" />
                                </button>
                            </div> */}

                            <div className="bg-cyber-800 p-8 rounded-3xl border border-cyber-700">
                                <h3 className="text-xl font-bold text-white mb-6">Related Courses</h3>
                                <ul className="space-y-4">
                                    <li><a href="#" className="flex items-center text-slate-300 hover:text-accent-blue transition-colors"><FiArrowRight className="mr-3 text-accent-cyan" /> Cloud Security Architecture</a></li>
                                    <li><a href="#" className="flex items-center text-slate-300 hover:text-accent-blue transition-colors"><FiArrowRight className="mr-3 text-accent-cyan" /> Incident Response Masterclass</a></li>
                                    <li><a href="#" className="flex items-center text-slate-300 hover:text-accent-blue transition-colors"><FiArrowRight className="mr-3 text-accent-cyan" /> Threat Intel Fundamentals</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default ServiceDetails;
