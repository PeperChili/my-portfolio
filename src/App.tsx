import React, { useState, useEffect } from 'react';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Works } from './components/Works';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [bgColor, setBgColor] = useState('#4285F4');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjust to trigger when section is mostly in view
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const sections = ['home', 'about', 'experience', 'works'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-blue-500 selection:text-white scroll-smooth">
      <Background color={bgColor} />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="relative z-10">
        <Home />
        <About />
        <Experience onHover={setBgColor} />
        <Works />
      </main>

      {/* Footer or subtle branding */}
      <footer className="fixed bottom-8 left-12 z-50 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
        © 2026 PeperChili Portfolio
      </footer>
    </div>
  );
}
