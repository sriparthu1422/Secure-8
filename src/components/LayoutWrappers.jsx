import React from 'react';

export const Container = ({ children, className = '' }) => {
    return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${className}`}>
            {children}
        </div>
    );
};

export const SectionWrapper = ({
    children,
    id = '',
    className = '',
    bgClass = 'bg-cyber-900',
    paddingClass = 'py-12 sm:py-16 lg:py-20'
}) => {
    return (
        <section id={id} className={`relative block ${bgClass} ${paddingClass} ${className}`}>
            <Container>
                {children}
            </Container>
        </section>
    );
};
