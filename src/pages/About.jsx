import React from 'react';
import SectionTitle from '../components/SectionTitle';
// import Stats from '../components/Stats';
import { FiCheckCircle, FiShield, FiUsers, FiAward } from 'react-icons/fi';

const TeamMember = ({ name, role, image }) => (
    <div className="group text-center">
        <div className="relative w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden border-2 border-cyber-700 hover:border-accent-blue transition-colors duration-300">
            <div className="absolute inset-0 bg-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-accent-blue transition-colors">{name}</h4>
        <p className="text-accent-cyan font-medium">{role}</p>
    </div>
);

const About = () => {
    return (
        <div>
            {/* Hero Banner */}
            <section className="pt-32 pb-20 bg-cyber-950 relative overflow-hidden border-b border-cyber-800">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-blue/5 blur-[100px] rounded-full"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                        Pioneering the Future of <span className="text-gradient">Cybersecurity Education</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Secure8 Technology Services is dedicated to preparing the next generation of cybersecurity professionals through practical and industry-focused training.
                    </p>
                </div>
            </section>

            {/* Mission & Story */}
            <section className="py-24 bg-cyber-900 border-b border-cyber-800">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="w-full h-[500px] rounded-3xl overflow-hidden border border-cyber-700 shadow-[0_0_30px_rgba(57, 255, 136,0.1)]">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-cyber-950/80 to-transparent z-10"></div>
                                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" alt="Cyber Operations Center" className="w-full h-full object-cover" />
                                </div>
                                {/* Floating badge */}
                                <div className="absolute -bottom-8 -right-8 bg-cyber-800 border border-cyber-700 p-6 rounded-2xl shadow-xl backdrop-blur-md hidden md:block">
                                    <div className="flex items-center space-x-4">
                                        <FiShield className="w-12 h-12 text-accent-blue" />
                                        <div>
                                            <div className="text-2xl font-bold text-white">10+ Years</div>
                                            <div className="text-sm text-slate-400 uppercase tracking-wide">Empowering Students</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <SectionTitle title="Our Mission is to Accelerate Your Career Transformation" subtitle="The Secure8 Academy Story" />
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                Founded in 2023, Secure8 Technology Services focuses on cybersecurity training and Identity & Access Management solutions.
                            </p>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                Our programs bridge the gap between academic knowledge and real-world cybersecurity demands through hands-on labs, real attack simulations, and expert mentorship.
                            </p>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                We help learners develop practical skills required to protect digital systems and succeed in cybersecurity careers.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Expert Industry Instructors', 'Hands-On Curriculum', '24/7 Learning Support', 'Dedicated Placement Team'].map((feature, idx) => (
                                    <div key={idx} className="flex items-center space-x-3 text-white font-medium bg-cyber-800/50 p-3 rounded-lg border border-cyber-700">
                                        <FiCheckCircle className="text-accent-cyan flex-shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Stats /> */}

            {/* Leadership Team */}
            <section className="py-24 bg-cyber-950">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Meet the Mentors Shaping Your Future" subtitle="Leadership Team" center />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
                        <TeamMember name="Marcus Thorne" role="Chief Information Security Officer" image="https://i.pravatar.cc/300?img=11" />
                        <TeamMember name="Dr. Elena Rostova" role="Lead Instructor, Threat Intelligence" image="https://i.pravatar.cc/300?img=32" />
                        <TeamMember name="James Chen" role="Head of Penetration Testing" image="https://i.pravatar.cc/300?img=12" />
                        <TeamMember name="Sarah Jenkins" role="Director of Cyber Operations" image="https://i.pravatar.cc/300?img=47" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
