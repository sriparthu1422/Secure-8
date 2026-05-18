import React from 'react';
import { useParams, Link } from 'react-router-dom';
import LayoutContainer from '../components/LayoutContainer';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import { FiCheckCircle, FiShield, FiArrowRight, FiSmartphone, FiDatabase, FiCloud, FiUserCheck, FiTarget } from 'react-icons/fi';

const academyData = {
    'web-pentesting': {
        title: "Web Application Pentesting",
        suffix: "Bootcamp",
        subtitle: "Featured Academy",
        heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        description: "Web Application Pentesting focuses on identifying vulnerabilities in web applications using real-world attack techniques. This course is ideal for learners who want to master OWASP Top 10 and web security testing.",
        curriculum: "You will learn how attackers exploit web apps and how to prevent attacks using tools like Burp Suite. You will also understand real-world attack scenarios through hands-on labs.",
        features: [
            'OWASP Top 10 Vulnerabilities',
            'SQL Injection, XSS, CSRF',
            'Authentication & Session Management',
            'Web Security Testing using Burp Suite'
        ],
        benefits: "Web Security Tester, Ethical Hacker, Bug Bounty Hunter",
        icon: FiShield
    },
    'info-security': {
        title: "Information Security",
        suffix: "Management",
        subtitle: "Core Program",
        heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
        description: "Information Security focuses on protecting the confidentiality, integrity, and availability of organization data. This program covers the fundamentals of risk management and compliance.",
        curriculum: "Explore security frameworks like ISO 27001, NIST, and SOC2. Learn to implement security controls, conduct risk assessments, and manage organizational security posture.",
        features: [
            'Security Frameworks (ISO 27001)',
            'Risk Management Strategies',
            'Compliance & Auditing',
            'Security Policy Development'
        ],
        benefits: "Information Security Officer, Compliance Manager, Security Auditor",
        icon: FiShield
    },
    'vapt': {
        title: "Penetration Testing",
        suffix: "VAPT",
        subtitle: "Expert Track",
        heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
        description: "Vulnerability Assessment and Penetration Testing (VAPT) is a systematic process of identifying and fixing security loopholes. Master the art of ethical hacking.",
        curriculum: "Learn the methodology of network, web, and infrastructure pentesting. Master reconnaissance, scanning, exploitation, and post-exploitation techniques.",
        features: [
            'Network Pentesting',
            'Infrastructure Assessment',
            'Exploit Development Basics',
            'Professional Reporting'
        ],
        benefits: "Penetration Tester, Security Researcher, VAPT Analyst",
        icon: FiShield
    },
    'api-security': {
        title: "API Security Testing",
        suffix: "Bootcamp",
        subtitle: "Advanced Program",
        heroImage: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=1200&q=80",
        description: "Master modern API attacks like Broken Authentication, BOLA, and Mass Assignment. Gain hands-on experience using tools like Postman and Burp Suite.",
        curriculum: "Deep dive into RESTful and GraphQL API security. Learn to identify logic flaws and authorization issues that traditional scanners miss.",
        features: [
            'REST & GraphQL Security',
            'BOLA & BIPA Vulnerabilities',
            'JWT & OAuth2 Security',
            'API Fuzzing & Manual Testing'
        ],
        benefits: "API Security Specialist, Backend Security Engineer",
        icon: FiDatabase
    },
    'mobile-security': {
        title: "Mobile Security",
        suffix: "Bootcamp",
        subtitle: "Certification Course",
        heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
        description: "Learn to test Android and iOS apps using real-world techniques. Cover static & dynamic analysis, reverse engineering, and mobile data security.",
        curriculum: "Explore the internal architecture of mobile operating systems and how to intercept traffic, bypass root detections, and analyze binary code.",
        features: [
            'Android & iOS Internals',
            'Static & Dynamic Analysis',
            'Reverse Engineering Apps',
            'Mobile Traffic Interception'
        ],
        benefits: "Mobile App Pentester, Application Security Specialist",
        icon: FiSmartphone
    },
    'cloud-security': {
        title: "Cloud Security",
        suffix: "Bootcamp",
        subtitle: "Enterprise Program",
        heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        description: "Understand AWS, Azure, and GCP security risks. Learn to identify misconfigurations, privilege escalation, and cloud-based attack paths.",
        curriculum: "Master the shared responsibility model. Learn to secure containers, serverless functions, and complex cloud networking architectures.",
        features: [
            'AWS, Azure, & GCP Basics',
            'IAM & Identity Security',
            'Container & Kubernetes Security',
            'Serverless Attack Surfaces'
        ],
        benefits: "Cloud Security Architect, DevSecOps Engineer",
        icon: FiCloud
    },
    'iam': {
        title: "Identity & Access Management",
        suffix: "Bootcamp",
        subtitle: "Professional Series",
        heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
        description: "Master authentication and access control systems like SSO, RBAC, OAuth2, and SAML. Learn how identity-based attacks happen and how to prevent them.",
        curriculum: "Learn to implement secure identity solutions for large scale organizations using industry-standard tools like Okta and SailPoint.",
        features: [
            'SSO & Multi-Factor Auth',
            'OAuth2 & OpenID Connect',
            'Privileged Access Management',
            'Identity Governance'
        ],
        benefits: "IAM Engineer, Security Consultant",
        icon: FiUserCheck
    },
    'career-prep': {
        title: "Career Prep + CTFs",
        suffix: "Program",
        subtitle: "Career Accelerator",
        heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        description: "Prepare for real cybersecurity roles with resume building, mock interviews, and hands-on CTF challenges designed to sharpen your practical skills.",
        curriculum: "Beyond technical skills, we help you master the interview process and showcase your skills through a professional security portfolio.",
        features: [
            'Resume Building & Review',
            'Mock Technical Interviews',
            'Guided CTF Challenges',
            'Cybersecurity Jobs Roadmap'
        ],
        benefits: "Job-Ready Candidate, SOC Analyst, Security Consultant",
        icon: FiTarget
    }
};

