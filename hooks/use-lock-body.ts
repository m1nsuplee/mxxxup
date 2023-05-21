import { useLayoutEffect } from 'react';

export const useLockBody = (isActive: boolean) => {
  useLayoutEffect(() => {
    if (isActive) {
      const originalStyle = window.getComputedStyle(document.body).overflow;

      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isActive]);
};
