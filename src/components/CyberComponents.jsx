import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export const TerminalWindow = ({ title = "Terminal", command = "./start_secure8.sh", outputLines = [] }) => {
    return (
        <div className="bg-[#05080c] border border-cyber-700 rounded-xl overflow-hidden shadow-[0_10px_50px_rgba(57,255,136,0.1)] flex flex-col w-full max-w-2xl mx-auto relative group">
            {/* Glow backing */}
            <div className="absolute inset-0 bg-accent-blue/10 blur-[100px] z-0 opacity-50 group-hover:opacity-80 transition-opacity duration-1000 pointer-events-none"></div>
            
            {/* Header */}
            <div className="relative z-10 bg-[#0a111a] px-4 py-3 flex items-center border-b border-cyber-700/50">
                <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono tracking-widest uppercase mx-auto">{title}</div>
            </div>
            {/* Body */}
            <div className="relative z-10 p-6 font-mono text-sm sm:text-base leading-relaxed text-accent-cyan flex-grow flex flex-col min-h-[280px] w-full">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
                
                <div className="relative z-20">
                    <div className="flex flex-wrap items-center text-slate-400 mb-4 text-sm sm:text-base lg:text-lg">
                        <span className="text-accent-blue mr-2">root@secure8:~$</span>
                        <TypeAnimation
                            sequence={[
                                500,
                                command,
                                500
                            ]}
                            wrapper="span"
                            speed={50}
                            cursor={false}
                            className="text-slate-200"
                        />
                    </div>
                    {outputLines.length > 0 && (
                        <div className="pl-4 border-l border-cyber-700/50 mt-2 space-y-3 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'both' }}>
                            {outputLines.map((line, idx) => (
                                <p key={idx} className={line.startsWith('[') ? 'text-slate-400 text-xs sm:text-sm' : 'text-accent-cyan text-sm sm:text-base font-bold'}>{line}</p>
                            ))}
                        </div>
                    )}
                </div>
                <div className="mt-auto relative z-20 animate-fade-in" style={{ animationDelay: '3.5s', animationFillMode: 'both' }}>
                    <span className="text-accent-blue mr-2">root@secure8:~$</span>
                    <span className="w-2.5 h-4 sm:h-5 bg-accent-cyan inline-block animate-pulse align-middle"></span>
                </div>
            </div>
        </div>
    );
};
