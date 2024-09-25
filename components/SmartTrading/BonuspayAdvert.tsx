"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import SmartTradingIllustration from "/public/assets/smart-trading-illustration.png";

export default function BonuspayAdvert() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return () => {};
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: "0px",
      },
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  return (
    <div
      className="relative h-[17.75275rem] w-full max-w-[33.75rem] overflow-clip rounded-2xl lg:h-[28.875rem]"
      style={{
        boxShadow:
          " 0px 0px 0px 1px rgba(14, 14, 15, 0.03), 0px 2px 8px 0px rgba(14, 14, 15, 0.10), 0px 10px 36px 0px rgba(14, 14, 15, 0.10)",
      }}
    >
      <div className="absolute inset-0 bg-[url('/assets/smart-trading-illustration.png')] bg-cover bg-center bg-no-repeat" />
      <video
        ref={videoRef}
        controls
        loop
        muted
        src="https://bonuspay.io/wp-content/uploads/2024/05/Bonus-Pay-Video-v2.mp4"
        className="relative h-full w-full object-cover"
      >
        <Image
          src={SmartTradingIllustration}
          alt="A mock UI of the Whop application showing a list of apps available to connect to Whop. Some apps are Discord, Mastermind, and FanDuel."
          className="rounded-lg"
          fill
          priority
        />
      </video>
    </div>
  );
}
