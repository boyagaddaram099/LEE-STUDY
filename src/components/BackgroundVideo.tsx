import React, { useRef, useEffect } from 'react';

interface BackgroundVideoProps {
  videoUrl?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoUrl = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure autoplay works across browsers and tab transitions
    video.muted = true;
    video.play().catch(() => {
      // Auto-play policy handling
    });
  }, []);

  return (
    <div 
      id="global-video-background-layer" 
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Background Video Element */}
      <video
        ref={videoRef}
        id="persistent-bg-video"
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-center scale-[1.03] transform transition-opacity duration-1000 opacity-60 filter brightness-[0.7] contrast-[1.15]"
      />

      {/* Primary Atmospheric Gradient & Contrast Overlay */}
      <div 
        id="bg-video-dark-scrim"
        className="absolute inset-0 bg-slate-950/75 backdrop-blur-[1.5px]"
        style={{
          background: 'radial-gradient(ellipse at 50% 20%, rgba(2, 6, 23, 0.65) 0%, rgba(2, 6, 23, 0.85) 60%, rgba(2, 6, 23, 0.95) 100%)'
        }}
      />

      {/* Subtle Color Tonal Glow */}
      <div 
        id="bg-video-tonal-accent"
        className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-transparent to-slate-950/90 pointer-events-none"
      />
    </div>
  );
};
