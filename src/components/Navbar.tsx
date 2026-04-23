"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import profilePic from "@/assets/liamcoren-profile-pic.png";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-4 top-8 z-[2000] flex items-stretch gap-0 md:left-8">
        <Link
          href="/"
          className="relative flex h-[34px] w-[34px] shrink-0 overflow-hidden border border-foreground bg-background"
          aria-label="Home — Liam Coren"
        >
          <Image
            src={profilePic}
            alt=""
            fill
            sizes="34px"
            className="object-cover"
            priority
          />
        </Link>

        <div className="hidden items-stretch md:flex">
          <a
            href="#about"
            className="group relative flex h-[34px] items-center overflow-hidden border border-l-0 border-foreground bg-background px-3 text-[11px] font-medium uppercase leading-none text-foreground"
          >
            <span className="relative z-10">About</span>
            <span className="absolute inset-0 z-0 translate-y-full bg-muted transition-transform duration-300 ease-out group-hover:translate-y-0" />
          </a>
          <a
            href="#contact"
            className="group relative flex h-[34px] items-center overflow-hidden border border-l-0 border-foreground bg-background px-3 text-[11px] font-medium uppercase leading-none text-foreground"
          >
            <span className="relative z-10">Contact</span>
            <span className="absolute inset-0 z-0 translate-y-full bg-muted transition-transform duration-300 ease-out group-hover:translate-y-0" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="group relative flex h-[34px] items-center justify-center overflow-hidden border border-l-0 border-foreground bg-background px-3 text-[11px] font-medium uppercase leading-none text-foreground md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative z-10">{open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</span>
          <span className="absolute inset-0 z-0 translate-y-full bg-muted transition-transform duration-300 ease-out group-hover:translate-y-0" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[3000] flex flex-col md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="flex items-center justify-center bg-foreground py-14"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-background"
              >
                <X className="h-4 w-4" />
                Close
              </button>
            </motion.div>
            <motion.div
              className="flex flex-1 flex-col bg-background"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.2 }}
            >
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="flex flex-1 items-center justify-center border-b border-foreground text-[17px] font-medium uppercase tracking-tight text-foreground"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex flex-1 items-center justify-center text-[17px] font-medium uppercase tracking-tight text-foreground"
              >
                Contact
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
