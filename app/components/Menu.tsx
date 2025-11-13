'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    const tl = gsap.timeline();

    if (isOpen) {
      // Open animation
      tl.to(bgRef.current, {
        scaleY: 1,
        duration: 0.8,
        ease: 'power3.inOut',
      })
      .to(borderRef.current, {
        scaleX: 1,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      .to('.nav-text-line-home, .nav-text-line-photo', {
        yPercent: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
      }, '-=0.3');
    } else {
      // Close animation
      tl.to('.nav-text-line-home, .nav-text-line-photo', {
        yPercent: 110,
        duration: 0.6,
        stagger: 0.03,
        ease: 'power2.in',
      })
      .to(borderRef.current, {
        scaleX: 0,
        duration: 0.4,
        ease: 'power2.in',
      }, '-=0.4')
      .to(bgRef.current, {
        scaleY: 0,
        duration: 0.7,
        ease: 'power3.inOut',
      }, '-=0.3');
    }

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  return (
    <div 
      ref={menuRef}
      className={`menu w-full h-full fixed inset-0 z-[55] pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}`}
    >
      {/* Background */}
      <div 
        ref={bgRef}
        className="menu__bg w-full h-full bg-black origin-top scale-y-0"
      />
      
      {/* Border */}
      <div 
        ref={borderRef}
        className="menu__border w-full h-[1px] bg-white-50 absolute top-[8rem] desktop:top-[12rem] left-0 origin-left scale-x-0"
      />

      {/* Content */}
      <div className="menu__wrapper w-full h-full absolute inset-0 flex flex-col justify-between p-2.4 desktop:p-4.4 pt-[10rem] desktop:pt-[14rem]">
        <nav>
          <ul className="nav-list">
            {/* Home / Design Link */}
            <li className="nav-list__item mb-4 desktop:mb-8">
              <a 
                href="/" 
                className="nav-link block group"
                onClick={onClose}
              >
                <div className="nav-link__content">
                  <span className="nav-block">
                    <span className="nav-numbered nav-inline h2 flex items-baseline gap-4">
                      <span className="split-wrapper overflow-hidden">
                        <span className="nav-text-line-home split-element block translate-y-[110%]">
                          Crafting Stories
                        </span>
                      </span>
                      <span className="nav-number p-s c-white-50">&#123;01&#125;</span>
                    </span>
                    <span className="nav-inline h2 flex items-baseline gap-2">
                      <span className="split-wrapper overflow-hidden">
                        <span className="nav-text-line-home split-element block translate-y-[110%]">
                          Through
                        </span>
                      </span>
                      <span className="nav-photo w-[4rem] h-[4rem] bg-white/10"></span>
                      <span className="split-wrapper alone-word overflow-hidden">
                        <span className="nav-text-line-home split-element block translate-y-[110%]">
                          Media Production
                        </span>
                      </span>
                    </span>
                  </span>
                  
                  {/* Arrow */}
                  <span className="arrow nav-arrow inline-block w-[3.3rem] h-[3.2rem] ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" className="w-full h-full">
                      <path className="arrow-stroke stroke-white fill-none stroke-[1.5]" d="m28 12 3.9 3.9v.1L28 20" />
                      <path className="arrow-stroke stroke-white fill-none stroke-[1.5]" d="M1.1 16h30.8" />
                    </svg>
                  </span>
                </div>
                <span className="nav-border w-full h-[1px] bg-white-50 block mt-4"></span>
              </a>
            </li>

            {/* Photography Link */}
            <li className="nav-list__item">
              <a 
                href="/through-this-lens" 
                className="nav-link block group"
                onClick={onClose}
              >
                <div className="nav-link__content">
                  <span className="nav-block">
                    <span className="nav-numbered nav-inline h2 flex items-baseline gap-4">
                      <span className="split-wrapper overflow-hidden">
                        <span className="nav-text-line-photo split-element block translate-y-[110%]">
                          The World
                        </span>
                      </span>
                      <span className="nav-photo w-[4rem] h-[4rem] bg-white/10"></span>
                      <span className="split-wrapper alone-word overflow-hidden">
                        <span className="nav-text-line-photo split-element block translate-y-[110%]">
                          Unfold
                        </span>
                      </span>
                      <span className="nav-number p-s c-white-50">&#123;02&#125;</span>
                    </span>
                  </span>
                  
                  {/* Arrow */}
                  <span className="arrow nav-arrow inline-block w-[3.3rem] h-[3.2rem] ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" className="w-full h-full">
                      <path className="arrow-stroke stroke-white fill-none stroke-[1.5]" d="m28 12 3.9 3.9v.1L28 20" />
                      <path className="arrow-stroke stroke-white fill-none stroke-[1.5]" d="M1.1 16h30.8" />
                    </svg>
                  </span>
                </div>
                <span className="nav-border w-full h-[1px] bg-white-50 block mt-4"></span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Secondary Menu */}
        <div className="menu-secondary grid grid-cols-1 desktop:grid-cols-3 gap-8 desktop:gap-4 mt-auto pt-8">
          {/* Projects List */}
          <div className="menu-list__wrapper">
            <p className="menu-list__title label-s c-white-50 mb-4">
              <span className="menu-list__title-line">PROJECTS (06)</span>
            </p>
            <ul className="menu-list space-y-2">
              {['Oakley Project 2075', 'Loro Piana at Harrods', 'MONOGRID 2024 Redesign', 'HBO House of the Dragon App', 'Heineken The Boring Phone', 'Expo 58 Museum Experience'].map((project) => (
                <li key={project} className="menu-list__item p-s">
                  <div className="menu-list__item-container">
                    <button className="menu-list__item-link c-white hover:c-white-50 transition-colors duration-300">
                      {project}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Chapters List */}
          <div className="menu-list__wrapper">
            <p className="menu-list__title label-s c-white-50 mb-4">
              <span className="menu-list__title-line">CHAPTERS (06)</span>
            </p>
            <ul className="menu-list space-y-2">
              {['Lofoten', 'Bali & Lombok', 'New York', 'Italian Landscapes', 'San Francisco', 'Canary Islands'].map((chapter) => (
                <li key={chapter} className="menu-list__item p-s">
                  <div className="menu-list__item-container">
                    <a 
                      href={`/through-this-lens#${chapter.toLowerCase().replace(/\s+/g, '-')}`}
                      className="menu-list__item-link c-white hover:c-white-50 transition-colors duration-300"
                      onClick={onClose}
                    >
                      {chapter}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <ul className="socials space-y-2">
            <li className="socials__item p-s">
              <a className="socials__item-link c-white hover:c-white-50 transition-colors duration-300" href="https://www.instagram.com/gianlucagradogna/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li className="socials__item p-s">
              <a className="socials__item-link c-white hover:c-white-50 transition-colors duration-300" href="https://www.linkedin.com/in/gianluca-gradogna-099995177/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="socials__item p-s">
              <a className="socials__item-link c-white hover:c-white-50 transition-colors duration-300" href="https://www.awwwards.com/jury-member/gianluca-gradogna" target="_blank" rel="noopener noreferrer">
                Awwwards
              </a>
            </li>
            <li className="socials__item item-credits p-s c-white-50">
              &#123; Dev by <a className="socials__item-link c-white hover:c-white-50 transition-colors duration-300" href="https://gnrm.se/" target="_blank" rel="noopener noreferrer">gnrm.se</a> &#125;
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
