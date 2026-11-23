import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface ClinicalImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ClinicalImage({ src, alt, className = '' }: ClinicalImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-slate-100 p-6 text-center text-teal-800 dark:from-slate-800 dark:to-slate-900 dark:text-teal-300 ${className}`}
      >
        <ShieldCheck className="mb-2 h-8 w-8 opacity-80" strokeWidth={1.5} />
        <span className="max-w-xs text-xs font-medium text-slate-600 dark:text-slate-300">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
