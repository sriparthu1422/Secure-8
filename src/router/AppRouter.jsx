import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

// Import Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ServiceDetails from '../pages/ServiceDetails';
// import CaseStudies from '../pages/CaseStudies';
// import CaseStudyDetails from '../pages/CaseStudyDetails';
// import Blog from '../pages/Blog';
// import BlogDetails from '../pages/BlogDetails';
// import Pricing from '../pages/Pricing';
import Contact from '../pages/Contact';
import ServicesPage from '../pages/ServicesPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="our-services" element={<ServicesPage />} />
                <Route path="services" element={<Services />} />
                <Route path="services/:id" element={<ServiceDetails />} />
                {/* <Route path="case-studies" element={<CaseStudies />} /> */}
                {/* <Route path="case-studies/:id" element={<CaseStudyDetails />} /> */}
                {/* <Route path="blog" element={<Blog />} /> */}
                {/* <Route path="blog/:id" element={<BlogDetails />} /> */}
                {/* <Route path="pricing" element={<Pricing />} /> */}
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
