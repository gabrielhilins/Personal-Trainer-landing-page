"use client"

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true, smooth: true }}>
      {children}
    </ReactLenis>
  );
}