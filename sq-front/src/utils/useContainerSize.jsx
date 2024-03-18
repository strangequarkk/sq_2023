import { useLayoutEffect, useState } from "react";

export const useContainerSize = (container = window) => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      console.log("use container:");
      console.log(container);
      const width =
        container.innerWidth != undefined
          ? container.innerWidth
          : container.getBoundingClientRect().width;
      const height =
        container.innerHeight != undefined
          ? container.innerHeight
          : container.getBoundingClientRect().height;
      console.log("useContainerSize container width:", width);
      setSize([width, height]);
    }
    container.addEventListener("resize", updateSize);
    updateSize();
    return () => container.removeEventListener("resize", updateSize);
  }, [container]);
  return size;
};
