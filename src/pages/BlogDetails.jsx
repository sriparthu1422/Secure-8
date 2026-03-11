import React from 'react';
import CTA from '../components/CTA';
import { FiUser, FiCalendar, FiTag, FiSearch } from 'react-icons/fi';

const BlogDetails = () => {
    return (
        <div>
            {/* Hero */}
            <section className="pt-32 pb-20 bg-cyber-950 relative border-b border-cyber-800 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                    <div className="mb-6 flex flex-wrap items-center text-sm text-slate-400 gap-4">
                        <span className="px-3 py-1 bg-accent-purple/20 text-accent-cyan border border-accent-purple/30 rounded-full font-bold uppercase tracking-wider box-glow">Career Advice</span>
                        <span className="flex items-center"><FiCalendar className="mr-2" /> October 15, 2024</span>
                        <span className="flex items-center"><FiUser className="mr-2" /> Dr. Emily Chen</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
                        How to Prepare for Your Next Technical Interview in 2024
                    </h1>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-16 bg-cyber-900 border-b border-cyber-800">
                <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">

                    {/* Article Body */}
                    <article className="lg:w-2/3 prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-headings:text-white prose-a:text-accent-blue hover:prose-a:text-accent-cyan">
                        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80" alt="Cyber Threat" className="w-full h-auto rounded-3xl mb-10 border border-cyber-700" />

                        <p className="lead text-xl text-slate-200 font-medium">
                            Over the past 12 months, we have observed a massive shift in how tech companies conduct technical interviews. The catalyst? The rise of AI-assisted coding tools.
                        </p>

                        <h2>The Shift from LeetCode to Practical Projects</h2>
                        <p>
                            Historically, interviews relied heavily on whiteboarding abstract algorithms. Candidates would memorize hundreds of puzzle-like problems hoping to catch a familiar pattern. Those days are slowly fading away.
                        </p>
                        <p>
                            Today, engineering managers want to see how you build and structure actual applications. They are looking for context and real-world problem-solving skills rather than rote algorithm memorization.
                        </p>

                        <h2>Anatomy of a Modern Tech Interview</h2>
                        <pre className="bg-cyber-950 border border-cyber-800 p-6 rounded-xl overflow-x-auto text-sm">
                            <code>{`// Example Interview Process
Stage 1: Initial Recruiter Screen (Cultural Fit)
Stage 2: Take-Home Project or Live Pair Programming
Stage 3: System Design and Architecture Interview
Stage 4: Final Behavioral Round with Engineering Leadership`}</code>
                        </pre>

                        <h2>Preparation Strategies</h2>
                        <p>
                            Because modern interviews evaluate practical skills, traditional algorithm-only prep is often insufficient.
                        </p>
                        <ul>
                            <li><strong>Build Real Projects:</strong> Focus on building end-to-end applications that demonstrate mastery of a specific technology stack.</li>
                            <li><strong>System Design Practice:</strong> Learn how to scale applications and make architectural tradeoffs under pressure.</li>
                            <li><strong>Mock Interviews:</strong> Conduct practice interviews with peers to refine your communication and problem-solving narrative.</li>
                        </ul>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3 space-y-8">

                        {/* Search */}
                        <div className="bg-cyber-800 p-8 rounded-3xl border border-cyber-700">
                            <h3 className="text-xl font-bold text-white mb-6">Search</h3>
                            <div className="relative">
                                <input type="text" placeholder="Search articles..." className="w-full bg-cyber-950 border border-cyber-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors pl-12" />
                                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bg-cyber-800 p-8 rounded-3xl border border-cyber-700">
                            <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
                            <ul className="space-y-3">
                                {['Career Advice (12)', 'Development (8)', 'Productivity (15)', 'News & Press (5)'].map((cat, i) => (
                                    <li key={i}>
                                        <a href="#" className="flex justify-between items-center text-slate-400 hover:text-accent-blue transition-colors pb-3 border-b border-cyber-700">
                                            <span>{cat.split(' (')[0]}</span>
                                            <span className="text-xs bg-cyber-900 border border-cyber-700 px-2 py-1 rounded-full">{cat.split('(')[1].replace(')', '')}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Posts */}
                        <div className="bg-cyber-800 p-8 rounded-3xl border border-cyber-700">
                            <h3 className="text-xl font-bold text-white mb-6">Recent Posts</h3>
                            <div className="space-y-6">
                                <a href="#" className="group flex gap-4">
                                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&q=80" alt="" className="w-16 h-16 rounded-xl object-cover border border-cyber-700 group-hover:border-accent-blue transition-colors" />
                                    <div>
                                        <h4 className="text-sm font-bold text-white group-hover:text-accent-blue transition-colors leading-tight line-clamp-2 mb-1">Top 5 Programming Languages Start Learning Today</h4>
                                        <span className="text-xs text-slate-500">Oct 02, 2024</span>
                                    </div>
                                </a>
                                <a href="#" className="group flex gap-4">
                                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=80" alt="" className="w-16 h-16 rounded-xl object-cover border border-cyber-700 group-hover:border-accent-blue transition-colors" />
                                    <div>
                                        <h4 className="text-sm font-bold text-white group-hover:text-accent-blue transition-colors leading-tight line-clamp-2 mb-1">Balancing a Full-Time Job While Coding</h4>
                                        <span className="text-xs text-slate-500">Sep 28, 2024</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </aside>

                </div>
            </section>

            <CTA />
        </div>
    );
};

export default BlogDetails;
