import React, { useState, useEffect } from 'react';
import logo from '../assets/secure8-logo-new.jpg';

const IntroAnimation = ({ onComplete }) => {
    const [showWelcome, setShowWelcome] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Show welcome screen immediately (or after a very short delay for effect)
        const welcomeTimer = setTimeout(() => setShowWelcome(true), 500);

        // Hold welcome for ~2.5 seconds, then fade out
        // Trigger fade out at 3000ms
        const fadeOutTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 3000);

        // Tell parent we are completely done after fade transition (4s total)
        const completeTimer = setTimeout(() => {
            onComplete();
        }, 2500);

        return () => {
            clearTimeout(welcomeTimer);
            clearTimeout(fadeOutTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-[100] bg-cyber-950 flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700 ease-in-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>

            {/* CRT/Scanline overlay */}
            <div className="absolute inset-0 pointer-events-none z-50 opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>

            {/* Animated Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent via-accent-cyan/20 to-transparent opacity-50 z-40 animate-scanline pointer-events-none"></div>



            {/* Welcome Reveal Screen */}
            {showWelcome && (
                <div className="z-10 flex flex-col items-center animate-fade-in text-center px-4">
                    {/* Typing Text Reveal */}
                    <div className="overflow-hidden border-r-4 border-accent-cyan whitespace-nowrap animate-typewriter pr-2 mb-8">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-widest uppercase text-glow">
                            Welcome to
                        </h1>
                    </div>

                    {/* Glowing Logo */}
                    <div className="relative group opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                        <div className="absolute -inset-4 bg-accent-cyan/20 rounded-full blur-[40px] animate-pulse"></div>
                        <img
                            src={logo}
                            alt="Secure8 Logo"
                            className="h-20 md:h-28 lg:h-32 w-auto object-contain relative z-10 invert hue-rotate-180 brightness-110 contrast-125 mix-blend-screen animate-glitch drop-shadow-[0_0_15px_rgba(57,255,136,0.8)]"
                        />
                    </div>
                </div>
            )}

            {/* Deep background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
        </div>
    );
};

export default IntroAnimation;
