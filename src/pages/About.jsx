import React from 'react';
import LayoutContainer from '../components/LayoutContainer';
import SectionTitle from '../components/SectionTitle';
// import Stats from '../components/Stats';
import { FiCheckCircle, FiShield } from 'react-icons/fi';

const TeamMember = ({ name, role, image }) => (
    <div className="group text-center flex flex-col items-center">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-4 sm:mb-6 rounded-3xl overflow-hidden border-2 border-cyber-700 group-hover:border-accent-cyan transition-all duration-300 shadow-xl shadow-black/50">
            <div className="absolute inset-0 bg-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <h4 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-accent-cyan transition-colors">{name}</h4>
        <p className="text-xs sm:text-sm text-slate-400 font-medium group-hover:text-slate-300 transition-colors uppercase tracking-wider">{role}</p>
    </div>
);

const About = () => {
    return (
        <div className="flex flex-col w-full overflow-x-hidden">
            {/* Hero Banner */}
            <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-32 lg:pb-40 bg-cyber-950 overflow-hidden border-b border-cyber-800">
                <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none"></div>
                <LayoutContainer className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                            Build Real Cybersecurity Skills That Power Your Career
                            <span className="block mt-4 text-gradient text-2xl sm:text-4xl lg:text-5xl">
                                Cybersecurity Training That Gets You Job-Ready
                            </span>
                        </h1>
                        <p className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            At Secure8 Technology Services, we go beyond theory.
                            Our programs are designed to give you hands-on experience in ethical hacking, penetration testing, and cloud security — so you can confidently step into real-world cybersecurity roles.
                        </p>
                    </div>
                </LayoutContainer>
            </section>

            {/* Mission & Story */}
            <section className="py-12 sm:py-20 lg:py-28 bg-cyber-900 border-b border-cyber-800 relative">
                <LayoutContainer>
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                        {/* Image Block */}
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <div className="relative px-4 sm:px-0">
                                <div className="aspect-[4/3] sm:aspect-video lg:aspect-square w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-cyber-700 shadow-2xl relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-cyber-950/80 via-transparent to-transparent z-10"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
                                        alt="Cyber Operations Center"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Floating badge - hidden on very small screens to avoid overflow */}
                                <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-8 z-20 bg-cyber-800/90 border border-cyber-700 p-4 sm:p-6 rounded-2xl shadow-2xl backdrop-blur-md hidden sm:flex items-center space-x-4 max-w-[240px] sm:max-w-none">
                                    <FiShield className="w-8 h-8 sm:w-12 sm:h-12 text-accent-cyan flex-shrink-0" />
                                    <div>
                                        <div className="text-xl sm:text-2xl font-bold text-white leading-none mb-1">10+ Years</div>
                                        <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-mono">Expert Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Block */}
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <SectionTitle
                                title="The Secure8 Technology Services Story"
                                subtitle="Transforming Careers Through Practical Training"
                            />
                            <div className="space-y-4 sm:space-y-6">
                                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                                    Founded in 2023, Secure8 Technology Services was built with a clear mission — to bridge the gap between academic learning and real-world cybersecurity demands.
                                </p>
                                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                                    We saw a problem: many learners understand theory, but struggle when it comes to practical application. That’s why our programs focus on hands-on labs, real attack simulations, and industry-relevant tools.
                                </p>
                                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                                    Whether you're a beginner or a working professional, we help you build the skills needed to confidently step into roles like Penetration Tester, SOC Analyst, or Security Engineer.
                                </p>
                                <p className="text-accent-cyan text-sm sm:text-base md:text-lg font-bold">
                                    At Secure8, learning isn’t just about knowledge - it’s about becoming job-ready.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
                                {[
                                    'Expert-Led Training',
                                    'Live Attack Simulations',
                                    'VAPT & OWASP Focused',
                                    'Placement Support'
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-center space-x-3 text-white text-xs sm:text-sm font-medium bg-cyber-800/40 p-3 rounded-xl border border-cyber-700/50 hover:border-accent-blue/30 transition-colors">
                                        <FiCheckCircle className="text-accent-cyan flex-shrink-0 w-4 h-4" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </LayoutContainer>
            </section>

            {/* Leadership Team */}
            <section className="py-12 sm:py-20 lg:py-28 bg-cyber-950">
                <LayoutContainer>
                    <SectionTitle
                        title="Leadership Team"
                        subtitle="Meet the Mentors Shaping Your Future"
                        center
                    />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 sm:gap-8 mt-12 md:mt-16 lg:mt-20">
                        <TeamMember name="Marcus Thorne" role="Chief InfoSec Officer" image="https://i.pravatar.cc/300?img=11" />
                        <TeamMember name="Dr. Elena Rostova" role="Lead Threat Intel" image="https://i.pravatar.cc/300?img=32" />
                        <TeamMember name="James Chen" role="Head of PenTesting" image="https://i.pravatar.cc/300?img=12" />
                        <TeamMember name="Sarah Jenkins" role="Director of Ops" image="https://i.pravatar.cc/300?img=47" />
                    </div>
                </LayoutContainer>
            </section>

        </div>
    );
};

export default About;
