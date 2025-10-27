"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const useAnimationEffects = (options = {}) => {
  const {
    upSelector = ".mil-up",
    container = null, // Optional: Pass a container ref to scope the selector
    defaultUpAnimation = {
      opacity: 0,
      y: 40,
      scale: 0.98,
      ease: "sine",
    },
    defaultUpTo = {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.4,
    },
  } = options;

  // Use a ref to store the GSAP context
  const gsapContext = useRef(null);

  useEffect(() => {
    // Create a GSAP context to scope animations
    gsapContext.current = gsap.context(() => {
      // Select elements, scoped to container if provided
      const elements = gsap.utils.toArray(upSelector, container);

      // Use ScrollTrigger.batch for better performance
      ScrollTrigger.batch(elements, {
        // start: "top 90%", // Smooth start
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            defaultUpAnimation,
            {
              ...defaultUpTo,
              stagger: 0.1, // Optional: Add stagger for smoother effect
            }
          ),
        toggleActions: "play none none reverse",
      });

      // Optional: Refresh ScrollTrigger after a slight delay to ensure DOM is ready
      // setTimeout(() => ScrollTrigger.refresh(), 100);
    });

    // Cleanup: Only kill animations in this context
    return () => {
      gsapContext.current && gsapContext.current.revert(); // Reverts all animations and ScrollTriggers in this context
    };
  }, [upSelector, container, defaultUpAnimation, defaultUpTo]); // Add dependencies

  return gsapContext; 
};

export default useAnimationEffects;