import { useEffect } from "react";

export const useContainerScroll = (handleScroll, container = window) => {
  const yPosition =
    container.scrollY != undefined //non-window containers won't have scrollY
      ? container.scrollY
      : -container.firstChild.getBoundingClientRect().top;
  useEffect(() => {
    const onScroll = () => {
      handleScroll(yPosition);
    };
    // ensure only one (of this type) of event listener attached at a time
    container.removeEventListener("scroll", onScroll);
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  });
};