const ServiceDetails = () => {
    const { id } = useParams();
    const data = academyData[id];
    const basePath = window.location.pathname.startsWith('/services') ? '/services' : '/academics';

    if (!data) {
        return (
            <div className="pt-32 pb-20 text-center">
                <LayoutContainer>
                    <h2 className="text-3xl text-white font-bold mb-6">Program Not Found</h2>
                    <p className="text-slate-400 mb-8">The program you are looking for does not exist or has been moved.</p>
                    <Link to={basePath} className="text-accent-cyan hover:underline flex items-center justify-center">
                        <FiArrowRight className="mr-2 rotate-180" /> Back to {basePath === '/services' ? 'Services' : 'Academics'}
                    </Link>
                </LayoutContainer>
            </div>
        );
    }

    const Icon = data.icon;

    return (
        <div>
            {/* Hero */}
            <section className="py-12 sm:py-16 lg:py-24 bg-cyber-950 relative border-b border-cyber-800 overflow-hidden">
                <div 
                    className="absolute inset-0 lg:left-auto lg:right-0 lg:w-1/2 h-full bg-cover bg-center opacity-30 lg:opacity-60"
                    style={{ backgroundImage: `url(${data.heroImage})` }}
                ></div>
                <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-1/2 h-full bg-gradient-to-t lg:bg-gradient-to-l from-cyber-950 via-cyber-950/50 to-transparent"></div>

                <LayoutContainer className="relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center space-x-3 mb-6">
                            <Icon className="w-8 h-8 text-accent-cyan" />
                            <span className="text-accent-cyan font-bold tracking-widest uppercase text-sm">{data.subtitle}</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            {data.title} <span className="text-gradient">{data.suffix || 'Bootcamp'}</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                            {data.description}
                        </p>
                        <button className="bg-accent-blue hover:bg-[#0E6B3A] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(57, 255, 136,0.4)]">
                            Enroll in Academy
                        </button>
                    </div>
                </LayoutContainer>
            </section>

            {/* Main Content */}
            <section className="py-12 sm:py-16 lg:py-20 bg-cyber-900 border-b border-cyber-800">
                <LayoutContainer className="max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Left Column (Content) */}
                        <div className="lg:w-2/3">
                            <SectionTitle title="Comprehensive Curriculum" />
                            <div className="prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-headings:text-white text-sm sm:text-base lg:text-lg">
                                <p>
                                    {data.curriculum}
                                </p>

                                <h3 className="text-2xl font-bold mt-12 mb-6">Overview of Features</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-12 not-prose">
                                    {data.features.map((feature, idx) => (
                                        <div key={idx} className="bg-cyber-800 border border-cyber-700 p-6 rounded-2xl flex items-start space-x-4">
                                            <FiCheckCircle className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-0.5" />
                                            <span className="text-white font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold mb-6">Career Benefits</h3>
                                <p>
                                    {data.benefits}
                                </p>
                            </div>
                        </div>

                        {/* Right Column (Sidebar / CTA) */}
                        <div className="lg:w-1/3 space-y-8">
                            <div className="bg-cyber-800 p-8 rounded-3xl border border-cyber-700">
                                <h3 className="text-xl font-bold text-white mb-6">Related Programs</h3>
                                <ul className="space-y-4">
                                    {Object.keys(academyData).filter(key => key !== id).slice(0, 3).map(key => (
                                        <li key={key}>
                                            <Link to={`${basePath}/${key}`} className="flex items-center text-slate-300 hover:text-accent-blue transition-colors text-sm sm:text-base lg:text-lg">
                                                <FiArrowRight className="mr-3 text-accent-cyan" /> {academyData[key].title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </LayoutContainer>
            </section>

            <CTA />
        </div>
    );
};

export default ServiceDetails;
