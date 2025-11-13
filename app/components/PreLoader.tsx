'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreLoaderProps {
  onLoadComplete: () => void;
}

export default function PreLoader({ onLoadComplete }: PreLoaderProps) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);
  const fillingSectionRef = useRef<HTMLDivElement>(null);
  const loadingTextRef = useRef<HTMLSpanElement>(null);
  const numberTextRef = useRef<HTMLSpanElement>(null);
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressValueRef = useRef({ value: 0 });

  const displayProgress = Math.round(progress);

  useEffect(() => {
    // CORRECTED: Use GSAP quickTo for smooth progress updates (1s duration, power1.out)
    // This matches the original Vue implementation exactly
    const quickToProgress = gsap.quickTo(progressValueRef.current, 'value', {
      duration: 1,           // 1 second smooth transition (NOT 0.3s)
      ease: 'power1.out',    // power1.out (NOT power2.out)
      onUpdate: () => {
        setProgress(progressValueRef.current.value * 100);
      }
    });

    // Simulate asset loading with random increments
    // SLOWED DOWN for testing/comparison (change 500 back to 100 for production)
    let currentProgress = 0;
    const interval = setInterval(() => {
      const increment = Math.random() * 0.05; // Random 0-5% (SLOWED from 0-15%)
      currentProgress += increment;
      
      if (currentProgress >= 1) {
        currentProgress = 1;
        clearInterval(interval);
        setIsLoaded(true);
      }
      
      quickToProgress(currentProgress);
    }, 100); // SLOWED: 500ms interval (was 100ms) for easier viewing

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!fillingSectionRef.current) return;
    
    // CORRECTED: Direct scaleX animation (no CSS variables)
    gsap.set(fillingSectionRef.current, {
      scaleX: progress / 100
    });
  }, [progress]);

  useEffect(() => {
    if (!isLoaded) return;

    // CORRECTED: Exit animation matching original Vue implementation
    // Original timing: text exits (750ms, power3.in, stagger 200ms) → sections slide (1200ms, expo.inOut, start at 575ms)
    const exitTimeline = gsap.timeline({
      onComplete: () => {
        onLoadComplete();
      }
    });

    // STEP 1: Text elements exit UP with stagger
    exitTimeline.to([loadingTextRef.current, numberTextRef.current], {
      yPercent: -101,        // -101% (NOT -100%)
      duration: 0.75,        // 750ms (NOT 900ms)
      ease: 'power3.in',     // power3.in (NOT power2.inOut) - faster acceleration
      stagger: 0.2,          // 200ms stagger between elements
    }, 0);

    // STEP 2: Left section slides UP
    exitTimeline.to(leftSectionRef.current, {
      yPercent: -101,        // -101% (NOT -100%)
      duration: 1.2,         // 1200ms (NOT 900ms)
      ease: 'expo.inOut',    // expo.inOut (NOT power2.inOut) - exponential easing
    }, 0.575);               // Start at 575ms (NOT 300ms)

    // STEP 3: Right section slides RIGHT (simultaneous with left)
    exitTimeline.to(rightSectionRef.current, {
      xPercent: 101,         // Move RIGHT 101% (NOT left, NOT up!)
      duration: 1.2,         // 1200ms
      ease: 'expo.inOut',    // expo.inOut
    }, 0.575);               // Start at 575ms (same as left section)

  }, [isLoaded, onLoadComplete]);

  return (
    <div ref={preloaderRef} className="preloader fixed inset-0 z-[9999] flex flex-row overflow-hidden w-full">
      {/* LEFT SECTION - 60% width, BLACK background with text */}
      <div 
        ref={leftSectionRef}
        className="preloader-section side-60 bg-black h-full relative overflow-hidden"
      >
        {/* Loading label - positioned top-left */}
        <div className="loading-label c-light-grey overflow-hidden ml-[1.6rem] mt-[1.6rem] desktop:ml-[2.4rem] desktop:mt-[2rem]">
          <span ref={loadingTextRef} className="loading-span inline-block label-s">
            Loading
          </span>
        </div>

        {/* Progress number - positioned bottom-left */}
        <div className="preloader-number absolute bottom-0 left-[1.6rem] desktop:bottom-[2rem] desktop:left-[2rem] c-light-grey overflow-hidden">
          <span ref={numberTextRef} className="number-span inline-block h6">
            {displayProgress}%
          </span>
        </div>
      </div>

      {/* RIGHT SECTION - 40% width, BLACK background (transparent on mobile, black on desktop) */}
      <div 
        ref={rightSectionRef}
        className="section-right side-40 h-full overflow-hidden absolute top-0 left-0 desktop:relative desktop:bg-black"
      >
        {/* Filling section - dark gray bar (#0d0d0d) that scales from left */}
        <div 
          ref={fillingSectionRef}
          className="filling-section h-full w-full origin-left bg-[#0d0d0d]"
        />
      </div>
    </div>
  );
}
