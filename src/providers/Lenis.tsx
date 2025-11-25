"use client";

import { useEffect, useRef } from "react";
import ReactLenis, { LenisRef } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(CustomEase);

export default function Lenis({ children }: Readonly<{ children: React.ReactNode }>) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.08,
        wheelMultiplier: 1.2,
        smoothWheel: true,
        overscroll: false,
        // infinite: true,
      }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
