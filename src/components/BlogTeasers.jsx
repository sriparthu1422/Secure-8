import React from 'react';
import { ArrowRight, User } from 'lucide-react';

const BlogTeasers = () => {
    const posts = [
        {
            category: 'Threat Intelligence',
            title: 'The Rise of AI-Powered Phishing Attacks in 2024',
            author: 'Dr. Emily Chen',
            date: 'Oct 15, 2024',
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        },
        {
            category: 'Compliance',
            title: 'Demystifying the New Cybersecurity Regulations for Finance',
            author: 'Marcus Johnson',
            date: 'Oct 02, 2024',
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
        },
        {
            category: 'Best Practices',
            title: 'Implementing Zero Trust Without Disrupting Your Workforce',
            author: 'Sarah Jenkins',
            date: 'Sep 28, 2024',
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        }
    ];

    return (
        <section className="py-12 lg:py-24 bg-cyber-900 border-t border-cyber-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-6 md:mb-0">
                        <span className="text-accent-blue font-bold tracking-wider uppercase text-sm mb-2 block">Latest Insights</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                            Cybersecurity News & Resources
                        </h2>
                    </div>
                    <button className="px-6 py-3 bg-transparent border border-accent-blue hover:bg-[#0E6B3A] text-white rounded-xl font-bold transition-all">
                        View All Articles
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {posts.map((post, idx) => (
                        <article key={idx} className="bg-cyber-800 rounded-2xl overflow-hidden shadow-lg border border-cyber-700 hover:border-accent-blue transition-all duration-300 group flex flex-col hover:-translate-y-2 box-glow-hover">
                            <div className={`w-full h-48 relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-cyber-900/40 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow relative z-20">
                                <span className="bg-accent-blue/20 border border-accent-blue/30 text-accent-cyan px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block w-max">
                                    {post.category}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-blue transition-colors flex-grow leading-tight">
                                    {post.title}
                                </h3>
                                <div className="flex items-center text-sm text-slate-400 mb-6 mt-auto border-t border-cyber-700 pt-4">
                                    <User className="w-4 h-4 mr-2 text-accent-cyan" />
                                    <span className="font-medium mr-4">{post.author}</span>
                                    <span>• {post.date}</span>
                                </div>
                                <a href="#" className="inline-flex items-center text-accent-cyan font-bold group-hover:text-white transition-colors">
                                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogTeasers;
