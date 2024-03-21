import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useContainerScroll } from "../../../utils/useContainerScroll";
import "./logo-style.css";

/*
 * Semi-transparent background logo that spins counterclockwise as the user scrolls
 * (regardless of scroll direction)
 * but stops when user is not scrolling
 * States:
 * rotation - number (def 360), used to calculate degree value
 * rotationStyle - CSS object that uses rotation value in transform property
 */
export const SpinningLogo = ({ speed, image, refContainer }) => {
  const [rotation, setRotation] = useState(360);
  const [rotationStyle, setRotationStyle] = useState({
    transform: "rotate(" + rotation + "deg)",
  });

  // make sure spinning doesn't stop when rotation value hits zero
  useContainerScroll(() => {
    let nextRotation = rotation == 0 ? 359.5 : rotation - speed;
    setRotation(nextRotation);
  }, refContainer);

  // update css text when rotation number updates
  useEffect(() => {
    setRotationStyle({ transform: "rotate(" + rotation + "deg)" });
  }, [rotation]);

  return <img id='logo' src={image} style={rotationStyle} alt='' />;
};

/*
 * Props:
 * speed - positive number 0-360, smaller values = slower speed
 * image - string, path to image
 */
SpinningLogo.propTypes = {
  speed: PropTypes.number,
  image: PropTypes.string,
  refContainer: PropTypes.object,
};
