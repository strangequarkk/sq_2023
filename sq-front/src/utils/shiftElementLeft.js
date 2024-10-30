//adjust left position to prevent overflow if needed
export const shiftElementLeft = (rightBound, el, container) => {
  let containerRightBound = container
    ? container.getBoundingClientRect().right
    : window.innerWidth;
  if (rightBound > containerRightBound) {
    //20 pixel correction probably needed due to decorative pseudo elements?
    //tracking it down would take more time than it's worth
    const overflowX = rightBound - containerRightBound + 20;
    // element's current position minus how far it overflowed off the viewport
    const newLeftPos = parseInt(window.getComputedStyle(el).left) - overflowX;
    el.style.left = `${parseInt(newLeftPos)}px`;
  }
};
