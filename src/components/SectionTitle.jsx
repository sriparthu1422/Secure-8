import React from 'react';

const SectionTitle = ({ title, subtitle, center = false }) => {
    return (
        <div className={`mb-16 ${center ? 'text-center' : 'text-left'} max-w-3xl ${center ? 'mx-auto' : ''}`}>
            {subtitle && (
                <span className="text-accent-blue font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                {title}
            </h2>
            <div className={`h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full ${center ? 'mx-auto' : ''}`}></div>
        </div>
    );
};

export default SectionTitle;
