'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import ButtonArrow from './ButtonArrow';
import { worksData } from '../data/works';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeWork, setActiveWork] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Create sticky scroll for desktop
      if (window.innerWidth > 801) {
        // Pin the left sticky block (images)
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: '.sticky-block-left',
          pinSpacing: false,
        });

        // Pin the right sticky block (works list)
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: '.sticky-block-right',
          pinSpacing: false,
        });

        // Create scroll-based work switching
        const totalWorks = worksData.length;
        
        worksData.forEach((work, index) => {
          const progress = index / totalWorks;
          const nextProgress = (index + 1) / totalWorks;
          
          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: () => `top+=${progress * 100}% top`,
            end: () => `top+=${nextProgress * 100}% top`,
            onEnter: () => {
              setActiveWork(index);
            },
            onEnterBack: () => {
              setActiveWork(index);
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="works" style={{ minHeight: `${worksData.length * 100}vh` }}>
      <div className="works-wrapper">
        {/* Desktop: Display Section (Left) */}
        <div className="works-display side-60 relative hidden desktop:block">
          <div className="sticky-block-left h-screen">
            <div className="works-display__item flex flex-col items-center justify-center relative h-full">
              {/* Background Images - All stacked, controlled by opacity */}
              <div className="works-display__bg absolute inset-0 w-full h-screen z-0">
                {worksData.map((work, index) => (
                  <div key={`bg-${work.id}`} className={`item-bg absolute inset-0 transition-opacity duration-650 ease-custom ${
                    activeWork === index ? 'active opacity-20' : 'opacity-0'
                  }`}>
                    <Image src={work.backgroundImage} alt={`${work.title} background`} fill sizes="60vw" className="object-cover" priority={index === 0} />
                  </div>
                ))}
              </div>
              
              {/* Cover Images - Only show active one */}
              <div className="item-thumbnail aspect-660/400 bg-dark-bg relative w-full desktop:w-66 z-10">
                <Image 
                  src={worksData[activeWork]?.coverImage || worksData[0].coverImage} 
                  alt={worksData[activeWork]?.title || worksData[0].title} 
                  fill 
                  sizes="(max-width: 800px) 100vw, 66rem" 
                  className="object-cover transition-opacity duration-500 ease-custom" 
                  priority 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Work Items with Images */}
        <div className="works-display side-60 relative desktop:hidden">
          {worksData.map((work) => (
            <div key={work.id} className="works-display__item flex flex-col items-center justify-center relative">
              <div className="item-title__wrapper bg-black flex flex-col h-auto p-8 px-1.6 z-[2]">
                <div className="item-title__container flex flex-row pb-4.2">
                  <div className="item-number relative w-2.6 mr-8">
                    <span className="h6 c-white">{work.number}</span>
                  </div>
                  <h3 className="item-title h3 c-white pr-4">{work.title}</h3>
                  <span className="decorative-number h6 c-white-50 ml-auto">{work.number}</span>
                </div>
              </div>
              
              <div className="item-picture flex flex-col items-center justify-center h-[50svh] min-h-[280px] relative">
                <div className="item-picture__bg absolute inset-0 z-0">
                  <div className="bg-img absolute inset-0 opacity-20">
                    <Image src={work.backgroundImage} alt="" fill sizes="100vw" className="object-cover" />
                  </div>
                </div>
                <div className="item-picture__thumbnail aspect-660/400 bg-dark-bg relative w-full z-10">
                  <Image src={work.coverImage} alt={work.title} fill sizes="100vw" className="object-cover" />
                </div>
              </div>

              <div className="bg-black p-8 px-1.6 w-full">
                <button className="btn-modal w-full mb-8 p-l c-white uppercase border-b border-white-50 pb-4">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: List Section (Right) */}
        <div className="side-40 hidden desktop:block">
          <div className="sticky-block-right flex flex-col p-2.8 h-screen">
            <div className="sticky-block__header flex flex-row pb-2.8 border-b border-white-50">
              <span className="h6 c-white uppercase">Previous Works</span>
            </div>

            <div className="works-list flex-1 py-2.8 overflow-y-auto">
              {worksData.map((work, index) => (
                <div
                  key={work.id}
                  className={`works-list__item flex flex-col mb-0.4 transition-opacity duration-300 ease-custom ${
                    activeWork === index ? 'active opacity-100' : 'opacity-40 hover:opacity-65'
                  }`}
                >
                  <button 
                    className="item-btn cursor-pointer flex flex-row "
                    onClick={() => setActiveWork(index)}
                  >
                    <div className="item-number relative w-[1rem] ">
                      <span className="h7 c-white">{work.number}</span>
                    </div>
                    <h3 className="h7 c-white leading-tight">{work.title}</h3>
                    <span className="decorative-number h7 c-white-50 ml-auto">{work.number}</span>
                  </button>
                </div>
              ))}
            </div>

            <div className="sticky-block__footer mt-auto flex flex-col items-start">
              <h2 className="h3 c-light-grey mt-4">
                <span className="block">{worksData[activeWork].title.split(' ')[0]}</span>
                <span className="block">{worksData[activeWork].title.split(' ').slice(1).join(' ')}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
