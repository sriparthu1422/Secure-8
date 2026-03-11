import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import { PricingCard } from '../components/Cards';

const Pricing = () => {
    return (
        <div>
            <section className="pt-32 pb-24 bg-cyber-950 relative overflow-hidden border-b border-cyber-800">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <SectionTitle
                        title="Transparent, Accessible Education Plans"
                        subtitle="Enrollment Plans"
                        center
                    />
                    <p className="text-xl text-slate-400 text-center max-w-2xl mx-auto mb-16">
                        Choose the learning path that fits your career goals. Flexible payment options available with no hidden fees.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                        {/* Starter Plan */}
                        {/* Starter Plan */}
                        <PricingCard
                            plan="Self-Paced"
                            price="49"
                            description="Ideal for learners who prefer flexible cybersecurity learning."
                            features={[
                                'Access to core courses',
                                'Self-paced learning modules',
                                'Community access',
                                'Monthly Q&A sessions',
                                'Certificate of completion'
                            ]}
                        />

                        {/* Business Plan (Popular) */}
                        <PricingCard
                            plan="Live Classes"
                            price="299"
                            description="Structured cybersecurity training with expert instructors."
                            isPopular={true}
                            features={[
                                'Live interactive classes',
                                'Weekly mentorship sessions',
                                'Resume and portfolio review',
                                'Interview preparation',
                                'Job placement assistance'
                            ]}
                        />

                        {/* Enterprise Plan */}
                        <PricingCard
                            plan="Career Plus"
                            price="899"
                            description="Advanced program designed for accelerated cybersecurity career growth."
                            features={[
                                'Everything in Live Classes',
                                'Career placement support',
                                'Direct referrals to hiring partners',
                                'Dedicated cybersecurity career coach',
                                'Lifetime course access'
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section (Optional/Additional layout content) */}
            <section className="py-24 bg-cyber-900">
                <div className="container mx-auto px-4 max-w-4xl">
                    <SectionTitle title="Frequently Asked Questions" center />
                    <div className="space-y-6 mt-12">
                        <div className="bg-cyber-800 p-6 rounded-2xl border border-cyber-700">
                            <h4 className="text-xl font-bold text-white mb-2">Can I switch plans later?</h4>
                            <p className="text-slate-400">Yes, you can upgrade or downgrade your plan at any time. Prorated charges will be applied automatically.</p>
                        </div>
                        <div className="bg-cyber-800 p-6 rounded-2xl border border-cyber-700">
                            <h4 className="text-xl font-bold text-white mb-2">Do you offer scholarships or financial aid?</h4>
                            <p className="text-slate-400">Yes, we offer flexible financing options and merit-based scholarships to ensure our educational programs are accessible to everyone.</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default Pricing;
