import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import IntroAnimation from './components/IntroAnimation';

// Helper component to handle the redirect inside the Router context
function InitialRedirect() {
  React.useEffect(() => {
    // If the user lands on any path other than root, redirect them to root on first load
    if (window.location.pathname !== '/') {
      window.location.replace('/');
    }
  }, []);
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
      
      {/* 
        Keep BrowserRouter mounted but hidden so layout shift isn't jarring 
        when the intro finishes.
      */}
      <div className={introFinished ? 'opacity-100 transition-opacity duration-1000' : 'fixed inset-0 opacity-0 pointer-events-none z-[-1]'}>
        <BrowserRouter>
          <InitialRedirect />
          <AppRouter />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
