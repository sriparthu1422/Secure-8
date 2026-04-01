import LayoutContainer from '../components/LayoutContainer';
import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import WhyChoose from '../components/WhyChoose';
import CTA from '../components/CTA';
import TestimonialSlider from '../components/TestimonialSlider';
import { FeatureCard, ServiceCard, CaseStudyCard, BlogCard } from '../components/Cards';
import { FaBug, FaFingerprint } from 'react-icons/fa';
import { FiTarget, FiLock, FiAlertTriangle, FiWifi, FiCloud, FiDatabase, FiUserCheck, FiActivity, FiServer, FiShield, FiUser, FiCheckCircle, FiBook, FiMonitor, FiAward, FiHash, FiCode, FiSmartphone } from 'react-icons/fi';

const Home = () => {
    return (
        <div className="flex flex-col w-full overflow-x-hidden">
            <Hero />

            {/* Career Growth Section */}
            <section className="py-12 sm:py-20 lg:py-28 bg-cyber-900 border-t border-cyber-800 relative">
                <LayoutContainer className="relative z-10">
                    <SectionTitle
                        title="Accelerated Career Growth"
                        subtitle="Real Cybersecurity Skills That Get You Hired"
                        mainTitle="Learn directly from industry experts, work on real-world labs, and gain the practical experience companies actually look for."
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mt-10 max-w-7xl mx-auto">
                        <FeatureCard
                            icon={FiBook}
                            title="Industry Experts"
                            description="Learn from cybersecurity professionals actively working in penetration testing, SOC operations, and identity security — not just trainers, but real practitioners."
                        />
                        <FeatureCard
                            icon={FiMonitor}
                            title="Hands-on Projects"
                            description="Work on real-world labs like DVWA, JuiceShop, and bWAPP. Practice identifying and exploiting vulnerabilities using industry-standard tools."
                        />
                        <FeatureCard
                            icon={FiAward}
                            title="Career Support"
                            description="We don’t stop at training. Get resume building, mock interviews, and placement guidance to help you confidently enter the cybersecurity industry."
                        />
                        <FeatureCard
                            icon={FiTarget}
                            title="Interactive Cyber Labs"
                            description="Train in simulated environments that replicate real cyber attacks. Learn how to think like a hacker and defend like a professional."
                        />
                        <FeatureCard
                            icon={FiUserCheck}
                            title="Live Expert Mentorship"
                            description="Get direct guidance from mentors who help you understand concepts deeply, solve real problems, and stay on track."
                        />
                        <FeatureCard
                            icon={FiActivity}
                            title="Security Career Assessment"
                            description="Understand where you stand and what to improve. Our structured guidance helps you move from beginner to job-ready with clarity."
                        />
                    </div>
                </LayoutContainer>
            </section>

            {/* Training Programs Section */}
            <section className="py-12 sm:py-20 lg:py-28 bg-cyber-950 relative border-t border-cyber-800/50">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -ml-40 opacity-50"></div>
                <LayoutContainer className="relative z-10">
                    <SectionTitle
                        title="Comprehensive Training"
                        subtitle="Choose Your Path in Cybersecurity"
                        mainTitle="From foundational skills to advanced specialization, our programs are designed to help you learn, practice, and become job-ready."
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mt-10">
                        <ServiceCard icon={FiHash} title="Information Security" description={<><strong className="block mb-2 text-slate-200">Build a strong security foundation.</strong>Learn how organizations protect systems, networks, and data using industry best practices.</>} link="/services/network" />
                        <ServiceCard icon={FaBug} title="Penetration Testing" description={<><strong className="block mb-2 text-slate-200">Find vulnerabilities before attackers do.</strong>Understand the full VAPT lifecycle through real lab environments and live simulations.</>} link="/services/cloud" />
                        <ServiceCard icon={FiCode} title="API Security Testing" description={<><strong className="block mb-2 text-slate-200">Secure modern interfaces.</strong>Detect flaws in machine-to-machine communications. Master IDOR, BOLA, and other top API risks.</>} link="/services/encryption" />
                        <ServiceCard icon={FiCloud} title="Cloud Security" description={<><strong className="block mb-2 text-slate-200">Protect the modern stack.</strong>Secure AWS, Azure, and GCP environments from misconfigurations using practical training.</>} link="/services/identity" />
                        <ServiceCard icon={FaFingerprint} title="Identity & Access (IAM)" description={<><strong className="block mb-2 text-slate-200">The first line of defense.</strong>Gain hands-on experience with tools like Okta and SailPoint while learning real enterprise use cases.</>} link="/services/monitoring" />
                        <ServiceCard icon={FiBook} title="Career Accelerator" description={<><strong className="block mb-2 text-slate-200">Job-Ready Training.</strong>Resume building, mock interviews, and placement guidance to help you start your career.</>} link="/services/backup" />
                        <ServiceCard icon={FiSmartphone} title="AppSec (Web & Mobile)" description={<><strong className="block mb-2 text-slate-200">Secure the experience.</strong>Learn to identify vulnerabilities like XSS and CSRF in web and mobile applications.</>} link="/services/mobile" />
                    </div>
                </LayoutContainer>
            </section>

            {/* Interactive Experience Section */}
            <WhyChoose />

            <TestimonialSlider />
            
            <section className="bg-cyber-950">
                <CTA />
            </section>

            {/* Insights Section */}
            <section className="py-12 sm:py-20 lg:py-28 bg-cyber-900 border-t border-cyber-800 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none opacity-30"></div>
                <LayoutContainer className="relative z-10">
                    <SectionTitle title="Academy Insights" subtitle="Latest Educational Resources" center />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 max-w-7xl mx-auto">
                        <BlogCard
                            category="Career Advice"
                            title="How to Prepare for Your First Cybersecurity Interview"
                            author="Dr. Emily Chen"
                            date="Oct 15, 2024"
                            image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                        />
                        <BlogCard
                            category="Information Security"
                            title="Top Security Concepts Every Beginner Should Learn"
                            author="Marcus Johnson"
                            date="Oct 02, 2024"
                            image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
                        />
                        <BlogCard
                            category="Training"
                            title="Balancing a Full-Time Job While Learning Ethical Hacking"
                            author="Sarah Jenkins"
                            date="Sep 28, 2024"
                            image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
                        />
                    </div>
                </LayoutContainer>
            </section>
        </div>
    );
};

export default Home;
