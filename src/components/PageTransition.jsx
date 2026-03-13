import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
    const location = useLocation();

    // Scroll to top on every route change so the page doesn't appear from the middle
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div key={location.pathname} className="animate-slide-down w-full h-full origin-top">
            {children}
        </div>
    );
};

export default PageTransition;
