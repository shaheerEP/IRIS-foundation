"use client";

import { useState, useEffect, useRef } from "react";

export default function CountUp({ end, duration = 2000, suffix = "" }) {
  const [value, setValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  // SMART STARTING NUMBER
  const getStartValue = (num: number) => {
    if (num < 100) return 0;
    if (num < 1000) return num - 50;
    if (num < 10000) return num - 500;
    return num - 2000;
  };

  useEffect(() => {
    const startValue = getStartValue(end);
    setValue(startValue);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let current = startValue;
          const increment = (end - startValue) / (duration / 16);

          const counter = setInterval(() => {
            current += increment;
            if (current >= end) {
              clearInterval(counter);
              setValue(end);
            } else {
              setValue(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={elementRef}>{value + suffix}</span>;
}
