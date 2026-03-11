import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export const ServiceCard = ({ icon: Icon, title, description, link }) => (
    <div className="group p-8 rounded-2xl bg-cyber-800 border border-cyber-700 hover:border-accent-blue transition-all duration-300 hover:shadow-[0_0_30px_rgba(57, 255, 136,0.15)] flex flex-col h-full hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue to-accent-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-cyber-900 border border-cyber-700 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
            <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">{title}</h3>
        <p className="text-slate-400 mb-6 leading-relaxed flex-grow">{description}</p>
        <Link to={link || "/services/details"} className="inline-flex items-center text-accent-cyan font-semibold group-hover:text-white transition-colors mt-auto w-max">
            Learn More
            <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
    </div>
);

export const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="p-8 rounded-2xl bg-cyber-900/50 border border-cyber-800 backdrop-blur-sm hover:bg-cyber-800 transition-colors duration-300 relative">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-accent-blue border border-accent-blue/30 shadow-[0_0_15px_rgba(57, 255, 136,0.2)]">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
);

export const CaseStudyCard = ({ image, title, description, category, link }) => (
    <Link to={link || "/case-studies/details"} className="group block relative rounded-2xl overflow-hidden shadow-lg h-[300px] sm:h-[400px] flex flex-col justify-end border border-cyber-700 hover:border-accent-blue transition-all duration-300 box-glow-hover">
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-cyber-950/90 z-10`}></div>
        <img
            src={image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-50 group-hover:opacity-70"
        />
        <div className="relative z-20 p-8 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-block px-3 py-1 bg-accent-blue/20 border border-accent-blue/50 rounded-full text-xs font-semibold text-accent-cyan mb-3 backdrop-blur-md">
                {category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                {description}
            </p>
            <div className="inline-flex items-center text-accent-cyan font-bold opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 delay-200">
                Read Success Story <FiArrowRight className="w-4 h-4 ml-2" />
            </div>
        </div>
    </Link>
);

export const BlogCard = ({ category, title, author, date, image, link }) => (
    <article className="bg-cyber-800 rounded-2xl overflow-hidden border border-cyber-700 hover:border-accent-purple transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-cyber-900/40 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
            <img src={image || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-4 left-4 z-20">
                <span className="bg-accent-purple text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {category}
                </span>
            </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-blue transition-colors leading-tight line-clamp-2">
                <Link to={link || "/blog/details"}>{title}</Link>
            </h3>
            <div className="flex items-center justify-between text-sm text-slate-400 mt-auto border-t border-cyber-700 pt-4">
                <span>By {author}</span>
                <span>{date}</span>
            </div>
        </div>
    </article>
);

export const PricingCard = ({ plan, price, description, isPopular, features }) => (
    <div className={`p-8 rounded-3xl border ${isPopular ? 'border-accent-blue bg-cyber-800/80 shadow-[0_0_30px_rgba(57, 255, 136,0.15)] scale-105 z-10' : 'border-cyber-700 bg-cyber-900'} relative backdrop-blur-sm flex flex-col`}>
        {isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider box-glow">
                Most Popular
            </div>
        )}
        <h3 className="text-2xl font-bold text-white mb-2">{plan}</h3>
        <div className="flex items-baseline mb-6">
            <span className="text-4xl font-extrabold text-white">${price}</span>
            <span className="text-slate-400 ml-2">/month</span>
        </div>
        <p className="text-slate-400 mb-8 border-b border-cyber-700 pb-6">{description}</p>
        <ul className="space-y-4 mb-8 flex-grow">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-slate-300">
                    <svg className="w-5 h-5 text-accent-cyan mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                </li>
            ))}
        </ul>
        <button className={`w-full py-3 rounded-xl font-bold transition-all ${isPopular ? 'bg-accent-blue hover:bg-[#0E6B3A] text-white shadow-[0_0_15px_rgba(57, 255, 136,0.4)]' : 'bg-cyber-700 hover:bg-cyber-600 text-white'}`}>
            Choose Plan
        </button>
    </div>
);
