import React from 'react';
import LayoutContainer from '../components/LayoutContainer';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const ContactInfoCard = ({ icon: Icon, title, content, link, content2, link2 }) => (
    <div className="bg-cyber-900 border border-cyber-800 p-5 sm:p-6 lg:p-8 rounded-2xl flex items-start space-x-4 sm:space-x-6 hover:border-accent-blue transition-all duration-300 group shadow-lg shadow-black/20">
        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-cyber-800 flex items-center justify-center text-accent-cyan flex-shrink-0 group-hover:bg-accent-blue group-hover:text-white transition-all shadow-inner">
            <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
        </div>
        <div className="flex-grow">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-accent-cyan transition-colors">{title}</h3>
            {link ? (
                <div className="flex flex-col space-y-1">
                    <a href={link} className="text-slate-400 hover:text-accent-blue transition-colors text-sm sm:text-base md:text-lg break-all sm:break-normal">{content}</a>
                    {link2 && (
                        <a href={link2} className="text-slate-400 hover:text-accent-blue transition-colors text-sm sm:text-base md:text-lg break-all sm:break-normal">{content2}</a>
                    )}
                </div>
            ) : (
                <p className="text-slate-400 text-sm sm:text-base md:text-lg whitespace-pre-line leading-relaxed">{content}</p>
            )}
        </div>
    </div>
);

const Contact = () => {
    return (
        <div className="flex flex-col w-full overflow-x-hidden">
            <section className="py-12 sm:py-20 lg:py-28 bg-cyber-950 relative overflow-hidden border-b border-cyber-800">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-accent-blue/10 to-transparent z-0 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

                <LayoutContainer className="relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 px-4">
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 lg:mb-8 leading-[1.1] tracking-tight">
                            Get in touch with <span className="text-gradient">Secure8 Technology Services</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed">
                            Have questions about courses, enrollment, or career guidance? Our team is here to help you take the next step into cybersecurity.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 sm:gap-14 lg:gap-16 items-start">

                        {/* Contact Form Container */}
                        <div className="w-full lg:w-[60%] xl:w-[65%]">
                            <div className="bg-cyber-900 border border-cyber-700 p-5 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 blur-[80px] rounded-full pointer-events-none"></div>

                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 relative z-10">Send us a Message</h3>

                                <form className="space-y-4 sm:space-y-6 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                        <div className="order-1">
                                            <label className="block text-xs sm:text-sm font-medium text-slate-400 mb-1.5 sm:mb-2">Full Name</label>
                                            <input type="text" className="w-full bg-cyber-950 border border-cyber-700 rounded-xl px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all" placeholder="Enter your name" />
                                        </div>
                                        <div className="order-2">
                                            <label className="block text-xs sm:text-sm font-medium text-slate-400 mb-1.5 sm:mb-2">Email Address</label>
                                            <input type="email" className="w-full bg-cyber-950 border border-cyber-700 rounded-xl px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all" placeholder="Enter your email" />
                                        </div>
                                    </div>

                                    <div className="order-3">
                                        <label className="block text-xs sm:text-sm font-medium text-slate-400 mb-1.5 sm:mb-2">Phone Number</label>
                                        <input type="tel" className="w-full bg-cyber-950 border border-cyber-700 rounded-xl px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all" placeholder="Enter your phone number" />
                                    </div>

                                    <div className="order-4">
                                        <label className="block text-xs sm:text-sm font-medium text-slate-400 mb-1.5 sm:mb-2">How can we help?</label>
                                        <textarea rows="4" className="w-full bg-cyber-950 border border-cyber-700 rounded-xl px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all resize-none min-h-[120px]" placeholder="Describe your educational goals..."></textarea>
                                    </div>

                                    <button type="button" className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white font-bold text-base sm:text-lg py-3.5 sm:py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(57,255,136,0.15)] hover:shadow-[0_0_30px_rgba(57,255,136,0.25)] flex justify-center items-center group/btn active:scale-[0.98]">
                                        <FiSend className="mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /> Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info & Map */}
                        <div className="w-full lg:w-[40%] xl:w-[35%] space-y-6 flex flex-col h-full">
                            <div className="space-y-4 sm:space-y-6">
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
                            </div>

                            {/* Map Container */}
                            <div className="flex-grow min-h-[300px] lg:min-h-0 lg:max-h-none w-full bg-cyber-800 rounded-2xl border border-cyber-700 overflow-hidden relative group mt-2 lg:mt-0">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.869062330752!2d78.39659074095759!3d17.43732644265431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb911a37a7b82f%3A0xe5cd6b9f291e0aed!2sC9FV%2BFX%2C%20Hyderabad%2C%20Telangana%20500033!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Academy Location Map"
                                    className="grayscale group-hover:grayscale-0 transition-all duration-700 relative z-10 opacity-60 group-hover:opacity-100"
                                ></iframe>
                                {/* Map Contrast Overlay */}
                                <div className="absolute inset-0 bg-cyber-950/20 mix-blend-multiply pointer-events-none z-20 group-hover:opacity-0 transition-opacity"></div>
                            </div>
                        </div>

                    </div>
                </LayoutContainer>
            </section>
        </div>
    );
};

export default Contact;
