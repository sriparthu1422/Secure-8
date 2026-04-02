import React, { useState, useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import IntroAnimation from './components/IntroAnimation';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  // Fallback to prevent users getting stuck
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, 5000); // hard cutoff
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!introFinished && <IntroAnimation onComplete={() => setIntroFinished(true)} />}
      
      <div className={introFinished ? 'opacity-100 transition-opacity duration-1000' : 'fixed inset-0 opacity-0 pointer-events-none z-[-1]'}>
        <BrowserRouter>
          <ScrollToTop />
          <AppRouter />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
