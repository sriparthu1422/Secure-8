import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow pt-20 lg:pt-24 flex flex-col w-full"> {/* offsets the fixed header */}
                <PageTransition>
                    <div className="flex-grow w-full">
                        <Outlet />
                    </div>
                </PageTransition>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
