import { useEffect } from "react";

export const useDetectClickOut = (
  clickableElement,
  handleClickOut,
  enabled
) => {
  useEffect(() => {
    if (enabled) {
      const onClickOut = (event) => {
        if (event.target != clickableElement) {
          event.preventDefault();
          handleClickOut(event);
        }
      };
      window.removeEventListener("touchstart", onClickOut);
      window.removeEventListener("click", onClickOut);
      window.addEventListener("touchstart", onClickOut);
      window.addEventListener("click", onClickOut);
      const remove = () => window.removeEventListener("click", onClickOut);
      return remove;
    }
  }, [clickableElement, handleClickOut, enabled]);
};
