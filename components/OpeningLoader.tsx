"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const LOADER_DURATION = 0.9;

export default function OpeningLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const loader = loaderRef.current;
      if (!loader) return;

      document.body.style.overflow = "hidden";

      const heroElements =
        gsap.utils.toArray<HTMLElement>("[data-hero-reveal]");
      const timeline = gsap.timeline({
        defaults: { ease: "power4.out" },
        onComplete: () => {
          document.body.style.overflow = "auto";
        },
      });

      timeline
        .from("[data-loader-line]", {
          yPercent: 120,
          duration: LOADER_DURATION,
          stagger: 0.12,
        })
        .to(
          "[data-loader-progress]",
          {
            scaleX: 1,
            duration: 1.8,
            ease: "power2.inOut",
          },
          "-=0.35",
        )
        .to("[data-loader-line]", {
          yPercent: -120,
          duration: LOADER_DURATION,
          delay: 0.45,
          stagger: 0.08,
          ease: "power4.inOut",
        })
        .to(loader, {
          yPercent: -100,
          duration: 1.1,
          ease: "power4.inOut",
        })
        .from(
          heroElements,
          {
            yPercent: 120,
            duration: 0.85,
            stagger: 0.1,
            clearProps: "transform",
          },
          "-=0.35",
        );
    },
    { scope: loaderRef },
  );

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950"
      aria-label="Loading portfolio"
      role="status"
    >
      <div className="flex w-[min(28rem,calc(100%-3rem))] flex-col items-center gap-8">
        <div className="flex items-center gap-3 overflow-hidden text-6xl tracking-tight text-white sm:text-8xl">
          <span className="overflow-hidden">
            <span data-loader-line className="font-alex-brush block mr-4">
              Cue
            </span>
          </span>
          <span className="overflow-hidden text-indigo-400">
            <span data-loader-line className="font-alex-brush block">
              dev
            </span>
          </span>
        </div>
        <div className="w-full space-y-3">
          <div className="flex items-center justify-between font-bricolage-grotesque text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">
            <span>Loading</span>
            <span aria-hidden="true">01</span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-800">
            <div
              data-loader-progress
              className="h-full w-full origin-left scale-x-0 rounded-full bg-indigo-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
