import { useWindowScroll } from "../../utils/useWindowScroll"
import { useState, useRef } from "react"
import PropTypes from 'prop-types'
import { toHSL, toRGBString } from '../../utils/colorToHSL'


/*
* A background element that shifts hue based on the user's scroll position
* underneath a fixed, semi-transparent background image
* Refs: 
*   defaultHSL - object with numeric h,s,l values
*   colorCSS - rgb string formatted for CSS
*/
export const ShiftBG = ({ defaultColor }) => {
    const defaultHSL = useRef(toHSL(defaultColor));
    const [colorCSS, setColorCSS] = useState({ backgroundColor: toRGBString(defaultHSL.current) });

    //base shift on distance from original hue; h value constrained to range 0-360
    useWindowScroll((scrollY) => {
        let modColor = Math.floor(defaultHSL.current.h - (scrollY / 20)) % 360;
        //have to convert color to rgb because react doesn't do inline hsl apparently
        const rgbStr = toRGBString(modColor, defaultHSL.current.s, defaultHSL.current.l)
        setColorCSS({
            backgroundColor: rgbStr
        })
    })

    return (
        <div
            className="h-screen -z-10 fixed top-0 left-0 bottom-0 right-0 bg-default bg-bubble-trails bg-cover bg-center bg-blend-screen bg-fixed"
            style={colorCSS}
        ></div>
    )
}
/*
* Props: defaultColor: starting color of background, a string containing a color value in RGB, Hex, or HSL
*/
ShiftBG.propTypes = {
    defaultColor : PropTypes.string
}