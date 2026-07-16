import type { Transition, Variants } from "framer-motion";

export const cardEase = [0.22, 1, 0.36, 1] as const;

/** Shared scroll reveal for cards / panels */
export const cardReveal = {
  initial: { opacity: 0, y: 28, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
} as const;

export const cardRevealVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: cardEase,
      delay: Math.min(i, 8) * 0.06,
    },
  }),
};

/** Prefer useReplayInView for cards — once:false + whileInView reverse freezes the page */
export const cardInView = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -40px 0px",
} as const;

export const cardTransition = (index = 0): Transition => ({
  duration: 0.45,
  ease: cardEase,
  delay: Math.min(index, 8) * 0.06,
});

export const cardHover = {
  y: -5,
  transition: { duration: 0.22, ease: cardEase },
} as const;
