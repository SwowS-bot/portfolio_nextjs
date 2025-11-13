'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';

interface SplitTextProps {
  children: ReactNode;
  className?: string;
  animateOnMount?: boolean;
  delay?: number;
  stagger?: number;
  duration?: number;
  ease?: string;
  padded?: boolean;
}

/**
 * SplitText component that splits text into lines and animates them
 * Matches the original Vue SplitText functionality
 */
export default function SplitText({
  children,
  className = '',
  animateOnMount = true,
  delay = 0,
  stagger = 0.05,
  duration = 0.8,
  ease = 'power3.out',
  padded = false,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current || !animateOnMount) return;

    const lines = linesRef.current.filter(Boolean);
    if (lines.length === 0) return;

    // Set initial state
    gsap.set(lines, { yPercent: 110 });

    // Animate in
    gsap.to(lines, {
      yPercent: 0,
      duration,
      ease,
      delay,
      stagger,
    });
  }, [animateOnMount, delay, stagger, duration, ease]);

  // Split text into lines manually based on content
  const splitIntoLines = (text: string): string[] => {
    // For now, return as single line
    // In a real implementation, you'd use a library like SplitType or split-type
    return [text];
  };

  const renderContent = () => {
    if (typeof children === 'string') {
      const lines = splitIntoLines(children);
      return lines.map((line, index) => (
        <div key={index} className="line">
          <div
            ref={(el) => {
              if (el) linesRef.current[index] = el;
            }}
            className="text-line"
          >
            {line}
          </div>
        </div>
      ));
    }
    return children;
  };

  return (
    <div
      ref={containerRef}
      className={`split-text ${padded ? 'padded' : ''} ${className}`}
    >
      {renderContent()}
    </div>
  );
}

/**
 * Hook to manually control split text animations
 */
export function useSplitText() {
  const animateLines = (
    elements: HTMLElement[],
    options: {
      delay?: number;
      stagger?: number;
      duration?: number;
      ease?: string;
    } = {}
  ) => {
    const { delay = 0, stagger = 0.05, duration = 0.8, ease = 'power3.out' } = options;

    gsap.set(elements, { yPercent: 110 });
    gsap.to(elements, {
      yPercent: 0,
      duration,
      ease,
      delay,
      stagger,
    });
  };

  const hideLines = (elements: HTMLElement[]) => {
    gsap.set(elements, { yPercent: 110 });
  };

  return { animateLines, hideLines };
}
