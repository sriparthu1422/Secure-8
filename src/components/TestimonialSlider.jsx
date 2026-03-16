import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TestimonialSlider = () => {
    const testimonials = [
        {
            name: 'Sarah Jenkins',
            role: 'Senior Penetration Tester at TechFlow',
            image: 'https://i.pravatar.cc/150?img=47',
            quote: "Secure8 Academy's hands-on cybersecurity training transformed my career. The ethical hacking labs and expert mentorship helped me gain real security skills and land my first cybersecurity job within months.",
        },
        {
            name: 'David Roberts',
            role: 'Cloud Security Architect at CloudScale',
            image: 'https://i.pravatar.cc/150?img=11',
            quote: "The curriculum was rigorous and perfectly aligned with industry needs. The career team helped me prepare for security interviews and I received multiple offers before graduation.",
        },
        {
            name: 'Elena Rostova',
            role: 'Threat Intelligence Analyst at Global Retail',
            image: 'https://i.pravatar.cc/150?img=32',
            quote: "Switching careers seemed daunting, but the flexible learning schedule and supportive community made all the difference. I am now doing work I truly love in the cybersecurity industry.",
        },
    ];

    return (
        <section className="py-12 lg:py-24 bg-cyber-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <SectionTitle title="Hear From Our Alumni" subtitle="Student Reviews" center />

                <div className="max-w-4xl mx-auto mt-12">
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        grabCursor={true}
                        autoHeight={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        className="pb-16 testimonial-swiper !px-4 md:!px-12"
                    >
                        {testimonials.map((test, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-cyber-800 border border-cyber-700 p-8 md:p-12 lg:p-16 rounded-3xl relative h-full flex flex-col items-center">
                                    <FaQuoteLeft className="absolute top-6 left-6 md:top-8 md:left-8 w-8 h-8 md:w-12 md:h-12 text-cyber-700/50" />

                                    <div className="flex text-yellow-500 mb-6 justify-center">
                                        {[...Array(5)].map((_, i) => (
                                            <FiStar key={i} className="w-5 h-5 fill-current mx-1 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                                        ))}
                                    </div>

                                    <p className="text-lg md:text-xl lg:text-2xl text-slate-300 italic mb-8 text-center leading-relaxed relative z-10 font-light max-w-2xl">
                                        "{test.quote}"
                                    </p>

                                    <div className="flex flex-col items-center mt-8">
                                        <img
                                            src={test.image}
                                            alt={test.name}
                                            className="w-16 h-16 rounded-full border-2 border-accent-blue p-0.5 object-cover mb-4 shadow-[0_0_15px_rgba(57, 255, 136,0.4)]"
                                        />
                                        <h4 className="font-bold text-white text-lg">{test.name}</h4>
                                        <p className="text-sm text-accent-cyan tracking-wide font-medium">{test.role}</p>
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

export default TestimonialSlider;
