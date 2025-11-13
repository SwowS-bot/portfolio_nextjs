'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

interface PhotosModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos?: {
    location: string;
    country: string;
    images: string[];
  };
}

export default function PhotosModal({ isOpen, onClose, photos }: PhotosModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!modalRef.current) return;

    const tl = gsap.timeline();

    if (isOpen) {
      // Open animation
      document.body.style.overflow = 'hidden';
      
      tl.set(modalRef.current, { display: 'block', visibility: 'visible' })
        .to(bgRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
        })
        .to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.3')
        .to('.modal-text', {
          yPercent: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power3.out',
        }, '-=0.5');
    } else {
      // Close animation
      tl.to('.modal-text', {
        yPercent: 110,
        duration: 0.5,
        stagger: 0.03,
        ease: 'power2.in',
      })
      .to(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: 'power2.in',
      }, '-=0.3')
      .to(bgRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      }, '-=0.4')
      .set(modalRef.current, { display: 'none', visibility: 'hidden' })
      .call(() => {
        document.body.style.overflow = '';
        setCurrentIndex(0);
      });
    }

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  const handleNext = () => {
    if (!photos || currentIndex >= photos.images.length - 1) return;
    
    gsap.to('.item-img.current', {
      y: '-91vh',
      duration: 0.8,
      ease: 'power3.inOut',
      onComplete: () => setCurrentIndex(currentIndex + 1),
    });
  };

  const handlePrev = () => {
    if (currentIndex <= 0) return;
    
    gsap.to('.item-img.current', {
      y: '91vh',
      duration: 0.8,
      ease: 'power3.inOut',
      onComplete: () => setCurrentIndex(currentIndex - 1),
    });
  };

  if (!photos) return null;

  return (
    <div 
      ref={modalRef}
      className="photos-modal w-full h-full fixed inset-0 z-[70] hidden invisible"
    >
      {/* Background */}
      <div 
        ref={bgRef}
        className="modal-bg absolute inset-0 w-full h-full bg-black opacity-0"
        onClick={onClose}
      />

      {/* Content */}
      <div 
        ref={contentRef}
        className="modal-content relative w-full h-full flex flex-col desktop:flex-row opacity-0 translate-y-[50px]"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="btn-close absolute top-[2.4rem] right-[2.4rem] desktop:top-[4.4rem] desktop:right-[4.4rem] p-s c-white z-10 group"
        >
          <span className="split-text">
            <span className="line inline-block overflow-hidden">
              <span className="modal-text inner-line inline-block translate-y-[110%]">Close</span>
            </span>
          </span>
          <div className="btn-main__underline-wrapper inline-block ml-[0.4rem]">
            <div className="btn-main__underline h-[1px] w-[4rem] bg-white transition-transform duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)] origin-left scale-x-0 group-hover:scale-x-100"></div>
          </div>
        </button>

        {/* Modal Actions (Prev/Next) */}
        <div className="modal-actions absolute bottom-[2.4rem] left-[2.4rem] desktop:bottom-[4.4rem] desktop:left-[4.4rem] flex gap-4 z-10">
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`btn-prev p-s c-white ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'group'}`}
          >
            <span className="split-text">
              <span className="line inline-block overflow-hidden">
                <span className="modal-text inner-line inline-block translate-y-[110%]">Prev</span>
              </span>
            </span>
            {currentIndex > 0 && (
              <div className="btn-main__underline-wrapper inline-block ml-[0.4rem]">
                <div className="btn-main__underline h-[1px] w-[4rem] bg-white transition-transform duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)] origin-left scale-x-0 group-hover:scale-x-100"></div>
              </div>
            )}
          </button>
          
          <button 
            onClick={handleNext}
            disabled={currentIndex >= photos.images.length - 1}
            className={`btn-next p-s c-white ${currentIndex >= photos.images.length - 1 ? 'opacity-50 cursor-not-allowed' : 'group'}`}
          >
            <span className="split-text">
              <span className="line inline-block overflow-hidden">
                <span className="modal-text inner-line inline-block translate-y-[110%]">Next</span>
              </span>
            </span>
            {currentIndex < photos.images.length - 1 && (
              <div className="btn-main__underline-wrapper inline-block ml-[0.4rem]">
                <div className="btn-main__underline h-[1px] w-[4rem] bg-white transition-transform duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)] origin-left scale-x-0 group-hover:scale-x-100"></div>
              </div>
            )}
          </button>
        </div>

        {/* Image Counter */}
        <div className="absolute top-[2.4rem] left-[2.4rem] desktop:top-[4.4rem] desktop:left-[4.4rem] p-s c-white z-10">
          <span className="overflow-hidden inline-block">
            <span className="modal-text block translate-y-[110%]">
              {String(currentIndex + 1).padStart(2, '0')} / {String(photos.images.length).padStart(2, '0')}
            </span>
          </span>
        </div>

        {/* Images Carousel */}
        <div className="modal-images w-full h-full relative overflow-hidden">
          {/* Location Info */}
          <div className="absolute top-1/2 left-[2.4rem] desktop:left-[4.4rem] -translate-y-1/2 z-10">
            <p className="decoration-i c-white text-6xl desktop:text-8xl mb-2 overflow-hidden">
              <span className="modal-text block translate-y-[110%]">{photos.location}</span>
            </p>
            <p className="decoration c-white-50 text-xl overflow-hidden">
              <span className="modal-text block translate-y-[110%]">{photos.country}</span>
            </p>
          </div>

          {/* Image Stack */}
          <div className="relative w-full h-full">
            {photos.images.map((img, index) => {
              let positionClass = '';
              if (index === currentIndex) positionClass = 'current translate-y-0';
              else if (index < currentIndex) positionClass = 'prev -translate-y-[91vh]';
              else positionClass = 'next translate-y-[91vh]';

              return (
                <div
                  key={index}
                  className={`item-img absolute inset-0 w-full h-full transition-transform duration-800 ease-[cubic-bezier(0.77,0,0.175,1)] ${positionClass}`}
                >
                  <Image
                    src={img}
                    alt={`${photos.location} ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
