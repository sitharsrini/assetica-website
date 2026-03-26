import { useEffect, useRef, useState } from "react";

interface CounterStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const CounterStat = ({ value, suffix = "", prefix = "", label }: CounterStatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          let start = 0;
          const duration = 1800;
          const step = value / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-navy mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
};

export default CounterStat;
