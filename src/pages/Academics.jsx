import React from 'react';
import LayoutContainer from '../components/LayoutContainer';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import { ServiceCard } from '../components/Cards';
import { FiShield, FiDatabase, FiSmartphone, FiCloud, FiUserCheck, FiTarget } from 'react-icons/fi';

const Academics = () => {
    return (
        <div className="flex flex-col w-full overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-32 lg:pb-40 bg-cyber-950 border-b border-cyber-800 overflow-hidden">
                {/* Decorative background blur - adjusted to be responsive and avoid overflow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-accent-blue/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

                <LayoutContainer className="relative z-10 text-center">
                    <SectionTitle
                        title="Building the Next Generation of Cybersecurity Experts"
                        subtitle="Secure8 Cybersecurity Academy"
                        center
                    />
                    <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed px-4">
                        At Secure8 Technology Services, we don’t just teach cybersecurity - we prepare you for real-world challenges. Through hands-on labs, expert mentorship, and industry-focused training, we help beginners, students, and professionals build the skills needed to succeed in today’s security landscape.
                    </p>
                </LayoutContainer>
            </section>

            {/* Services Grid Section */}
            <section className="py-12 sm:py-20 lg:py-28 bg-cyber-900 border-b border-cyber-800 relative">
                <LayoutContainer>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        <ServiceCard
                            icon={FiShield}
                            title="Web Application Pentesting"
                            description="Web Application Pentesting focuses on identifying vulnerabilities in web applications using 
real-world attack techniques. This course is ideal for learners who want to master OWASP 
Top 10 and web security testing."
                            link="/academics/web-pentesting"
                        />
                        <ServiceCard
                            icon={FiDatabase}
                            title="API Security Testing"
                            description="Master modern API attacks like Broken Authentication, BOLA, and Mass Assignment. Gain hands-on experience using tools like Postman and Burp Suite."
                            link="/academics/api-security"
                        />
                        <ServiceCard
                            icon={FiSmartphone}
                            title="Mobile Security"
                            description="Learn to test Android and iOS apps using real-world techniques. Cover static & dynamic analysis, reverse engineering, and mobile data security."
                            link="/academics/mobile-security"
                        />
                        <ServiceCard
                            icon={FiCloud}
                            title="Cloud Security"
                            description="Understand AWS, Azure, and GCP security risks. Learn to identify misconfigurations, privilege escalation, and cloud-based attack paths."
                            link="/academics/cloud-security"
                        />
                        <ServiceCard
                            icon={FiUserCheck}
                            title="Identity & Access Management"
                            description="Master authentication and access control systems like SSO, RBAC, OAuth2, and SAML. Learn how identity-based attacks happen and how to prevent them."
                            link="/academics/iam"
                        />
                        <ServiceCard
                            icon={FiTarget}
                            title="Career Prep + CTFs"
                            description="Prepare for real cybersecurity roles with resume building, mock interviews, and hands-on CTF challenges designed to sharpen your practical skills."
                            link="/academics/career-prep"
                            ctaText="Get Started"
                        />
                    </div>
                </LayoutContainer>
            </section>

            <CTA />
        </div>
    );
};

export default Academics;
