"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroAnimate({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered hero entrance: each direct HeroItem child animates in
 * sequence (badge → title → subtitle → CTAs → stats) instead of the
 * whole block fading in at once.
 */
export function HeroStagger({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 26 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Slow continuous zoom ("Ken Burns") for hero background imagery.
 * The 24s mirror loop is deliberately slow so it reads as ambient
 * depth rather than a distracting animation.
 */
export function KenBurns({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 1 }}
      animate={{ scale: 1.08 }}
      transition={{ duration: 24, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}

/** Gently bouncing scroll-down chevron for full-height heroes. */
export function ScrollHint() {
  return (
    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.8 }}
      aria-hidden
    >
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="m6 9 6 6 6-6" />
      </motion.svg>
    </motion.div>
  );
}

/**
 * Infinite horizontal marquee. Content is rendered twice and the
 * track translates by exactly half its width, so the loop is seamless.
 * Pauses on hover so labels stay readable.
 */
export function Marquee({
  children,
  className,
  duration = 30,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <div className={`overflow-hidden marquee-mask ${className ?? ""}`} dir="ltr">
      <motion.div
        className="flex w-max items-center gap-2 hover:[animation-play-state:paused]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <div className="flex items-center gap-2 pe-2">{children}</div>
        <div className="flex items-center gap-2 pe-2" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
