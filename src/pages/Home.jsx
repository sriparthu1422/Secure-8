import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
// import Stats from '../components/Stats';
import CTA from '../components/CTA';
import TestimonialSlider from '../components/TestimonialSlider';
import { FeatureCard, ServiceCard, CaseStudyCard, BlogCard } from '../components/Cards';
import { FaBug, FaFingerprint } from 'react-icons/fa';
import { FiTarget, FiLock, FiAlertTriangle, FiWifi, FiCloud, FiDatabase, FiUserCheck, FiActivity, FiServer, FiShield, FiUser, FiCheckCircle, FiBook, FiMonitor, FiAward, FiHash, FiCode, FiSmartphone } from 'react-icons/fi';

const Home = () => {
    return (
        <div>
            <Hero />

            {/* Threat Prevention Section */}
            <section className="py-24 bg-cyber-900 border-t border-cyber-800">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Accelerating Your Career with Cyber Training"
                        subtitle="Accelerated Growth"
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                        <FeatureCard
                            icon={FiBook}
                            title="Industry Experts"
                            description="Learn from experienced cybersecurity professionals working in penetration testing, security operations, and identity management."
                        />
                        <FeatureCard
                            icon={FiMonitor}
                            title="Hands-on Projects"
                            description="Practice in real cybersecurity labs using vulnerable environments such as DVWA, JuiceShop, and bWAPP."
                        />
                        <FeatureCard
                            icon={FiAward}
                            title="Career Support"
                            description="Receive resume guidance, interview preparation, and placement support to start your cybersecurity career."
                        />
                        <FeatureCard
                            icon={FiTarget}
                            title="Interactive Cyber Labs"
                            description="Experience real-world ethical hacking and cybersecurity defense scenarios through hands-on labs."
                        />
                        <FeatureCard
                            icon={FiUserCheck}
                            title="Live Expert Mentorship"
                            description="Work directly with experienced security professionals who guide your learning journey."
                        />
                        <FeatureCard
                            icon={FiActivity}
                            title="Security Career Assessment"
                            description="Dedicated career support designed to help students secure cybersecurity roles."
                        />
                    </div>
                </div>
            </section>
            {/* <Stats /> */}

            {/* Services Grid Section */}
            <section className="py-24 bg-cyber-900 relative">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -ml-40"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <SectionTitle
                        title="Comprehensive Cybersecurity Academies"
                        subtitle="What We Offer"
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        <ServiceCard icon={FiHash} title="Information Security" description="We protect your digital assets through strategic infosec programs, risk assessments, and compliance-driven security controls." link="/services/network" />
                        <ServiceCard icon={FaBug} title="Penetration Testing" description={<><strong className="block mb-2 text-slate-300">Find weaknesses before hackers do</strong>We simulate real-world cyberattacks on your web and mobile applications to uncover vulnerabilities—so you can fix them before they're exploited.</>} link="/services/cloud" />
                        <ServiceCard icon={FiCode} title="API Security Testing" description={<><strong className="block mb-2 text-slate-300">Secure the connections that power your app</strong>Your APIs are the backbone of your product. We test them for hidden flaws like IDOR, broken authentication, and injection risks to protect your data.</>} link="/services/encryption" />
                        <ServiceCard icon={FiCloud} title="Cloud Security" description={<><strong className="block mb-2 text-slate-300">Protect your AWS, Azure, or GCP environments</strong>We identify misconfigurations, access issues, and other cloud-specific risks to ensure your infrastructure stays secure and compliant.</>} link="/services/identity" />
                        <ServiceCard icon={FaFingerprint} title="Identity & Access Management (IAM)" description={<><strong className="block mb-2 text-slate-300">Control who has access to what</strong>We help design and secure IAM systems so only the right people access the right resources—reducing insider risk and boosting compliance.</>} link="/services/monitoring" />
                        <ServiceCard icon={FiBook} title="Security Awareness & Managed Services" description={<><strong className="block mb-2 text-slate-300">Build a security-first culture</strong>From team training to 24/7 managed security support, we help you strengthen internal defenses and meet industry standards like ISO 27001 and GDPR.</>} link="/services/backup" />
                        <ServiceCard icon={FiSmartphone} title="Mobile Application Security" description={<><strong className="block mb-2 text-slate-300">Protect your Android and iOS apps from cyber threats</strong>We uncover vulnerabilities, insecure data handling, and broken authentication flows to ensure your mobile applications remain secure and trusted by users.</>} link="/services/mobile" />
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-cyber-950 border-y border-cyber-800 relative z-10">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Complete Career Transformation For Modern Demand"
                        subtitle="Why Choose Us"
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mt-16 max-w-6xl mx-auto">
                        <div className="bg-cyber-900 p-10 rounded-3xl border border-cyber-700 relative hover:border-accent-blue transition-colors duration-300">
                            <div className="w-16 h-16 bg-accent-blue/20 rounded-xl flex items-center justify-center mb-6 text-accent-blue box-glow">
                                <FiActivity className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Industry-Aligned Curriculum</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Our curriculum is constantly updated by tech leaders to ensure you learn the most relevant and in-demand skills in the current job market.
                            </p>
                            <ul className="space-y-3">
                                {['Real-World Projects', 'Latest Tech Stacks', 'Agile Methodologies'].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-slate-300">
                                        <FiCheckCircle className="w-5 h-5 text-accent-blue mr-3 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-cyber-900 p-10 rounded-3xl border border-cyber-700 relative hover:border-accent-purple transition-colors duration-300">
                            <div className="w-16 h-16 bg-accent-purple/20 rounded-xl flex items-center justify-center mb-6 text-accent-purple box-glow">
                                <FiShield className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Flexible Learning Formats</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Whether you prefer live online classes, self-paced learning, or hybrid formats, we provide a structured path tailored to your unique learning style.
                            </p>
                            <ul className="space-y-3">
                                {['Live Interactive Sessions', '24/7 Premium Support', 'Lifetime Access'].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-slate-300">
                                        <FiCheckCircle className="w-5 h-5 text-accent-purple mr-3 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Preview */}
            {/* <section className="py-24 bg-cyber-900">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Real-World Student Success Stories"
                        subtitle="Alumni Success"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <CaseStudyCard
                            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                            title="Security Engineer at a global technology company"
                            description="From an IT helpdesk role to landing a highly coveted threat hunting position at a leading enterprise."
                            category="Tech Placements"
                        />
                        <CaseStudyCard
                            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                            title="Cloud Security Architect at a leading cloud provider"
                            description="Transitioned into cloud security and tripled earning potential through our intensive network defense certification."
                            category="Career Shift"
                        />
                        <CaseStudyCard
                            image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                            title="SOC Analyst at a cybersecurity firm"
                            description="Built an impressive portfolio of practical lab exercises and successfully secured a Blue Team role."
                            category="Upskilling"
                        />
                    </div>
                </div>
            </section> */}

            <TestimonialSlider />
            <CTA />

            {/* Blog Teasers */}
            <section className="py-24 bg-cyber-950 border-t border-cyber-800">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Academy News & Educational Resources" subtitle="Latest Insights" center />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
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
                </div>
            </section>

        </div>
    );
};

export default Home;
