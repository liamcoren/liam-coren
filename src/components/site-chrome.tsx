"use client";

import { BackToTop } from "@/components/back-to-top";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";

export function SiteChrome() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
    </>
  );
}
