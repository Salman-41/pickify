"use client";

import React, { useRef, useEffect } from "react";

interface ThreadsBgProps {
  /**
   * Amplitude of the wave oscillation
   * @default 3.8
   */
  amplitude?: number;

  /**
   * Distance between threads
   * @default 0.9
   */
  distance?: number;

  /**
   * Enable mouse tracking interaction
   * @default true
   */
  enableMouse?: boolean;

  /**
   * Custom style for the canvas
   */
  style?: React.CSSProperties;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Color 1 for alternating threads (hex color)
   * @default "rgba(171,38,69,0.7)"
   */
  color1?: string;

  /**
   * Color 2 for alternating threads (hex color)
   * @default "rgba(11,70,79,0.7)"
   */
  color2?: string;
}

/**
 * Threads Background Component
 *
 * An animated canvas-based background with flowing wave patterns.
 * The threads respond to mouse movement when enabled, creating an
 * interactive, organic visual effect.
 *
 * @component
 * @example
 * ```tsx
 * <ThreadsBg
 *   amplitude={3.8}
 *   distance={0.9}
 *   enableMouse={true}
 *   className="absolute bottom-0 left-0 w-full h-80"
 * />
 * ```
 */
export const ThreadsBg: React.FC<ThreadsBgProps> = ({
  amplitude = 3.8,
  distance = 0.9,
  enableMouse = true,
  style = {},
  className = "",
  color1 = "rgba(171,38,69,0.85)",
  color2 = "rgba(11,70,79,0.85)",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let animationFrameId: number;

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    if (enableMouse) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.current.x = (e.clientX - rect.left) / width;
        mouse.current.y = (e.clientY - rect.top) / height;
      };

      canvas.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("resize", handleResize);
        canvas.removeEventListener("mousemove", handleMouseMove);
        cancelAnimationFrame(animationFrameId);
      };
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const threads = 7;
      const threadSpacing = 32;

      for (let i = 0; i < threads; i++) {
        ctx.save();
        ctx.beginPath();

        for (let x = 0; x <= width; x += 2) {
          const progress = x / width;

          // Base Y position
          const baseY = height / 2 + (i - threads / 2) * threadSpacing * distance;

          // Calculate amplitudes based on mouse position
          const mouseAmp = enableMouse
            ? amplitude * (1 + mouse.current.y * 0.8)
            : amplitude;

          const mouseDist = enableMouse
            ? distance * (1 + mouse.current.x * 0.5)
            : distance;

          // Wave calculation
          const y =
            baseY +
            Math.sin(
              progress * Math.PI * 2 * mouseDist +
                i * 0.7 +
                mouse.current.x * 2
            ) *
              (threadSpacing * mouseAmp);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Styling
        ctx.strokeStyle = i % 2 === 0 ? color1 : color2;
        ctx.lineWidth = 3.5 - Math.abs(i - threads / 2) * 0.3;
        ctx.shadowColor = "#ab2645";
        ctx.shadowBlur = 12;
        ctx.globalAlpha = 0.85 - Math.abs(i - threads / 2) * 0.08;

        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [amplitude, distance, enableMouse, color1, color2]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: enableMouse ? "auto" : "none",
        ...style,
      }}
      width={1920}
      height={600}
      aria-hidden="true"
    />
  );
};

export default ThreadsBg;
