import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import { BlogCard } from '../components/Cards';

const Blog = () => {
    return (
        <div>
            <section className="pt-32 pb-20 bg-cyber-950 relative border-b border-cyber-800 overflow-hidden">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-[0.2] z-0"></div>
                <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-cyber-900 to-transparent z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <SectionTitle
                        title="Academy News & Educational Insights"
                        subtitle="Learning Hub"
                    />
                    <p className="text-xl text-slate-400 max-w-3xl mb-12">
                        Stay ahead of the curve with our latest career tips, ethical hacking tutorials, and thought leadership from top industry professionals.
                    </p>

                    {/* Featured Post */}
                    <div className="bg-cyber-900 border border-cyber-700 rounded-3xl overflow-hidden hover:border-accent-blue transition-colors group flex flex-col md:flex-row h-auto md:h-[400px]">
                        <div className="md:w-1/2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-cyber-900/30 group-hover:bg-transparent transition-colors z-10"></div>
                            <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200" alt="Featured Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                            <span className="inline-block px-4 py-1.5 bg-accent-blue/20 text-accent-cyan rounded-full text-sm font-bold mb-6 w-max border border-accent-blue/30 box-glow">FEATURED GUIDE</span>
                            <h3 className="text-3xl font-extrabold text-white mb-4 group-hover:text-accent-blue transition-colors">The Future of AI in Cybersecurity Defenses: A 2024 Guide</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed line-clamp-3">
                                Discover how advanced AI tools are transforming the way security teams detect, analyze, and mitigate threats in the modern tech ecosystem. Learn how to stay ahead.
                            </p>
                            <a href="/blog/zero-day" className="font-bold text-white flex items-center group-hover:text-accent-blue transition-colors">
                                Read Full Guide <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid of Posts */}
            <section className="py-24 bg-cyber-900">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                        <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
                        <div className="flex space-x-2 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto mt-6 md:mt-0">
                            {['All', 'Career Advice', 'Information Security', 'Training', 'News'].map((cat, i) => (
                                <button key={i} className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${i === 0 ? 'bg-accent-blue text-white shadow-[0_0_15px_rgba(57, 255, 136,0.3)]' : 'bg-cyber-800 text-slate-400 hover:text-white hover:bg-cyber-700'}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <BlogCard
                            category="Career Advice"
                            title="How to Prepare for Your First Cybersecurity Interview in 2024"
                            author="Dr. Emily Chen"
                            date="Oct 15, 2024"
                            image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                        />
                        <BlogCard
                            category="Information Security"
                            title="Top 5 Security Concepts Every Beginner Should Learn"
                            author="Marcus Johnson"
                            date="Oct 02, 2024"
                            image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
                        />
                        <BlogCard
                            category="Training"
                            title="Balancing a Full-Time Job While Learning Penetration Testing"
                            author="Sarah Jenkins"
                            date="Sep 28, 2024"
                            image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
                        />
                        <BlogCard
                            category="News"
                            title="Secure8 Academy Announces New Enterprise Partner Program"
                            author="Press Team"
                            date="Sep 15, 2024"
                            image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
                        />
                        <BlogCard
                            category="Information Security"
                            title="Why Zero Trust Architecture is the Future of Enterprise Security"
                            author="Alex Rivera"
                            date="Sep 01, 2024"
                            image="https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80"
                        />
                        <BlogCard
                            category="Career Advice"
                            title="Deep Dive: Building a Winning Cyber Threat Hunting Portfolio"
                            author="James Chen"
                            date="Aug 21, 2024"
                            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                        />
                    </div>

                    <div className="text-center">
                        <button className="px-8 py-4 border border-accent-blue bg-transparent hover:bg-[#0E6B3A] text-white rounded-xl font-bold transition-all">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default Blog;
