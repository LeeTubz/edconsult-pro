"use client";

import { useEffect, useRef, useState } from "react";
import { useInView as useIntersectionObserver } from "react-intersection-observer";

interface SafeInViewOptions {
  triggerOnce?: boolean;
  threshold?: number;
}

/**
 * Wraps react-intersection-observer's useInView with a fallback timer.
 * On some browsers/scroll patterns the observer can miss its threshold
 * crossing entirely (e.g. fast/instant scroll, layout shifts from web
 * fonts loading after mount), leaving scroll-gated content stuck at
 * opacity:0 forever. This forces content visible after a short grace
 * period if the observer never fires.
 */
export function useSafeInView(options: SafeInViewOptions = {}) {
  const { ref, inView, entry } = useIntersectionObserver(options);
  const [forced, setForced] = useState(false);
  const firedRef = useRef(false);

  useEffect(() => {
    if (inView) firedRef.current = true;
  }, [inView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!firedRef.current) setForced(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return { ref, inView: inView || forced, entry };
}
