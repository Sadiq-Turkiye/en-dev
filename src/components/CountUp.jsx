import { useEffect, useState } from "react";

// Counts from 0 up to `to` once on mount; shows the final value straight away for reduced motion.
// Optional `prefix` / `suffix` wrap the number (e.g. "+125", "10+").
export default function CountUp({ to, prefix = "", suffix = "", duration = 1200, delay = 300 }) {
  const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce) return;
    let raf;
    let start;
    const timer = setTimeout(() => {
      const tick = (t) => {
        start ??= t;
        const p = Math.min((t - start) / duration, 1);
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); };
  }, [to, duration, delay, reduce]);

  return <>{prefix}{value}{suffix}</>;
}
