import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import { ServiceCard } from '../components/Cards';
import { FiShield, FiDatabase, FiSmartphone, FiCloud, FiUserCheck, FiTarget } from 'react-icons/fi';

const Services = () => {
    return (
        <div>
            <section className="pt-22 pb-22 bg-cyber-950 relative border-b border-cyber-800 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <SectionTitle
                        title="Kickstarting a Cyber-Ready Generation"
                        subtitle="Secure8 Academy"
                        center
                    />
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
                        Our mission is to train, upskill, and empower the next wave of cybersecurity professionals — starting now. Whether you’re a beginner or a professional, our courses and mentorship programs are designed to help you grow confidently in the field.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-cyber-900 border-b border-cyber-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={FiShield}
                            title="Web Application Pentesting"
                            description="Learn how hackers break into web apps & how to stop them. Covers OWASP Top 10, Burp Suite, and live labs."
                            link="/services/web-pentesting"
                        />
                        <ServiceCard
                            icon={FiDatabase}
                            title="API Security Testing"
                            description="Master modern API attacks like Broken Auth, BOLA, and Mass Assignment using tools like Postman & Burp Suite."
                            link="/services/api-security"
                        />
                        <ServiceCard
                            icon={FiSmartphone}
                            title="Mobile Security"
                            description="Learn to test Android & iOS apps like a pro. Covers static/dynamic analysis, reverse engineering, and data storage attacks."
                            link="/services/mobile-security"
                        />
                        <ServiceCard
                            icon={FiCloud}
                            title="Cloud Security"
                            description="Understand shared responsibility, misconfigurations, and privilege escalation across AWS, Azure, and GCP with hands-on labs."
                            link="/services/cloud-security"
                        />
                        <ServiceCard
                            icon={FiUserCheck}
                            title="Identity & Access Management"
                            description="Master SSO, RBAC, SAML, OAuth2, and IAM policy attacks. Learn how breaches happen due to broken flows and how to fix them."
                            link="/services/iam"
                        />
                        <ServiceCard
                            icon={FiTarget}
                            title="Career Prep + CTFs"
                            description="Resume building, interview Q&A, and weekend CTF challenges to sharpen real-world skills."
                            link="/services/career-prep"
                        />
                    </div>
                </div>
            </section>

            <CTA />
        </div >
    );
};

export default Services;
