"use client";

import React, { useEffect, useRef, useState } from "react";

interface VariableProximityProps {
  text: string;
  className?: string;
  radius?: number;
  falloff?: "linear" | "exponential" | "gaussian";
  animationType?: "scale" | "opacity" | "color";
  fromColor?: string;
  toColor?: string;
  fromScale?: number;
  toScale?: number;
}

export function VariableProximity({
  text,
  className = "",
  radius = 100,
  falloff = "linear",
  animationType = "scale",
  fromColor = "#ab2645",
  toColor = "#ff6f91",
  fromScale = 1,
  toScale = 1.2,
}: VariableProximityProps) {
  const container = useRef<HTMLSpanElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (container.current) {
        const rect = container.current.getBoundingClientRect();
        setMouse({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const updateDimensions = () => {
      if (container.current) {
        const { width, height } = container.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    // Listen on the document for better mouse tracking
    document.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("resize", updateDimensions);

    updateDimensions();

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const calculateDistance = (x: number, y: number) => {
    return Math.sqrt((mouse.x - x) ** 2 + (mouse.y - y) ** 2);
  };

  const calculateFalloff = (distance: number) => {
    const normalizedDistance = Math.min(distance / radius, 1);

    switch (falloff) {
      case "exponential":
        return Math.pow(1 - normalizedDistance, 2);
      case "gaussian":
        return Math.exp(-Math.pow(normalizedDistance, 2) / 0.5);
      case "linear":
      default:
        return 1 - normalizedDistance;
    }
  };

  const interpolateColor = (progress: number) => {
    const fromRgb = hexToRgb(fromColor);
    const toRgb = hexToRgb(toColor);

    if (!fromRgb || !toRgb) return fromColor;

    const r = Math.round(fromRgb[0] + (toRgb[0] - fromRgb[0]) * progress);
    const g = Math.round(fromRgb[1] + (toRgb[1] - fromRgb[1]) * progress);
    const b = Math.round(fromRgb[2] + (toRgb[2] - fromRgb[2]) * progress);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const interpolateScale = (progress: number) => {
    return fromScale + (toScale - fromScale) * progress;
  };

  return (
    <span
      ref={container}
      className={`inline-block ${className}`}
      style={{
        lineHeight: 1.2,
        color: animationType === "color" ? fromColor : undefined,
      }}
    >
      {text.split("").map((char, index) => {
        if (char === " ") {
          return <span key={index}>&nbsp;</span>;
        }

        const charWidth = dimensions.width / text.length;
        const x = charWidth * index + charWidth / 2;
        const y = dimensions.height / 2;

        const distance = calculateDistance(x, y);
        const falloffValue = calculateFalloff(distance);

        let style: React.CSSProperties = {
          display: "inline-block",
          transition: "all 0.1s ease-out",
        };

        switch (animationType) {
          case "scale":
            style.transform = `scale(${interpolateScale(falloffValue)})`;
            style.transformOrigin = "center";
            break;
          case "opacity":
            style.opacity = 0.3 + falloffValue * 0.7;
            break;
          case "color":
            style.color = interpolateColor(falloffValue);
            break;
        }

        return (
          <span key={index} style={style}>
            {char}
          </span>
        );
      })}
    </span>
  );
}

function hexToRgb(hex: string): [number, number, number] | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
}
