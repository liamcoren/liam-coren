"use client";

import { useEffect } from "react";

export function InspectGuard() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_DISABLE_INSPECT_GUARD === "true") {
      return;
    }

    const blockMenu = (e: Event) => e.preventDefault();

    const blockKeys = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") {
        e.preventDefault();
        return;
      }
      if (e.key === "F12") {
        e.preventDefault();
        return;
      }
      if (
        e.ctrlKey &&
        e.shiftKey &&
        ["I", "i", "J", "j", "C", "c"].includes(e.key)
      ) {
        e.preventDefault();
        return;
      }
      if (
        e.metaKey &&
        e.altKey &&
        ["I", "i", "J", "j", "C", "c"].includes(e.key)
      ) {
        e.preventDefault();
        return;
      }
      if (e.ctrlKey && !e.shiftKey && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
        return;
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === "p" || e.key === "P")) {
        e.preventDefault();
        return;
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
      }
    };

    const nativePrint = window.print;
    window.print = () => {};

    document.addEventListener("contextmenu", blockMenu, true);
    document.addEventListener("keydown", blockKeys, true);
    return () => {
      window.print = nativePrint;
      document.removeEventListener("contextmenu", blockMenu, true);
      document.removeEventListener("keydown", blockKeys, true);
    };
  }, []);

  return null;
}
