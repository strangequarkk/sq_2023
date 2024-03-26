import { useLayoutEffect, useState } from "react";

export const useContainerSize = (container = window) => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      const width =
        container.innerWidth != undefined
          ? container.innerWidth
          : container.getBoundingClientRect().width;

      const height =
        container.innerHeight != undefined
          ? container.innerHeight
          : container.getBoundingClientRect().height;
      setSize([width, height]);
    }
    container.addEventListener("resize", updateSize);
    updateSize();
    return () => container.removeEventListener("resize", updateSize);
  }, [container]);
  return size;
};
