import { useEffect } from "react";

export const useContainerScroll = (
  handleScroll,
  container = window,
  wheelOnly = false
) => {
  const motionOkay = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  ).matches;
  useEffect(() => {
    // don't bother if user doesn't want motion
    if (motionOkay) {
      const onScroll = () => {
        const yPosition =
          //non-window els dont have scrolly
          container.scrollY || container.scrollY === 0
            ? container.scrollY
            : -container.firstChild.getBoundingClientRect().top;
        handleScroll(yPosition);
      };
      if (wheelOnly) {
        container.removeEventListener("wheel", onScroll);
        container.addEventListener("wheel", onScroll);
        return () => container.removeEventListener("wheel", onScroll);
      } else {
        container.removeEventListener("scroll", onScroll);
        container.addEventListener("scroll", onScroll);
        return () => container.removeEventListener("scroll", onScroll);
      }
      // ensure only one (of this) event listener attached at a time
    }
  }, [container, handleScroll, motionOkay, wheelOnly]);
};
