import React from 'react';
import LayoutContainer from '../components/LayoutContainer';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import { ServiceCard } from '../components/Cards';
import { FiShield, FiCrosshair, FiDatabase, FiCloud, FiUserCheck, FiTarget, FiSmartphone, FiHexagon, FiBox, FiTriangle, FiGlobe, FiCpu } from 'react-icons/fi';

const ServicesPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="py-16 md:py-12 sm:py-16 lg:py-20 lg:py-32 bg-cyber-950 relative border-b border-cyber-800 overflow-hidden flex flex-col items-center justify-center text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] min-h-[800px] w-full bg-accent-blue/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
                <LayoutContainer className="relative z-10 text-center flex flex-col items-center justify-center">
                    <SectionTitle
                        title="Comprehensive Cybersecurity Services"
                        subtitle="We provide a wide range of Services"
                        center
                    />
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                        At Secure8, we provide expert-driven services across VAPT, cloud, IAM, and user awareness — helping you stay secure, compliant, and resilient. Explore our specialized cybersecurity and IAM services designed to meet your unique needs.
                    </p>
                </LayoutContainer>
            </section>

            {/* Services Grid Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-cyber-900 border-b border-cyber-800">
                <LayoutContainer>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <ServiceCard 
                            icon={FiShield} 
                            title="Information Security" 
                            description="We protect your digital assets through strategic infosec programs, risk assessments, and compliance-driven security controls." 
                            link="/contact" 
                        />
                        <ServiceCard 
                            icon={FiCrosshair} 
                            title="Penetration Testing" 
                            description="Find weaknesses before hackers do. We simulate real-world cyberattacks on your web and mobile applications to uncover vulnerabilities." 
                            link="/contact" 
                        />
                        <ServiceCard 
                            icon={FiDatabase} 
                            title="API Security Testing" 
                            description="Secure the connections that power your app. We test APIs for hidden flaws like IDOR, broken authentication, and injection risks." 
                            link="/contact" 
                        />
                        <ServiceCard 
                            icon={FiCloud} 
                            title="Cloud Security" 
                            description="Protect your AWS, Azure, or GCP environments. We identify misconfigurations, access issues, and other cloud-specific risks." 
                            link="/contact" 
                        />
                        <ServiceCard 
                            icon={FiUserCheck} 
                            title="Identity & Access Management" 
                            description="Control who has access to what. We help design and secure IAM systems so only the right people access the right resources." 
                            link="/contact" 
                        />
                        <ServiceCard 
                            icon={FiTarget} 
                            title="Security Awareness & Managed Services" 
                            description="Build a security-first culture. From team training to 24/7 managed security support, we help you strengthen internal defenses." 
                            link="/contact" 
                        />
                        <ServiceCard 
                            icon={FiSmartphone} 
                            title="Mobile Application Security" 
                            description="Protect your Android and iOS apps from cyber threats. We uncover vulnerabilities and insecure data handling to ensure trust." 
                            link="/contact" 
                        />
                    </div>
                </LayoutContainer>
            </section>

            {/* Our Customers Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-cyber-950 border-b border-cyber-800 relative overflow-hidden">
                {/* Decorative background blur */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[300px] w-full bg-accent-cyan/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
                
                <LayoutContainer className="relative z-10 text-center">
                    <SectionTitle 
                        title="Trusted by Organizations" 
                        subtitle="Our Customers" 
                        center 
                    />
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-16">
                        We are trusted by companies and professionals who rely on our cybersecurity training and expertise.
                    </p>

                    {/* Logos Grid */}
                    <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 md:gap-12 lg:gap-16 opacity-70">
                        {/* Logo 1 */}
                        <div className="flex items-center space-x-3 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer group text-sm sm:text-base lg:text-lg">
                            <FiBox className="w-8 h-8 group-hover:text-accent-cyan transition-colors" />
                            <span className="text-xl font-bold tracking-wider font-mono">ACME INC</span>
                        </div>
                        {/* Logo 2 */}
                        <div className="flex items-center space-x-3 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer group text-sm sm:text-base lg:text-lg">
                            <FiHexagon className="w-8 h-8 group-hover:text-accent-blue transition-colors" />
                            <span className="text-xl font-bold tracking-wider font-mono">NEXUS</span>
                        </div>
                        {/* Logo 3 */}
                        <div className="flex items-center space-x-3 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer group text-sm sm:text-base lg:text-lg">
                            <FiGlobe className="w-8 h-8 group-hover:text-accent-cyan transition-colors" />
                            <span className="text-xl font-bold tracking-wider font-mono">GLOBAL</span>
                        </div>
                        {/* Logo 4 */}
                        <div className="flex items-center space-x-3 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer group text-sm sm:text-base lg:text-lg">
                            <FiCpu className="w-8 h-8 group-hover:text-accent-blue transition-colors" />
                            <span className="text-xl font-bold tracking-wider font-mono">SYNAPSE</span>
                        </div>
                        {/* Logo 5 */}
                        <div className="flex items-center space-x-3 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer group text-sm sm:text-base lg:text-lg">
                            <FiTriangle className="w-8 h-8 group-hover:text-accent-cyan transition-colors" />
                            <span className="text-xl font-bold tracking-wider font-mono">APEX</span>
                        </div>
                    </div>
                </LayoutContainer>
            </section>

            <CTA />
        </div>
    );
};

export default ServicesPage;
