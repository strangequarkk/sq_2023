import { useEffect } from "react";

export const useContainerScroll = (handleScroll, container = window) => {
  const motionOkay = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  ).matches;
  console.log("useContainerscroll setup: motionOkay", motionOkay);
  useEffect(() => {
    console.log("use container scroll useffect: motionOkay?", motionOkay);
    if (motionOkay) {
      // don't bother if user doesn't want motion
      console.log("usecontainerscroll: motion is okay");
      const onScroll = () => {
        const yPosition =
          container.scrollY || container.scrollY === 0 //non-window els dont have scrolly
            ? container.scrollY
            : -container.firstChild.getBoundingClientRect().top;

        handleScroll(yPosition);
      };
      // ensure only one (of this type) of event listener attached at a time
      container.removeEventListener("scroll", onScroll);
      container.addEventListener("scroll", onScroll);
      return () => container.removeEventListener("scroll", onScroll);
    }
  }, [container, handleScroll, motionOkay]);
};
