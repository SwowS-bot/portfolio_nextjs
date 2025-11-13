'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPhotoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.about-photo__title', {
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
    <section ref={sectionRef} className="about-photo bg-white flex flex-col desktop:flex-row">
      {/* Left Section */}
      <div className="about-photo-left side-60 grid grid-rows-[auto_1fr_auto] items-center p-4.4 px-1.6 desktop:p-4.4 text-center">
        <span className="label-l c-black uppercase">MY PHILOSOPHY</span>

        <div className="about-photo-copy__center flex flex-col items-center justify-center mt-3.6 desktop:mt-0">
          <p className="about-photo__pre p-l c-grey mx-auto max-w-12.8 desktop:max-w-full">
            From concept to screen, I create
          </p>

          <h2 className="about-photo__title h2 c-black my-0.8 mb-3.6 desktop:my-0.8 max-w-68">
            Stories that Connect
          </h2>

          <p className="about-photo__info p-l c-grey mx-auto max-w-24 desktop:max-w-54">
            My passion is turning ideas into valuable media products, from feature films and TVCs to social media content. Every project tells a story, every frame holds a message, and I always strive to deliver them in the most creative and impactful way.
          </p>
        </div>

        <button className="btn-description mt-1.6 desktop:mt-4.6 w-full p-l c-black uppercase border-b border-black-50 pb-4 cursor-pointer">
          VIEW MY PROJECTS
        </button>
      </div>

      {/* Right Section */}
      <div className="about-photo-right side-40 flex flex-col items-center justify-center aspect-288/417 desktop:aspect-auto desktop:h-screen p-1.6 desktop:p-8 desktop:pr-8 desktop:pl-0 relative z-0">
        <div className="about-photo-right__wrapper relative w-full h-full">
          <div className="about-photo-right__bg absolute inset-0 w-full h-full object-cover z-[-1]">
            <Image
              src="/images/project-manager-su-kien-thien-nguyen-chuyen-giay-3.png"
              alt="Photography work"
              fill
              sizes="(max-width: 800px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
