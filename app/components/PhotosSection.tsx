'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { photosData } from '../data/photos';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PhotosSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activePhoto, setActivePhoto] = useState(photosData[0]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.photos-list__item', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.photos-list__wrapper',
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="photos-wrapper bg-black flex flex-col desktop:flex-row relative min-h-screen">
      <div className="photos bg-black flex flex-col desktop:flex-row w-full relative">
        {/* Photos Grid - Left Side */}
        <div className="photos-list__wrapper side-60 p-[2rem] desktop:p-[4rem] relative">
          <div className="photos-list flex flex-col desktop:grid gap-[2rem] desktop:gap-[3rem] desktop:grid-cols-2">
            {photosData.map((photo, index) => (
              <div
                key={photo.id}
                className="photos-card bg-white p-[1.5rem] desktop:p-[2rem] cursor-pointer transition-all duration-300 hover:shadow-lg"
                onMouseEnter={() => setActivePhoto(photo)}
                onClick={() => setActivePhoto(photo)}
              >
                {/* Card Number */}
                <div className="card-number text-[1.2rem] text-gray-400 mb-[1rem]">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Photo Image */}
                <div className="card-image relative w-full aspect-[4/5] mb-[2rem] overflow-hidden">
                  <Image
                    src={photo.thumbnail}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 800px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="card-content">
                  <h3 className="card-title text-[1.8rem] desktop:text-[2.2rem] font-light text-black mb-[0.5rem] uppercase leading-tight">
                    {photo.title.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h3>
                  <p className="card-location text-[1.2rem] text-gray-500 uppercase tracking-wider">
                    {photo.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Image Section - Right Side */}
        <div className="photos-bg-section side-40 sticky top-0 h-screen hidden desktop:flex flex-col justify-between bg-black p-[4rem]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src= "/images/about.jpg"
              alt="TRAN HUYNH MINH THU"
              fill
              sizes="40vw"
              className="object-cover"
              key={activePhoto.id}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Description Content */}
          <div className="photos-description__container bg-white mt-auto p-1.6 desktop:p-2.8 w-full relative z-10">
            <span className="label-l c-black uppercase">BEHIND THE PRODUCTION</span>
            <div className="photos-description__copy max-w-45">
              <p className="p-l c-grey mt-1.6">
                A showcase of collaborative work across different media. Explore the process of turning creative concepts into compelling visual content for brands, artists, and cinema.
              </p>
            </div>
            <button className="btn-description mt-1.6 desktop:mt-4.6 w-full p-l c-black uppercase border-b border-black-50 pb-2.8 cursor-pointer">
              TRAN HUYNH MINH THU
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
