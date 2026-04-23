"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LiferayLogoMark } from "@/components/liferay-logo-mark";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { LIVE_SITE_URL } from "@/lib/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HomePage() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-item]",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.1,
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section
          className="px-4 pb-10 pt-32 md:px-8 md:pb-16 md:pt-40 lg:pt-48"
          aria-labelledby="intro-heading"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h1
              id="intro-heading"
              className="mb-4 inline-flex flex-col items-center text-3xl font-medium sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl"
            >
              <span
                data-hero-item
                className="border border-foreground px-3 py-2 md:px-6 md:py-4"
              >
                Liam
              </span>
              <span
                data-hero-item
                className="-mt-px border border-t-0 border-foreground bg-foreground px-3 py-2 text-background md:px-6 md:py-4 md:rounded-b-[40px] rounded-b-[20px]"
              >
                Coren
              </span>
            </h1>
            <p
              data-hero-item
              className="mx-auto max-w-xl text-sm text-muted-foreground md:text-base lg:text-lg"
            >
              Liferay Expert and Tinker
            </p>
          </div>
        </section>

        <section
          id="about"
          data-reveal
          className="scroll-mt-24 border-t border-border px-4 pb-12 pt-10 md:px-8 md:pb-16 md:pt-14"
          aria-labelledby="about-heading"
        >
          <div className="mx-auto max-w-4xl">
            <h2
              id="about-heading"
              className="text-lg font-medium md:text-xl"
            >
              About
            </h2>
            <div className="mt-4 flex flex-col gap-8 lg:mt-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10 xl:gap-14">
              <div className="min-w-0 flex-1 space-y-4 text-left text-sm text-foreground md:text-base lg:text-lg">
                <p className="font-medium">
                  Liam Coren is a Liferay Expert and Tinker.
                </p>
                <p>
                  For me, Liferay isn&apos;t about knowing everything; it&apos;s
                  about exploring, experimenting, and slowly decoding its DNA step
                  by step.
                </p>
                <p>
                  I like to clone ideas, remix patterns, and reshape them into
                  something cleaner, simpler, and a little more thoughtful.
                </p>
                <p>
                  Most of what I learn comes from curiosity—and the rest from
                  trying things that fail, but still teach me something useful.
                </p>
                <p>
                  This isn&apos;t a portfolio; it&apos;s where I test ideas, push
                  limits, and collect small wins.
                </p>
                <p>
                  Don&apos;t judge me by interviews—judge me by what I build when
                  I&apos;m enjoying the process.
                </p>
              </div>
              <div className="flex shrink-0 justify-end self-end lg:self-start lg:pt-1">
                <LiferayLogoMark className="shrink-0 max-sm:origin-top-right max-sm:scale-[0.72] sm:scale-100" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          data-reveal
          className="scroll-mt-24 border-t border-border px-4 pb-20 pt-10 md:px-8 md:pb-28 md:pt-14"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto max-w-2xl">
            <h2
              id="contact-heading"
              className="mb-4 text-lg font-medium md:text-xl"
            >
              Contact
            </h2>
            <p className="mb-6 text-sm text-muted-foreground md:text-base lg:text-lg">
              Want to talk Liferay, a project, or something you&apos;re
              building?
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                variant="outline"
                className="rounded-none border-foreground uppercase tracking-wide text-foreground hover:bg-foreground hover:text-background"
              >
                <a href="mailto:liamcorenxo@gmail.com">
                  <Mail className="h-4 w-4" aria-hidden />
                  liamcorenxo@gmail.com
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-none border-foreground uppercase tracking-wide text-foreground hover:bg-foreground hover:text-background"
              >
                <a
                  href="https://www.linkedin.com/in/liam-coren/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                  LinkedIn
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-none border-foreground uppercase tracking-wide text-foreground hover:bg-foreground hover:text-background"
              >
                <a
                  href="https://github.com/liamcoren/liam-coren"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" aria-hidden />
                  GitHub
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-none border-foreground uppercase tracking-wide text-foreground hover:bg-foreground hover:text-background"
              >
                <a href={LIVE_SITE_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" aria-hidden />
                  Site
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
