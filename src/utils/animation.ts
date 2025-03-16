
import { ReactNode } from 'react';

export type FadeDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export interface AnimateProps {
  children: ReactNode;
  className?: string;
  delay?: number; // in ms
  duration?: number; // in ms
  direction?: FadeDirection;
}

export const getAnimationClasses = (
  direction: FadeDirection = 'up',
  duration: number = 300,
  delay: number = 0
): string => {
  const baseClasses = `animate-in duration-${duration} ease-expo`;
  const delayClass = delay > 0 ? ` delay-${delay}` : '';
  
  switch (direction) {
    case 'up':
      return `${baseClasses} fade-in slide-in-from-bottom-4${delayClass}`;
    case 'down':
      return `${baseClasses} fade-in slide-in-from-top-4${delayClass}`;
    case 'left':
      return `${baseClasses} fade-in slide-in-from-right-4${delayClass}`;
    case 'right':
      return `${baseClasses} fade-in slide-in-from-left-4${delayClass}`;
    case 'none':
    default:
      return `${baseClasses} fade-in${delayClass}`;
  }
};

// Stagger children animations
export const staggerChildren = (
  count: number, 
  baseDelay: number = 100, 
  increment: number = 50
): number[] => {
  return Array.from({ length: count }, (_, i) => baseDelay + i * increment);
};
