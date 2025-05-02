
import { useEffect, useState, useRef } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export const CountUp = ({ 
  end, 
  duration = 2000, 
  prefix = "", 
  suffix = "" 
}: CountUpProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const startTime = Date.now();
          const countUp = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            
            const progress = Math.min(elapsed / duration, 1);
            const currentCount = Math.floor(progress * end);
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(countUp);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(countUp);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observerRef.current.observe(countRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [end, duration]);

  return (
    <span ref={countRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default CountUp;
