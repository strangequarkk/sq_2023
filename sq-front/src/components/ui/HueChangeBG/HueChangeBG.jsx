import { useContainerScroll } from "../../../utils/useContainerScroll";
import { useState, useEffect, useCallback } from "react";
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
export const HueChangeBG = ({ themeIsDark, refContainer, themeClass }) => {
  const chooseBaseColor = useCallback(() => {
    const lightColor = "#b7f5f2";
    const darkColor = "#143233";
    return toHSL(themeIsDark ? darkColor : lightColor);
  }, [themeIsDark]);

  const [defaultHSL, setDefaultHSL] = useState(chooseBaseColor());

  const gradientRotation = refContainer ? "270deg" : "to bottom";
  const [colorStrings, setColorStrings] = useState(
    positionToRGBStrings(0, defaultHSL)
  );

  const buildGradientString = (newRotation, newColor) => {
    return `linear-gradient( ${newRotation}, ${newColor} 40%, transparent)`;
  };

  const [navCSS, setNavCSS] = useState({
    backgroundImage: buildGradientString(
      gradientRotation,
      toRGBAString(defaultHSL)
    ),
  });
  const [colorCSS, setColorCSS] = useState({
    backgroundColor: toRGBAString(defaultHSL),
  });

  //base shift on distance from original hue; h value constrained to range 0-360
  useContainerScroll((scrollY) => {
    const newColorStrings = positionToRGBStrings(scrollY, defaultHSL);
    setColorStrings(newColorStrings);

    //solid color fade behind navigation, so nav items don't get cluttered while scrolling
    setNavCSS({
      backgroundImage: buildGradientString(
        gradientRotation,
        newColorStrings[0]
      ),
    });
    setColorCSS({
      backgroundColor: newColorStrings[0],
    });
  }, refContainer);

  //check if colors or rotation have changed
  useEffect(() => {
    const newRotation = refContainer ? "270deg" : "to bottom";
    setNavCSS({
      backgroundImage: buildGradientString(newRotation, colorStrings[0]),
    });
  }, [refContainer, colorStrings]);

  //when theme switches, or when page switches from 1 to 2 column layout
  useEffect(() => {
    const newHSL = chooseBaseColor();
    setDefaultHSL(newHSL);
    const newColorStrings = positionToRGBStrings(scrollY, newHSL);
    setColorStrings(newColorStrings);
    setNavCSS({
      backgroundImage: buildGradientString(
        gradientRotation,
        newColorStrings[0]
      ),
    });

    setColorCSS({
      backgroundColor: newColorStrings[0],
    });
  }, [themeIsDark, chooseBaseColor, gradientRotation]);

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
  themeIsDark: PropTypes.bool,
  refContainer: PropTypes.object,
  themeClass: PropTypes.string,
};
