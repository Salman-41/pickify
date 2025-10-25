"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  separator?: string;
  className?: string;
  start?: number;
  delay?: number;
  useEasing?: boolean;
  easingFn?: (t: number) => number;
}

export function CountUp({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ",",
  className = "",
  start = 0,
  delay = 0,
  useEasing = true,
  easingFn = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
}: CountUpProps) {
  const [displayValue, setDisplayValue] = useState(start);
  const countRef = useRef(start);
  const animationRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const startAnimation = () => {
      const animate = (currentTime: number) => {
        if (!startTimeRef.current) startTimeRef.current = currentTime;

        const elapsed = currentTime - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);

        const easedProgress = useEasing ? easingFn(progress) : progress;
        const currentValue = Math.round(start + (end - start) * easedProgress);

        if (currentValue !== countRef.current) {
          countRef.current = currentValue;
          setDisplayValue(currentValue);
        }

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setDisplayValue(end);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    if (delay > 0) {
      const timeoutId = setTimeout(startAnimation, delay);
      return () => clearTimeout(timeoutId);
    } else {
      startAnimation();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, duration, start, delay, useEasing, easingFn]);

  const formatNumber = (num: number): string => {
    // Handle large numbers specially
    if (num >= 1000000) {
      const millions = num / 1000000;
      return `${millions.toFixed(decimals)}M`;
    }

    const fixed = num.toFixed(decimals);
    const parts = fixed.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join(".");
  };

  return (
    <span className={className}>
      {prefix}
      {formatNumber(displayValue)}
      {suffix}
    </span>
  );
}

// Easing functions
export const easingFunctions = {
  linear: (t: number) => t,
  easeOutCubic: (t: number) => 1 - Math.pow(1 - t, 3),
  easeOutQuart: (t: number) => 1 - Math.pow(1 - t, 4),
  easeOutQuint: (t: number) => 1 - Math.pow(1 - t, 5),
  easeInOutCubic: (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
};
