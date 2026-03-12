import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import { ServiceCard } from '../components/Cards';
import { FiWifi, FiCloud, FiDatabase, FiUserCheck, FiActivity, FiServer, FiLock, FiCrosshair } from 'react-icons/fi';

const Services = () => {
    return (
        <div>
            <section className="pt-32 pb-20 bg-cyber-950 relative border-b border-cyber-800 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <SectionTitle
                        title="Premium Cybersecurity Academies"
                        subtitle="Our Programs"
                        center
                    />
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
                        Explore our comprehensive suite of cybersecurity academies designed to empower you with industry-leading skills in ethical hacking, cloud security, penetration testing, and threat intelligence.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-cyber-900 border-b border-cyber-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ServiceCard icon={FiWifi} title="Ethical Hacking Bootcamp" description="Learn penetration testing, vulnerability assessment, and exploitation techniques based on OWASP Top 10." link="/services/network" />
                        <ServiceCard icon={FiCloud} title="Cloud Security Architecture" description="Secure cloud infrastructure across AWS, Azure, and Google Cloud environments." link="/services/cloud" />
                        <ServiceCard icon={FiDatabase} title="Threat Intelligence & Analysis" description="Identify and analyze cyber threats to protect modern digital systems." link="/services/encryption" />
                        <ServiceCard icon={FiUserCheck} title="Cyber Defense Bootcamp" description="Beginner-friendly training focused on SOC operations and cyber defense fundamentals." link="/services/identity" />

                        <ServiceCard icon={FiActivity} title="Incident Response Masterclass" description="Learn breach investigation, digital forensics, and real-world incident response." link="/services/monitoring" />
                        <ServiceCard icon={FiServer} title="DevSecOps Engineering" description="Integrate security into modern development pipelines and cloud infrastructure." link="/services/backup" />
                        <ServiceCard icon={FiLock} title="Malware Analysis" description="Understand malicious software behavior and cybersecurity detection techniques." link="/services/endpoint" />
                        <ServiceCard icon={FiCrosshair} title="Advanced Penetration Testing" description="Perform advanced security testing and professional vulnerability reporting." link="/services/pentesting" />
                    </div>
                </div>
            </section>

            <CTA />
        </div >
    );
};

export default Services;
