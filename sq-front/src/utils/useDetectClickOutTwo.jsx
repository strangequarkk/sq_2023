import { useEffect } from "react";

export const useDetectClickOut = (
  clickableElement,
  handleClickOut,
  enabled,
  usingTouch
) => {
  useEffect(() => {
    if (enabled) {
      const onClickOut = (event) => {
        if (
          event.target != clickableElement &&
          !clickableElement.contains(event.target)
        ) {
          handleClickOut(event);
        }
      };
      let remove;
      if (!usingTouch) {
        window.removeEventListener("click", onClickOut);
        window.addEventListener("click", onClickOut);
        remove = () => window.removeEventListener("click", onClickOut);
      } else {
        window.removeEventListener("touchstart", onClickOut);
        window.addEventListener("touchstart", onClickOut);
        remove = () => window.removeEventListener("touchstart", onClickOut);
      }

      return remove;
    }
  }, [clickableElement, handleClickOut, enabled, usingTouch]);
};
