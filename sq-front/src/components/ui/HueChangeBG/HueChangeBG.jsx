import { useContainerScroll } from "../../../utils/useContainerScroll";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {
  toHSL,
  toRGBAString,
  positionToRGBStrings,
} from "../../../utils/colorToHSL";
import "./huechange-style.css";

/*
 * A background element that shifts hue based on the user's scroll position
 * underneath a fixed, semi-transparent background image
 * Refs:
 *   defaultHSL - object with numeric h,s,l values
 *   colorCSS - rgb string formatted for CSS
 */
export const HueChangeBG = ({ defaultColor, refContainer }) => {
  const defaultHSL = useRef(toHSL(defaultColor));
  const gradientRotation = refContainer ? "270deg" : "to bottom";
  const [colorStrings, setColorStrings] = useState(
    positionToRGBStrings(0, defaultHSL.current)
  );

  console.log("gradient rotation: ", gradientRotation);

  const [navCSS, setNavCSS] = useState({
    backgroundImage: `linear-gradient( ${gradientRotation}, ${toRGBAString(
      defaultHSL.current
    )}, transparent)`,
  });
  const [colorCSS, setColorCSS] = useState({
    backgroundColor: toRGBAString(defaultHSL.current),
  });

  //base shift on distance from original hue; h value constrained to range 0-360
  useContainerScroll((scrollY) => {
    const newColorStrings = positionToRGBStrings(scrollY, defaultHSL.current);
    setColorStrings(newColorStrings);
    //TODO: change direction of gradient based on window size
    //solid color fade behind navigation, so nav items don't get cluttered while scrolling
    setNavCSS({
      backgroundImage: `linear-gradient(${gradientRotation}, ${newColorStrings[0]} 50%, ${newColorStrings[1]} 100%)`,
    });
    setColorCSS({
      backgroundColor: newColorStrings[0],
    });
  }, refContainer);

  useEffect(() => {
    const newRotation = refContainer ? "270deg" : "to bottom";
    setNavCSS({
      backgroundImage: `linear-gradient(${newRotation}, ${colorStrings[0]} 50%, ${colorStrings[1]} 100%)`,
    });
  }, [refContainer, colorStrings]);
  return (
    <>
      <div
        id='main-bg-shifter'
        className='min-h-100 -z-10 fixed top-0 left-0 bottom-0 right-0 bg-default bg-bubble-trails bg-cover bg-center bg-blend-screen'
        style={colorCSS}
      ></div>
      <div
        id='nav-bg-shifter'
        style={navCSS}
        className={`z-10 bg fixed top-0 left-0 right-0 h-16 bg-gradient-to-b from-default from-50% to transparent `}
      ></div>
    </>
  );
};
/*
 * Props: defaultColor: starting color of background, a string containing a color value in RGB, Hex, or HSL
 */
HueChangeBG.propTypes = {
  defaultColor: PropTypes.string,
  refContainer: PropTypes.object,
};
