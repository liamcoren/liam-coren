"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, summary, [data-cursor='pointer']";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!isFinePointer) {
      return;
    }

    document.body.classList.add("has-custom-cursor");

    const onMouseMove = (event: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
      setVisible(true);
      setIsPointer(
        Boolean(
          (event.target as HTMLElement | null)?.closest(
            INTERACTIVE_SELECTOR,
          ),
        ),
      );
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className={`custom-cursor-dot${visible ? " is-visible" : ""}${isPointer ? " is-pointer" : ""}`}
      aria-hidden
    />
  );
}
