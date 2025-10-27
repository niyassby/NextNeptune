"use client";
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

const SmoothScroll = () => {
  const location =  usePathname();
  const scrollPosition = useRef(0); 
  const isScrolling = useRef(false); 

  const scrollToTop = useCallback(() => {
    scrollPosition.current = 0; 
    isScrolling.current = false; 
    window.scrollTo(0, 0); 
  }, []);

  useEffect(() => {
    
    scrollToTop();


    const smoothScroll = (event) => {
      event.preventDefault(); // Prevent default scrolling behavior

      // Get the scroll amount
      const delta = event.deltaY || event.detail || event.wheelDelta;

      // Adjust the scroll position with a slower scroll speed
      scrollPosition.current += delta * 0.6; // Lower multiplier for slower scroll speed

      // Constrain scroll position to document bounds
      scrollPosition.current = Math.max(0, Math.min(document.body.scrollHeight - window.innerHeight, scrollPosition.current));

      // Start the animation if not already running
      if (!isScrolling.current) {
        window.requestAnimationFrame(updateScroll);
        isScrolling.current = true;
      }
    };

    const updateScroll = () => {
      const currentScroll = window.scrollY;

      const distance = scrollPosition.current - currentScroll;

      // Apply a smaller easing factor for smoother effect
      const ease = distance * 0.07; // Lower easing factor for smoother movement
      window.scrollTo(0, currentScroll + ease);

      // Continue animation until closer to the target
      if (Math.abs(distance) > 0.5) { // Lower threshold for stopping the animation
        window.requestAnimationFrame(updateScroll);
      } else {
        isScrolling.current = false;
      }
    };

    // Attach the smooth scroll function to mouse wheel events
    window.addEventListener('wheel', smoothScroll, { passive: false });

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('wheel', smoothScroll);
    };
  }, [location]);

  // return scrollToTop;
};

export default SmoothScroll;
