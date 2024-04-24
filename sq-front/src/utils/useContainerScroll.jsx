import { useEffect } from "react";

export const useContainerScroll = (handleScroll, container = window) => {
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
      // ensure only one (of this) event listener attached at a time
      container.removeEventListener("scroll", onScroll);
      container.addEventListener("scroll", onScroll);
      return () => container.removeEventListener("scroll", onScroll);
    }
  }, [container, handleScroll, motionOkay]);
};
