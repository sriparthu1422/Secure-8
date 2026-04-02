import React from 'react';
import LayoutContainer from '../components/LayoutContainer';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import { ServiceCard } from '../components/Cards';
import { FiShield, FiCrosshair, FiDatabase, FiCloud, FiUserCheck, FiTarget, FiSmartphone, FiHexagon, FiBox, FiTriangle, FiGlobe, FiCpu } from 'react-icons/fi';

const Services = () => {
    return (
        <div className="flex flex-col w-full overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-32 lg:pb-40 bg-cyber-950 border-b border-cyber-800 overflow-hidden">
                {/* Decorative background blur - adjusted to be responsive and avoid overflow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-accent-blue/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
                
                <LayoutContainer className="relative z-10 text-center">
                    <SectionTitle
                        title="Comprehensive Cybersecurity Training Programs"
                        subtitle="Explore Our Cybersecurity Programs"
                        center
                    />
                    <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
                        At Secure8 Technology Services, we offer industry-focused cybersecurity programs designed to help you build real-world skills. From Ethical Hacking and Penetration Testing to Cloud Security and IAM, our training combines hands-on labs, expert mentorship, and practical learning — so you’re not just learning, but becoming job-ready.
                    </p>
                </LayoutContainer>
            </section>

            {/* Services Grid Section */}
            <section className="py-12 sm:py-20 lg:py-28 bg-cyber-900 border-b border-cyber-800 relative">
                <LayoutContainer>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        <ServiceCard
                            icon={FiShield}
                            title="Information Security"
                            description="Learn how organizations protect systems, networks, and data. Build a strong foundation in security principles, risk management, and compliance practices."
                            link="/services/info-security"
                        />
                        <ServiceCard
                            icon={FiCrosshair}
                            title="Penetration Testing"
                            description="Learn how to identify and exploit vulnerabilities in real-world environments. Master the full VAPT lifecycle using tools like Nmap, Burp Suite, and SQLMap."
                            link="/services/vapt"
                        />
                        <ServiceCard
                            icon={FiDatabase}
                            title="API Security Testing"
                            description="Understand how APIs are attacked and secured. Learn to test vulnerabilities like broken authentication, IDOR, and injection flaws."
                            link="/services/api-security"
                        />
                        <ServiceCard
                            icon={FiCloud}
                            title="Cloud Security"
                            description="Learn how to secure AWS, Azure, and cloud-based applications. Identify misconfigurations, access risks, and real-world cloud vulnerabilities."
                            link="/services/cloud-security"
                        />
                        <ServiceCard
                            icon={FiUserCheck}
                            title="Identity & Access Management (IAM)"
                            description="Learn how organizations manage user identities and access. Get hands-on experience with tools like Okta and SailPoint."
                            link="/services/iam"
                        />
                        <ServiceCard
                            icon={FiTarget}
                            title="Security Awareness & Career Support"
                            description="Get resume building, mock interviews, and placement guidance to help you confidently start your cybersecurity career."
                            link="/services/career-prep"
                        />
                        <ServiceCard
                            icon={FiSmartphone}
                            title="Application Security (Web & Mobile)"
                            description="Learn how to identify vulnerabilities in web and mobile applications, including XSS, CSRF, and insecure data handling."
                            link="/services/mobile-security"
                        />
                    </div>
                </LayoutContainer>
            </section>

            {/* Our Customers Section */}
            <section className="py-12 sm:py-20 lg:py-28 bg-cyber-950 border-b border-cyber-800 relative overflow-hidden">
                {/* Decorative background blur */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-video bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

                <LayoutContainer className="relative z-10 text-center">
                    <SectionTitle
                        title="Trusted by Organizations"
                        subtitle="Our Customers"
                        center
                    />
                    <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 sm:mb-16 px-4">
                        We are trusted by companies and professionals who rely on our cybersecurity training and expertise.
                    </p>

                    {/* Logos Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-8 sm:gap-10 lg:gap-12 opacity-60">
                        {/* Logo 1 */}
                        <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-slate-400 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer group">
                            <FiBox className="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-accent-cyan transition-colors" />
                            <span className="text-base sm:text-xl font-bold tracking-wider font-mono">ACME INC</span>
                        </div>
                        {/* Logo 2 */}
                        <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-slate-400 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer group">
                            <FiHexagon className="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-accent-blue transition-colors" />
                            <span className="text-base sm:text-xl font-bold tracking-wider font-mono">NEXUS</span>
                        </div>
                        {/* Logo 3 */}
                        <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-slate-400 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer group">
                            <FiGlobe className="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-accent-cyan transition-colors" />
                            <span className="text-base sm:text-xl font-bold tracking-wider font-mono">GLOBAL</span>
                        </div>
                        {/* Logo 4 */}
                        <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-slate-400 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer group">
                            <FiCpu className="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-accent-blue transition-colors" />
                            <span className="text-base sm:text-xl font-bold tracking-wider font-mono">SYNAPSE</span>
                        </div>
                        {/* Logo 5 */}
                        <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-slate-400 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer group md:col-span-3 lg:col-span-1">
                            <FiTriangle className="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-accent-cyan transition-colors" />
                            <span className="text-base sm:text-xl font-bold tracking-wider font-mono">APEX</span>
                        </div>
                    </div>
                </LayoutContainer>
            </section>

            <CTA />
        </div>
    );
};

export default Services;
