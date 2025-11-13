'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  workData?: {
    title: string;
    role: string[];
    year: string;
    description: string;
    images: string[];
    url?: string;
  };
}

export default function WorkModal({ isOpen, onClose, workData }: WorkModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalRef.current) return;

    const tl = gsap.timeline();

    if (isOpen) {
      // Open animation
      document.body.style.overflow = 'hidden';
      
      tl.set(modalRef.current, { display: 'block' })
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
      .set(modalRef.current, { display: 'none' })
      .call(() => {
        document.body.style.overflow = '';
      });
    }

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  if (!workData) return null;

  return (
    <div 
      ref={modalRef}
      className="work-modal w-full h-full fixed inset-0 z-[70] hidden"
    >
      {/* Background */}
      <div 
        ref={bgRef}
        className="modal-bg absolute inset-0 w-full h-full bg-black/95 opacity-0"
        onClick={onClose}
      />

      {/* Content */}
      <div 
        ref={contentRef}
        className="modal-content relative w-full h-full flex flex-col desktop:flex-row opacity-0 translate-y-[50px] overflow-y-auto"
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
        <div className="modal-actions absolute top-[2.4rem] left-[2.4rem] desktop:top-[4.4rem] desktop:left-[4.4rem] flex gap-4 z-10">
          <button className="btn-prev p-s c-white opacity-50 cursor-not-allowed">
            <span className="split-text">
              <span className="line inline-block overflow-hidden">
                <span className="modal-text inner-line inline-block translate-y-[110%]">Prev</span>
              </span>
            </span>
          </button>
          <button className="btn-next p-s c-white opacity-50 cursor-not-allowed">
            <span className="split-text">
              <span className="line inline-block overflow-hidden">
                <span className="modal-text inner-line inline-block translate-y-[110%]">Next</span>
              </span>
            </span>
          </button>
        </div>

        {/* Left Section - Images */}
        <div className="modal-left side-60 h-full p-4.4 pt-[12rem] desktop:pt-[12rem]">
          <h2 className="modal-title h2 c-light-grey mb-8 overflow-hidden">
            <span className="modal-text block translate-y-[110%]">{workData.title}</span>
          </h2>

          <ul className="modal-imgs space-y-8">
            {workData.images.map((img, index) => (
              <li key={index} className="item-img w-full">
                <div className="relative w-full aspect-video">
                  <Image
                    src={img}
                    alt={`${workData.title} image ${index + 1}`}
                    fill
                    sizes="(max-width: 800px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Details */}
        <div className="modal-right side-40 h-full p-4.4 pt-[12rem] desktop:pt-[12rem] flex flex-col">
          {/* Role List */}
          <div className="modal-lists mb-8">
            <div className="modal-list">
              <p className="list__title clip decoration c-light-grey mb-4 overflow-hidden">
                <span className="modal-text block translate-y-[110%]">ROLE</span>
              </p>
              <ul className="list space-y-2">
                {workData.role.map((role, index) => (
                  <li key={index} className="p-l c-white overflow-hidden">
                    <span className="modal-text block translate-y-[110%]">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Description */}
          <div className="modal-description__wrapper flex-1">
            <p className="modal-year clip p-s c-light-grey mb-4 overflow-hidden">
              <span className="modal-text block translate-y-[110%]">{workData.year}</span>
            </p>
            <p className="modal-description h5b c-light-grey mb-8 overflow-hidden">
              <span className="modal-text block translate-y-[110%]">{workData.description}</span>
            </p>

            {workData.url && (
              <a
                href={workData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-url w-full p-l c-light-grey inline-flex items-center gap-[0.8rem] group mt-auto"
              >
                <span className="split-text">
                  <span className="line inline-block overflow-hidden">
                    <span className="modal-text inner-line inline-block translate-y-[110%]">Visit Site</span>
                  </span>
                </span>
                
                {/* Arrow Icon */}
                <span className="arrow inline-block w-[3.3rem] h-[3.2rem]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" className="w-full h-full">
                    <path className="arrow-stroke stroke-current fill-none stroke-[1.5]" d="m28 12 3.9 3.9v.1L28 20" />
                    <path className="arrow-stroke stroke-current fill-none stroke-[1.5]" d="M1.1 16h30.8" />
                  </svg>
                </span>
                
                {/* Animated Border */}
                <span className="btn-arrow__border-wrapper absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
                  <span className="btn-arrow__border absolute inset-0 w-full h-full bg-current -translate-x-[102%] transition-transform duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:translate-x-0"></span>
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
