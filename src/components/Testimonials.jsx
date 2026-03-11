import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Jenkins',
            title: 'CTO, TechFlow Inc.',
            rating: 5,
            date: 'March 12, 2023',
            initials: 'SJ',
            quote: "CyberShield helped us identify critical vulnerabilities before attackers could exploit them. Their continuous monitoring platform has given our executive team complete peace of mind.",
            color: "bg-blue-100 text-blue-600"
        },
        {
            name: 'David Roberts',
            title: 'VP of Engineering, CloudScale',
            rating: 5,
            date: 'August 04, 2023',
            initials: 'DR',
            quote: "The onboarding process was seamless, and the zero trust architecture they implemented stopped a targeted ransomware attack dead in its tracks just three weeks after deployment.",
            color: "bg-indigo-100 text-indigo-600"
        },
        {
            name: 'Elena Rostova',
            title: 'InfoSec Director, Global Retail',
            rating: 5,
            date: 'November 22, 2023',
            initials: 'ER',
            quote: "Compliance used to be a massive headache for us. With their automated reporting and 24/7 SOC support, we passed our SOC2 Type II audit with zero exceptions.",
            color: "bg-emerald-100 text-emerald-600"
        },
        {
            name: 'Michael Chen',
            title: 'Founder, FintechSecure',
            rating: 5,
            date: 'January 15, 2024',
            initials: 'MC',
            quote: "Unmatched expertise in financial data protection. The penetration testing team uncovered logical flaws our previous auditors completely missed. Highly recommended.",
            color: "bg-purple-100 text-purple-600"
        }
    ];

    return (
        <section className="py-12 lg:py-24 bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 rounded-l-3xl z-0 transform translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Testimonials</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                        Hear It from Our Happy Customers
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true, bulletClass: "swiper-pagination-bullet !bg-blue-500" }}
                        className="pb-16"
                    >
                        {testimonials.map((test, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-xl shadow-slate-200/50 relative h-full flex flex-col">
                                    <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-50 rotate-180" />

                                    <div className="flex text-yellow-500 mb-4">
                                        {[...Array(test.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>

                                    <p className="text-slate-600 italic mb-6 leading-relaxed flex-grow relative z-10">
                                        "{test.quote}"
                                    </p>

                                    <div className="flex items-center mt-auto pt-6 border-t border-slate-100">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 ${test.color}`}>
                                            {test.initials}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{test.name}</h4>
                                            <p className="text-sm text-slate-500">{test.title}</p>
                                            <p className="text-xs text-slate-400 mt-1">{test.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
