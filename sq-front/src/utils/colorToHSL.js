import convert from "color-convert";
/*
 * Utility that detects a valid color format (RBG, Hex, or HSL) and converts it to HSV,
 * either as an object with h, s, and l values, or as a css-compatible string
 */

const reg100 = "\b(?:\\d{2}|[1-9]?\\d|100)\\b"; //matches numbers 0-100
const reg255 = "\\b(?:1\\d{2}|2[0-4]\\d|[1-9]?\\d|25[0-5])\\b"; //matches numbers 0-255
const reg360 = "\\b(?:[1-2]\\d{2}|3[0-5]\\d|[1-9]?\\d|360)\\b"; //matches numbers 0-360

const hexReg = /^#[0-9A-F]{6}$/i; //matches a hex color string
const rgbReg = new RegExp(`^rgb\\(${reg255},${reg255},${reg255}\\)`); //matches an rgb color string
const hslReg = new RegExp(`^hsl\\(${reg360},${reg100},${reg100}\\)`); //matches an hsl color string

//figure out what format the color string is in
const getColorType = (colorString) => {
  if (hexReg.test(colorString)) {
    return "hex";
  } else if (rgbReg.test(colorString)) {
    return "rgb";
  } else if (hslReg.test(colorString)) {
    return "hsl";
  } else {
    console.log("no match");
    return false;
  }
};

// get numeric values from css rgb/hsl string
const extractColorVals = (colorString, type) => {
  const extractedVals = colorString
    .split(type)[1] //get rid of prefix
    .replace(/[()]/g, "") //get rid of parentheses
    .split(","); //split into numbers
  return extractedVals;
};

//converts a hex, rgb, or hsl string to an {h, s, v} object
export const toHSL = (originalColor) => {
  const colorType = getColorType(originalColor);
  let [h, s, l] = [0, 0, 0];
  let rgbVals = [];
  switch (colorType) {
    case "hex":
      [h, s, l] = convert.hex.hsl(originalColor);
      return { h: h, s: s, l: l }; //return converted hsl obj
    case "rgb":
      rgbVals = extractColorVals(originalColor, colorType);
      [h, s, l] = convert.rgb.hsl(rgbVals); //convert to hsl from rgb
      return { h: h, s: s, l: l }; //return converted hsl obj
    case "hsl":
      [h, s, l] = extractColorVals(originalColor, colorType);
      return { h: parseInt(h), s: s, l: l }; //hue needs to be int so we can change it later
    default:
      break;
  }
};

//make css rbg string from h, s, and l values
export const toRGBString = (hVal, sVal, lVal) => {
  const [r, g, b] = convert.hsl.rgb(hVal, sVal, lVal);
  return `rgb(${r},${g},${b})`;
};
