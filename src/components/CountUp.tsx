
import { useEffect, useState, useRef } from "react";

interface CountUpProps {
  end: number | string;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  threshold?: number;
  rootMargin?: string;
}

const CountUp = ({ 
  end, 
  duration = 2000, 
  prefix = "", 
  suffix = "", 
  decimals = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px"
}: CountUpProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);
  const targetNumber = typeof end === 'string' ? parseFloat(end) : end;

  useEffect(() => {
    // Create intersection observer to detect when element is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [threshold, rootMargin, isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const step = targetNumber / (duration / 16); // 16ms is approx one frame at 60fps
    let startTime: number | null = null;
    
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      start = Math.min(progress / duration * targetNumber, targetNumber);
      setCount(start);
      
      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(targetNumber); // Ensure we end exactly at the target number
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [isVisible, targetNumber, duration]);

  // Format the number as required
  const formattedCount = () => {
    const value = count.toFixed(decimals);
    return `${prefix}${value}${suffix}`;
  };

  return <span ref={countRef}>{formattedCount()}</span>;
};

export default CountUp;
