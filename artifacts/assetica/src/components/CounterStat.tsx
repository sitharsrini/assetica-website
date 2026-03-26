import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterStatProps {
  end: number;
  suffix: string;
  label: string;
  duration?: number;
}

const CounterStat = ({ end, suffix, label, duration = 2000 }: CounterStatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-4xl md:text-5xl" style={{ color: "#012241" }}>
        {count}<span style={{ color: "#4BD1A0" }}>{suffix}</span>
      </div>
      <p className="text-sm text-slate-400 mt-2">{label}</p>
    </div>
  );
};

export default CounterStat;
