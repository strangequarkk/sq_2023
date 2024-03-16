//adjust left position to prevent overflow if needed
export const shiftElementLeft = (rightBound, el) => {
  if (rightBound > window.innerWidth) {
    const overflowX = rightBound - window.innerWidth;
    // element's current position minus how far it overflowed off the viewport
    const newLeftPos = parseInt(window.getComputedStyle(el).left) - overflowX;
    el.style.left = `${parseInt(newLeftPos)}px`;
  }
};
