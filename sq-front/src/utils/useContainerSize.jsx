import { useLayoutEffect, useState } from "react";

export const useContainerSize = (container = window) => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([container.innerWidth, container.innerHeight]);
    }
    container.addEventListener("resize", updateSize);
    updateSize();
    return () => container.removeEventListener("resize", updateSize);
  }, [container]);
  return size;
};
