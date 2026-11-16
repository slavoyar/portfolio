'use client';

import { useEffect, useRef } from 'react';

type PixelPhotoProps = {
  src: string;
  alt: string;
  className?: string;
  resolution?: number;
};

export function PixelPhoto({ src, alt, className, resolution = 168 }: PixelPhotoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const image = new window.Image();
    image.decoding = 'async';
    image.src = src;

    let cancelled = false;

    const paint = () => {
      if (cancelled) {
        return;
      }

      const size = resolution;
      canvas.width = size;
      canvas.height = size;
      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, size, size);

      const min = Math.min(image.naturalWidth, image.naturalHeight);
      const sx = (image.naturalWidth - min) / 2;
      const sy = (image.naturalHeight - min) / 2;
      ctx.drawImage(image, sx, sy, min, min, 0, 0, size, size);
    };

    if (image.complete && image.naturalWidth > 0) {
      paint();
    } else {
      image.addEventListener('load', paint);
    }

    return () => {
      cancelled = true;
      image.removeEventListener('load', paint);
    };
  }, [src, resolution]);

  return <canvas ref={canvasRef} role='img' aria-label={alt} className={className} />;
}
