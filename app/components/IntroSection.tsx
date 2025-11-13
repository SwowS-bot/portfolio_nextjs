'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const portraitContainerRef = useRef<HTMLDivElement>(null);
  const baliContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animation on scroll - match original's exact behavior
    const ctx = gsap.context(() => {
      // Parallax effect on wrapper
      gsap.to(wrapperRef.current, {
        yPercent: 3.5781,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Parallax on portrait image
      gsap.to(portraitContainerRef.current, {
        y: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Parallax on bali image
      gsap.to(baliContainerRef.current, {
        y: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Card float animation
      gsap.to(leftCardRef.current, {
        x: -2.98566,
        y: 0.928433,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="intro h-screen relative">
      <div ref={wrapperRef} className="intro-wrapper w-full h-full flex flex-col desktop:flex-row">
        {/* Left Section - Portrait with Card */}
        <div className="intro-left side-60 h-full relative overflow-hidden flex flex-col justify-center py-[4.4rem]">
          <div ref={portraitContainerRef} className="absolute inset-0 w-full h-full">
            <Image
              src="/images/home-portrait.j9fpcm8e.webp"
              alt="Tran Huynh Minh Thu portrait"
              fill
              sizes="(max-width: 800px) 100vw, 60vw"
              className="img-full object-cover"
              priority
            />
          </div>
          
          <div className="paper-decor absolute bottom-0 right-0 w-[41.2rem] aspect-[412/323] pointer-events-none">
            <Image
              src="/images/paper-texture.pb017xqv.webp"
              alt="paper texture"
              fill
              sizes="412px"
              className="img-full object-cover"
            />
          </div>

          <div className="intro-left__content z-10 mx-auto max-w-[24.8rem] md:max-w-full w-[77.5%] md:w-[41.2rem] mb-[3.2rem] md:mb-0">
            <div 
              ref={leftCardRef}
              className="intro-left__card aspect-[412/488] bg-white p-[1rem] md:p-[1.6rem] flex flex-col relative"
            >
              <div className="intro-left__content-info flex justify-between">
                <p className="p-s c-black-50">Tran Huynh Minh Thu</p>
                <p className="p-s c-black-50">Based in Vietnam</p>
              </div>
              <p className="intro-left__content-pretitle p-s c-black-50 mt-auto mb-[0.8rem]">
                Junior Account | Media Producer
              </p>
              <div className="intro-left__content-title relative">
                <h1 className="h5 c-black leading-none">
                  Crafting Stories<br />Through Media Production.
                </h1>
                <p className="intro-left__content-title-num label-s c-black absolute left-[17.25rem] md:left-[31rem] top-[-1rem]">
                 
                </p>
              </div>
            </div>
          </div>

          <div className="intro-left__footer contained absolute bottom-[4.4rem] left-0 w-full px-[2.4rem]">
            <p className="split-text p-s c-white mb-[1.6rem]">
              <span className="line block">
                <span className="inner-line block"></span>
              </span>
            </p>
            <p className="split-text footer-copy label-s c-white text-center mb-[2.4rem] max-w-[50rem] mx-auto">
              <span className="line block">
                <span className="inner-line block">Producing Films, TVCs, Music Videos,</span>
              </span>
              <span className="line block">
                <span className="inner-line block">and Social Media Content for Brands & Events.</span>
              </span>
            </p>
            <p className="footer-scroll decoration c-grey text-center">Scroll down</p>
          </div>
        </div>

        {/* Right Section - Bali Image */}
        <div className="intro-right side-40 h-full relative overflow-hidden">
          <div ref={baliContainerRef} className="absolute inset-0 w-full h-full">
            <Image
              src="/images/home-bali.i3on8xff.webp"
              alt="Bali, Jatiluwih Rice Fields"
              fill
              sizes="(max-width: 800px) 100vw, 40vw"
              className="intro-right__bg object-cover"
              priority
            />
          </div>

          <div className="intro-right__header absolute top-[4.4rem] left-0 w-full px-[2.4rem] text-center">
            <p className="split-text img-pretitle decoration c-white-50 mb-[0.4rem]">
              <span className="line block">
                <span className="inner-line block"></span>
              </span>
            </p>
            <p className="split-text img-title decoration-i c-white">
              <span className="line block">
                <span className="inner-line block"></span>
              </span>
            </p>
          </div>

          <div className="intro-right__content absolute top-1/2 -translate-y-1/2 left-0 w-full px-[2.4rem]">
            <p className="split-text p-s c-white mb-[1.6rem]">
              <span className="line block">
                <span className="inner-line block"></span>
              </span>
            </p>
            <p className="split-text padded intro-right__center-top h4 c-white mb-[1.2rem]">
              <span className="line block">
                <span className="inner-line block">BEHIND</span>
              </span>
            </p>
            
            <div className="intro-right__content-center flex items-center gap-[1.2rem]">
              <p className="split-text padded h4 c-white">
                <span className="line block">
                  <span className="inner-line block">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;THE</span>
                </span>
              </p>
              <Image
                src="/images/about.jpg"
                alt="profile picture"
                width={212}
                height={212}
                sizes="121px"
                className="intro-right__picture w-[12.1rem]"
              />
              <p className="split-text padded h4 c-white">
                <span className="line block">
                  <span className="inner-line block">SCENES</span>
                </span>
              </p>
            </div>
          </div>

          <div className="intro-right__footer absolute bottom-[4.4rem] left-0 w-full px-[2.4rem]">
            <p className="split-text p-s c-white mb-[1.6rem]">
              <span className="line block">
                <span className="inner-line block"></span>
              </span>
            </p>
            <p className="split-text footer-right-copy p-l c-white text-center mb-[2.4rem] max-w-[40rem] mx-auto">
              <span className="line block">
                <span className="inner-line block">Bringing creative ideas to life</span>
              </span>
              <span className="line block">
                <span className="inner-line block">Managing productions from initial concept to final cut</span>
              </span>
            </p>
            
            <a 
              href="/through-this-lens" 
              className="btn-main p-s underline c-white block text-center group"
            >
              <span className="split-text inline-block">
                <span className="line inline-block">
                  <span className="inner-line inline-block">View Projects</span>
                </span>
              </span>
              <div className="btn-main__underline-wrapper inline-block ml-[0.4rem]">
                <div className="btn-main__underline h-[1px] w-[4rem] bg-white transition-transform duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)] origin-left scale-x-0 group-hover:scale-x-100"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
