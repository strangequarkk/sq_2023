import { useContainerScroll } from "../../../utils/useContainerScroll";
import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { toHSL, toRGBAString } from "../../../utils/colorToHSL";
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
  const [navCSS, setNavCSS] = useState({
    backgroundImage: `linear-gradient(${toRGBAString(
      defaultHSL.current
    )}, transparent)`,
  });
  const [colorCSS, setColorCSS] = useState({
    backgroundColor: toRGBAString(defaultHSL.current),
  });
  const gradientRotation = refContainer ? "270deg" : "90deg";

  //base shift on distance from original hue; h value constrained to range 0-360
  useContainerScroll((scrollY) => {
    let modColor = Math.floor(defaultHSL.current.h - scrollY / 20) % 360;
    //have to convert color to rgb because react doesn't do inline hsl apparently
    const rgbaStr = toRGBAString(
      modColor,
      defaultHSL.current.s,
      defaultHSL.current.l,
      1
    );
    const transparentRGBA = toRGBAString(
      modColor,
      defaultHSL.current.s,
      defaultHSL.current.l,
      0
    );

    //TODO: change direction of gradient based on window size
    //solid color fade behind navigation, so nav items don't get cluttered while scrolling
    setNavCSS({
      backgroundImage: `linear-gradient(${gradientRotation}, ${rgbaStr} 50%, ${transparentRGBA} 100%)`,
    });
    setColorCSS({
      backgroundColor: rgbaStr,
    });
  }, refContainer);

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
