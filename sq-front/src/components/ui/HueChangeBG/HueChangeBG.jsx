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
export const HueChangeBG = ({ defaultColor, refContainer, themeClass }) => {
  const defaultHSL = useRef(toHSL(defaultColor));
  const gradientRotation = refContainer ? "270deg" : "to bottom";
  const [colorStrings, setColorStrings] = useState(
    positionToRGBStrings(0, defaultHSL.current)
  );

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

    //solid color fade behind navigation, so nav items don't get cluttered while scrolling
    setNavCSS({
      backgroundImage: `linear-gradient(${gradientRotation}, ${newColorStrings[0]} 50%, ${newColorStrings[1]} 100%)`,
    });
    setColorCSS({
      backgroundColor: newColorStrings[0],
    });
  }, refContainer);

  //check if colors or device width have changed
  useEffect(() => {
    const newRotation = refContainer ? "270deg" : "to bottom";
    setNavCSS({
      backgroundImage: `linear-gradient(${newRotation}, ${colorStrings[0]} 50%, ${colorStrings[1]} 100%)`,
    });
  }, [refContainer, colorStrings]);
  return (
    <>
      <div id='main-bg-shifter' className={themeClass} style={colorCSS}></div>
      <div id='nav-bg-shifter' className={themeClass} style={navCSS}></div>
    </>
  );
};
/*
 * Props: defaultColor: starting color of background, a string containing a color value in RGB, Hex, or HSL
 */
HueChangeBG.propTypes = {
  defaultColor: PropTypes.string,
  refContainer: PropTypes.object,
  themeClass: PropTypes.string,
};
