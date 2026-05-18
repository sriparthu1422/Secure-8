import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

// Lazy load Pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Academics = lazy(() => import('../pages/Academics'));
const ServiceDetails = lazy(() => import('../pages/ServiceDetails'));
// const CaseStudies = lazy(() => import('../pages/CaseStudies'));
// const CaseStudyDetails = lazy(() => import('../pages/CaseStudyDetails'));
// const Blog = lazy(() => import('../pages/Blog'));
// const BlogDetails = lazy(() => import('../pages/BlogDetails'));
// const Pricing = lazy(() => import('../pages/Pricing'));
const Contact = lazy(() => import('../pages/Contact'));

// Loading Fallback Component
const PageLoader = () => (
    <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-accent-blue border-t-accent-cyan rounded-full animate-spin"></div>
    </div>
);

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="services/:id" element={<ServiceDetails />} />
                    <Route path="academics" element={<Academics />} />
                    <Route path="academics/:id" element={<ServiceDetails />} />
                    {/* <Route path="case-studies" element={<CaseStudies />} /> */}
                    {/* <Route path="case-studies/:id" element={<CaseStudyDetails />} /> */}
                    {/* <Route path="blog" element={<Blog />} /> */}
                    {/* <Route path="blog/:id" element={<BlogDetails />} /> */}
                    {/* <Route path="pricing" element={<Pricing />} /> */}
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
