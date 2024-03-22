import { useEffect } from "react";

export const useContainerScroll = (handleScroll, container = window) => {
  useEffect(() => {
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
  }, [container, handleScroll]);
};
