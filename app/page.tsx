'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import PreLoader from './components/PreLoader';
import Header from './components/Header';
import Menu from './components/Menu';
import IntroSection from './components/IntroSection';
import WorksSection from './components/WorksSection';
import AboutDesignerSection from './components/AboutDesignerSection';
import AboutPhotoSection from './components/AboutPhotoSection';
import PhotosSection from './components/PhotosSection';
import WorkModal from './components/WorkModal';
import PhotosModal from './components/PhotosModal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const appRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false);
  const [isPhotosModalOpen, setIsPhotosModalOpen] = useState(false);

  useEffect(() => {
    // Initialize GSAP and ScrollTrigger
    if (appRef.current) {
      // Add dark class to app
      appRef.current.classList.add('dark');
    }

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Sample work data - replace with actual data
  const sampleWorkData = {
    title: 'Oakley Project 2075',
    role: ['Design', 'Development', 'Art Direction'],
    year: '2024',
    description: 'A futuristic vision of Oakley\'s brand identity, blending cutting-edge technology with timeless design principles.',
    images: [
      '/images/oakley-project-2075-cover.ktwjws01.webp',
      '/images/oakley-project-2075-bg.fwzpfjax.webp',
    ],
    url: 'https://example.com',
  };

  // Sample photos data - replace with actual data
  const samplePhotosData = {
    location: 'Lofoten',
    country: 'Norway',
    images: [
      '/images/lofoten-miniature.lqepoayn.webp',
      '/images/home-portrait.j9fpcm8e.webp',
    ],
  };

  return (
    <>
      <div id="highlight-container" />
      <PreLoader onLoadComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <>
          <Header onMenuClick={() => setIsMenuOpen(true)} />
          <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
          <WorkModal 
            isOpen={isWorkModalOpen} 
            onClose={() => setIsWorkModalOpen(false)}
            workData={sampleWorkData}
          />
          <PhotosModal 
            isOpen={isPhotosModalOpen} 
            onClose={() => setIsPhotosModalOpen(false)}
            photos={samplePhotosData}
          />
        </>
      )}
      
      <main id="app" ref={appRef}>
        <div className="page">
          <div className="page-content">
            {!isLoading && (
              <>
                <IntroSection />
                <WorksSection />
                <AboutDesignerSection />
                <AboutPhotoSection />
                <PhotosSection />
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
