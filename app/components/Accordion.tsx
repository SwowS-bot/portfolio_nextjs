'use client';

import { useState, useRef, useEffect } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export default function Accordion({
  title,
  children,
  defaultOpen = false,
  className = '',
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current && isOpen) {
      setMaxHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, children]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={className}>
      {/* Accordion Button */}
      <button
        onClick={toggle}
        className="btn-accordion w-full"
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span className="label-l c-white uppercase">{title}</span>
        <svg
          className={`btn-accordion__svg transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path-line"
            d="M7 11L14 18L21 11"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Accordion Content */}
      <div
        className={`accordion-wrapper ${isOpen ? 'visible' : ''}`}
        data-max-height={maxHeight}
      >
        <div ref={contentRef} className="accordion-content">
          {children}
        </div>
      </div>
      
      <style jsx>{`
        .accordion-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        .accordion-wrapper.visible {
          max-height: ${maxHeight}px;
        }
      `}</style>
    </div>
  );
}

interface AccordionItemProps {
  title: string;
  labels: string[];
  className?: string;
}

export function AccordionItem({ title, labels, className = '' }: AccordionItemProps) {
  return (
    <div className={`accordion-content__item ${className}`}>
      <div className="accordion-content__item-title label-l c-white uppercase">
        {title}
      </div>
      {labels.map((label, index) => (
        <div key={index} className="accordion-content__item-label p-s c-white-50">
          {label}
        </div>
      ))}
    </div>
  );
}
