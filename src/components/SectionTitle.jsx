import React from 'react';

const SectionTitle = ({ title, subtitle, mainTitle, center = false }) => {
    return (
        <div className={`mb-10 sm:mb-14 lg:mb-16 ${center ? 'text-center mx-auto' : 'text-left'} max-w-3xl w-full`}>
            {title && (
                <span className="text-accent-blue font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 block">
                    {title}
                </span>
            )}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                {subtitle}
            </h2>
            {mainTitle && (
            <p className={`text-base sm:text-lg md:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-10 leading-relaxed ${center ? 'mx-auto' : ''}`}>
                {mainTitle}
            </p>
            )}
            <div className={`h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full ${center ? 'mx-auto' : ''}`}></div>
        </div>
    );
};

export default SectionTitle;
