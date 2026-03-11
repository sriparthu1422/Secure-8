import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import { CaseStudyCard } from '../components/Cards';

const CaseStudies = () => {
    return (
        <div>
            <section className="pt-32 pb-20 bg-cyber-950 relative border-b border-cyber-800 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <SectionTitle
                        title="Proven Alumni Success"
                        subtitle="Success Stories"
                        center
                    />
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
                        See how our students from diverse backgrounds have partnered with Secure8 Academy to completely transform their careers and land roles at top cybersecurity organizations and enterprise SOCs.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-cyber-900 border-b border-cyber-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <CaseStudyCard
                            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                            title="Security Engineer at Google"
                            description="From an IT helpdesk role to landing a highly coveted threat hunting position at a leading enterprise."
                            category="Tech Placements"
                            link="/case-studies/ecommerce"
                        />
                        <CaseStudyCard
                            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                            title="Cloud Security Architect at AWS"
                            description="Transitioned into cloud security and tripled earning potential through our intensive network defense certification."
                            category="Career Shift"
                            link="/case-studies/healthcare"
                        />
                        <CaseStudyCard
                            image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                            title="Lead Incident Responder"
                            description="Built an impressive portfolio of practical lab exercises and successfully secured a Blue Team role."
                            category="Upskilling"
                            link="/case-studies/finance"
                        />
                        <CaseStudyCard
                            image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80"
                            title="Penetration Tester at Spotify"
                            description="Mastered ethical hacking and found critical vulnerabilities, leading to a core security role."
                            category="Ethical Hacking"
                            link="/case-studies/saas"
                        />
                        <CaseStudyCard
                            image="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=800&q=80"
                            title="SecOps Engineer at Netflix"
                            description="Mastered DevSecOps and cloud scalability to secure a defensive role at a streaming giant."
                            category="DevSecOps"
                            link="/case-studies/manufacturing"
                        />
                        <CaseStudyCard
                            image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
                            title="Threat Analyst at Apple"
                            description="Developed an award-winning malware analysis report that caught the attention of security leadership."
                            category="Threat Intel"
                            link="/case-studies/government"
                        />
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default CaseStudies;
