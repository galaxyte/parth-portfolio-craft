import { useEffect, useRef, useState } from "react";
import { useAnimation, useInView } from "framer-motion";
import { cardEase, cardTransition } from "@/lib/motion";

/**
 * Replays a light enter animation each time the card scrolls into view.
 * Never fully hides on leave/replay (avoids intersection thrashing / page freeze).
 */
export const useReplayInView = (index = 0, amount = 0.18) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    once: false,
    amount,
    margin: "0px 0px -6% 0px",
  });
  const wasInView = useRef(false);
  const hasAnimated = useRef(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      if (!wasInView.current) {
        if (!hasAnimated.current) {
          void controls.start({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: cardTransition(index),
          });
          hasAnimated.current = true;
        } else {
          void controls.start({
            opacity: [0.82, 1],
            y: [16, 0],
            scale: [0.99, 1],
            transition: { duration: 0.4, ease: cardEase },
          });
        }
        setVisible(true);
        wasInView.current = true;
      }
    } else {
      wasInView.current = false;
    }
  }, [isInView, controls, index]);

  return {
    ref,
    visible,
    initial: { opacity: 0, y: 28, scale: 0.98 },
    animate: controls,
    transition: cardTransition(index),
  };
};
