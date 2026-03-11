import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const CaseStudyDetails = () => {
    return (
        <div>
            {/* Hero */}
            <section className="pt-32 pb-24 bg-cyber-950 relative border-b border-cyber-800 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[600px] bg-[url('https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1600&q=80')] bg-cover bg-center opacity-20 filter grayscale"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-950 via-cyber-950/80 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-4 py-1.5 bg-accent-blue/20 text-accent-cyan rounded-full text-sm font-bold mb-6 border border-accent-blue/30 box-glow">CYBER PLACEMENTS</div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            From IT Helpdesk to Threat Intelligence
                        </h1>
                        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                            How a former IT helpdesk professional transitioned into a Security Engineer role at a top enterprise tech company within 8 months.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-cyber-900 border-b border-cyber-800">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-headings:text-white">
                        <h2 className="text-3xl font-bold mb-6">Student Background</h2>
                        <p className="mb-8">
                            Sarah had a successful career in IT support, but she was looking for a more specialized security challenge and higher earning potential. With no formal cybersecurity experience, she decided to join Secure8 Academy's immersive Ethical Hacking Bootcamp to pivot her career.
                        </p>

                        <h2 className="text-3xl font-bold mb-6 mt-12">The Challenges</h2>
                        <ul className="mb-8 list-none pl-0 space-y-4">
                            <li className="flex items-start">
                                <FiCheckCircle className="text-red-500 mr-3 mt-1.5 flex-shrink-0" />
                                <span><strong>Lack of Security Foundation:</strong> Transitioning from IT meant learning offensive security, network analysis, and vulnerability exploitation from the ground up.</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="text-red-500 mr-3 mt-1.5 flex-shrink-0" />
                                <span><strong>Intensive Time Management:</strong> As a full-time IT specialist, dedicating time to complete intensive hacking labs required strict discipline.</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="text-red-500 mr-3 mt-1.5 flex-shrink-0" />
                                <span><strong>Practical Experience:</strong> Without professional SOC experience, building a lab portfolio that stood out to cyber recruiters was critical but difficult to achieve alone.</span>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-bold mb-6 mt-12">The Academy Transformation</h2>
                        <p className="mb-6">
                            Through Secure8 Academy's rigorous hands-on curriculum, Sarah mastered penetration testing, SIEM tools, and threat hunting. She utilized our 24/7 mentorship access to overcome technical roadblocks during challenging late-night ethical hacking labs.
                        </p>
                        <p className="mb-8">
                            To build her portfolio, she collaborated with peers in simulated breach scenarios, creating comprehensive penetration testing reports that elegantly demonstrated her defensive and offensive capabilities to potential employers.
                        </p>

                        <div className="my-12 p-8 bg-cyber-800 border-l-4 border-accent-blue rounded-r-2xl">
                            <h3 className="text-xl font-bold text-white mb-4">"Secure8 Academy didn't just teach me hacking theory; they gave me the hands-on confidence and lab portfolio to completely transform my life."</h3>
                            <p className="text-accent-cyan font-semibold m-0">— Sarah J., Security Engineer @ Google</p>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 mt-12">The Results</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                            <div className="bg-cyber-950 p-6 rounded-2xl border border-cyber-700 text-center">
                                <div className="text-4xl font-extrabold text-accent-blue mb-2">8</div>
                                <div className="text-slate-400 text-sm uppercase tracking-wide">Months Transition</div>
                            </div>
                            <div className="bg-cyber-950 p-6 rounded-2xl border border-cyber-700 text-center">
                                <div className="text-4xl font-extrabold text-accent-cyan mb-2">3x</div>
                                <div className="text-slate-400 text-sm uppercase tracking-wide">Salary Increase</div>
                            </div>
                            <div className="bg-cyber-950 p-6 rounded-2xl border border-cyber-700 text-center">
                                <div className="text-4xl font-extrabold text-accent-purple mb-2">Top 1%</div>
                                <div className="text-slate-400 text-sm uppercase tracking-wide">Technical Assessment</div>
                            </div>
                        </div>
                        <p>
                            By partnering with our cyber career success team, Sarah successfully navigated the difficult technical interview process and secured her dream role as a Security Engineer at Google.
                        </p>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default CaseStudyDetails;
