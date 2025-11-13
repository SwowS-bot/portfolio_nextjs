'use client';

interface ButtonArrowProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function ButtonArrow({ 
  children, 
  href, 
  onClick,
  className = '', 
  disabled = false 
}: ButtonArrowProps) {
  const baseClasses = `btn-arrow p-l inline-flex items-center gap-[0.8rem] relative group cursor-pointer transition-opacity duration-300 ${className}`;
  const disabledClasses = disabled ? 'opacity-50 pointer-events-none' : '';
  
  const content = (
    <>
      <span className="split-text">
        <span className="line inline-block">
          <span className="inner-line inline-block">{children}</span>
        </span>
      </span>
      
      {/* Arrow Icon */}
      <span className="arrow btn-arrow__icon inline-block w-[3.3rem] h-[3.2rem]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" className="w-full h-full">
          <path 
            className="arrow-stroke stroke-current fill-none stroke-[1.5]" 
            d="m28 12 3.9 3.9v.1L28 20"
          />
          <path 
            className="arrow-stroke stroke-current fill-none stroke-[1.5]" 
            d="M1.1 16h30.8"
          />
        </svg>
      </span>
      
      {/* Animated Border - slides in from left on hover */}
      <span className="btn-arrow__border-wrapper absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
        <span className="btn-arrow__border absolute inset-0 w-full h-full bg-current -translate-x-[102%] transition-transform duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:translate-x-0"></span>
      </span>
    </>
  );

  if (href) {
    return (
      <a 
        href={href}
        className={`${baseClasses} ${disabledClasses}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabledClasses}`}
    >
      {content}
    </button>
  );
}
