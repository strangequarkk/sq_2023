import { useEffect } from "react";

export const useContainerScroll = (handleScroll, container = window) => {
  const motionOkay = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  ).matches;
  useEffect(() => {
    if (motionOkay) {
      // don't bother if user doesn't want motion
      const onScroll = () => {
        const yPosition =
          container.scrollY || container.scrollY === 0 //non-window els dont have scrolly
            ? container.scrollY
            : -container.firstChild.getBoundingClientRect().top;
        console.log("container Y position");
        handleScroll(yPosition);
      };
      // ensure only one (of this type) of event listener attached at a time
      container.removeEventListener("scroll", onScroll);
      container.addEventListener("scroll", onScroll);
      return () => container.removeEventListener("scroll", onScroll);
    }
  }, [container, handleScroll, motionOkay]);
};
