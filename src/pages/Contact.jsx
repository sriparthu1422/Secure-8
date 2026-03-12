import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const ContactInfoCard = ({ icon: Icon, title, content, link, content2, link2 }) => (
    <div className="bg-cyber-900 border border-cyber-800 p-8 rounded-2xl flex items-start space-x-6 hover:border-accent-blue transition-colors group">
        <div className="w-14 h-14 rounded-xl bg-cyber-800 flex items-center justify-center text-accent-cyan flex-shrink-0 group-hover:bg-accent-blue group-hover:text-white transition-colors">
            <Icon className="w-7 h-7" />
        </div>
        <div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            {link ? (
                <div className="flex flex-col space-y-1">
                    <a href={link} className="text-slate-400 hover:text-accent-blue transition-colors text-lg">{content}</a>
                    {link2 && (
                        <a href={link2} className="text-slate-400 hover:text-accent-blue transition-colors text-lg">{content2}</a>
                    )}
                </div>
            ) : (
                <p className="text-slate-400 text-lg whitespace-pre-line">{content}</p>
            )}
        </div>
    </div>
);

const Contact = () => {
    return (
        <div>
            <section className="pt-32 pb-24 bg-cyber-950 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-accent-blue/10 to-transparent z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                            Contact <span className="text-gradient">Secure8 Technology Services</span>
                        </h1>
                        <p className="text-xl text-slate-400">
                            Reach out for academy information, enrollment support, or cybersecurity consulting.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">

                        {/* Contact Form */}
                        <div className="lg:w-3/5">
                            <div className="bg-cyber-900 border border-cyber-700 p-8 md:p-12 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 blur-[80px] rounded-full pointer-events-none"></div>

                                <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>

                                <form className="space-y-6 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                                            <input type="text" className="w-full bg-cyber-950 border border-cyber-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors" placeholder="Enter your name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                                            <input type="email" className="w-full bg-cyber-950 border border-cyber-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors" placeholder="Enter your email" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
                                        <input type="tel" className="w-full bg-cyber-950 border border-cyber-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors" placeholder="Enter your phone number" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-2">How can we help?</label>
                                        <textarea rows="5" className="w-full bg-cyber-950 border border-cyber-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors resize-none" placeholder="Describe your educational goals..."></textarea>
                                    </div>

                                    <button type="button" className="w-full bg-accent-blue hover:bg-[#0E6B3A] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(57, 255, 136,0.4)] hover:shadow-[0_0_30px_rgba(57, 255, 136,0.6)] flex justify-center items-center">
                                        <FiSend className="mr-2" /> Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info & Map */}
                        <div className="lg:w-2/5 space-y-6 flex flex-col">
                            <ContactInfoCard
                                icon={FiMail}
                                title="Email"
                                content="info@secure8.io"
                                link="mailto:info@secure8.io"
                            />
                            <ContactInfoCard
                                icon={FiPhone}
                                title="Phone"
                                content="+91 70752 08789"
                                link="tel:+917075208789"
                                content2="+91 79010 34846"
                                link2="tel:+917901034846"
                            />
                            <ContactInfoCard
                                icon={FiMapPin}
                                title="Headquarters"
                                content={"#110, The Lotus, BNR Hills\nRoad #51, Jubilee Hills\nHyderabad, Telangana"}
                            />

                            {/* Map */}
                            <div className="flex-grow w-full bg-cyber-800 rounded-2xl border border-cyber-700 overflow-hidden relative min-h-[250px] mt-6 group">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.869062330752!2d78.39659074095759!3d17.43732644265431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb911a37a7b82f%3A0xe5cd6b9f291e0aed!2sC9FV%2BFX%2C%20Hyderabad%2C%20Telangana%20500033!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0, minHeight: '250px' }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Academy Location Map"
                                    className="grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10 opacity-70 group-hover:opacity-100"
                                ></iframe>
                                {/* Overlay styling matching theme when not hovered */}
                                <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay pointer-events-none z-20 transition-opacity duration-500 group-hover:opacity-0"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
