'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutDesignerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.about-designer__title', {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="about-designer"
    >
      <div className="about-designer-wrapper">
        {/* Left Section */}
        <div className="about-designer-left side-60">
          <span className="label-l c-light-grey uppercase">ABOUT THE PRODUCER</span>
          
          <h2 className="about-designer__title h2 c-white my-1.2 mb-3.2 desktop:my-8 max-w-[69.6rem]">
            Crafting Stories, Frame by Frame
          </h2>

          <div className="about-designer__interest-list">
            <span className="p-l c-white-50">Producer</span>
            <span className="p-l c-white-50">Project Manager</span>
            <span className="p-l c-white-50">Content Creator</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="about-designer-right side-40">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full bg-black/50 z-0" />
          <div className="about-designer-right__bg">
            <Image
              src="/images/about.jpg"
              alt="About designer"
              fill
              sizes="(max-width: 800px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* Stats Card */}
          <div className="about-designer__card bg-white flex flex-col items-center justify-between p-8 max-w-sm w-full mx-auto relative z-10">
            <div className="card-item text-center mb-6">
              <span className="label-serif text-black uppercase text-xs tracking-wider">Years of Experience</span>
              <h3 className="h3 text-black text-4xl font-light mt-2">3+</h3>
            </div>

            <div className="card-item text-center mb-6">
              <h3 className="h3 text-black text-4xl font-light mb-2">30+</h3>
              <span className="label-serif text-black uppercase text-xs tracking-wider">Projects Completed</span>
            </div>

            <div className="card-item text-center">
              <span className="label-serif text-black uppercase text-xs tracking-wider">Happy Clients</span>
              <h3 className="h3 text-black text-4xl font-light mt-2">30+</h3>
            </div>
          </div>

          {/* Accordion Section - Positioned at bottom */}
          <div className="about-designer__accordion absolute bottom-0 left-0 right-0 bg-black p-6 z-[2] desktop:relative desktop:mt-8">
            {/* Skills Accordion */}
            <div className="about-designer__accordion-item mb-0.8 desktop:mb-4">
              <button
                onClick={() => setIsSkillsOpen(!isSkillsOpen)}
                className="btn-accordion flex flex-row items-center justify-between h-12 border-b border-white-50 cursor-pointer relative w-full"
              >
                <span className="h6 c-white uppercase">Skills</span>
                <svg className="btn-accordion__svg block ml-4.8 w-2.8" viewBox="0 0 28 28" fill="none">
                  <path
                    d={isSkillsOpen ? "M7 14H21" : "M14 7V21M7 14H21"}
                    stroke="currentColor"
                    strokeWidth="1.25"
                    className="c-white"
                  />
                </svg>
              </button>

              <div className={`accordion-wrapper overflow-hidden transition-all duration-500 ease-custom-accordion ${
                isSkillsOpen ? 'max-h-[500px]' : 'max-h-0'
              }`}>
                <div className="accordion-content flex flex-col desktop:grid gap-1.6 desktop:gap-2.4 desktop:grid-cols-3 pt-8 desktop:pt-2.8">
                  {['UI/UX Design', 'Graphic Design', 'Web Development', 'Photography', 'Video Editing', 'Brand Identity'].map((skill) => (
                    <div key={skill}>
                      <h4 className="accordion-content__item-title label-l c-white mb-0.8">{skill}</h4>
                      <p className="accordion-content__item-label label-s c-white-50 mb-0.4 last:mb-0">Expert Level</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools Accordion */}
            <div className="about-designer__accordion-item">
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className="btn-accordion flex flex-row items-center justify-between h-12 border-b border-white-50 cursor-pointer relative w-full"
              >
                <span className="h6 c-white uppercase">Tools</span>
                <svg className="btn-accordion__svg block ml-[4.8rem] w-[2.8rem]" viewBox="0 0 28 28" fill="none">
                  <path
                    d={isToolsOpen ? "M7 14H21" : "M14 7V21M7 14H21"}
                    stroke="currentColor"
                    strokeWidth="1.25"
                    className="c-white"
                  />
                </svg>
              </button>

              <div className={`accordion-wrapper overflow-hidden transition-all duration-500 ease-custom-accordion ${
                isToolsOpen ? 'max-h-[500px]' : 'max-h-0'
              }`}>
                <div className="accordion-content flex flex-col desktop:grid gap-1.6 desktop:gap-2.4 desktop:grid-cols-3 pt-8 desktop:pt-2.8">
                  {['Figma', 'Adobe Creative Suite', 'Sketch', 'React', 'Next.js', 'GSAP'].map((tool) => (
                    <div key={tool}>
                      <h4 className="accordion-content__item-title label-l c-white mb-0.8">{tool}</h4>
                      <p className="accordion-content__item-label label-s c-white-50 mb-1">Professional</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
