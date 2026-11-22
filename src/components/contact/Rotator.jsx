import { useEffect, useState } from "react";

const PHRASES = ["your next project","a partnership", "a tender"];

export default function Rotator() {
  const [i, setI] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let t;
    const id = setInterval(() => {
      setOut(true);
      t = setTimeout(() => {
        setI((n) => (n + 1) % PHRASES.length);
        setOut(false);
      }, 350);
    }, 3200);
    return () => { clearInterval(id); clearTimeout(t); };
  }, []);

  return <span className={`rotator${out ? " out" : ""}`} aria-live="polite">{PHRASES[i]}</span>;
}
