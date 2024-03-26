import { Switch } from "@mui/base/Switch";
import PropTypes from "prop-types";
import { useContainerScroll } from "../../../utils/useContainerScroll";
import { useState } from "react";
import "./darkModeSwitch-style.css";

export const DarkModeSwitch = ({
  themeIsDark,
  toggleDarkMode,
  refContainer,
}) => {
  const [prevYPosition, setPrevYPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useContainerScroll((yPos) => {
    const newScrollDirection = yPos - prevYPosition < 0;
    setIsScrollingUp(newScrollDirection);

    setPrevYPosition(yPos);
  }, refContainer);

  const visibleClass = isScrollingUp ? "" : "disappear";

  return (
    <div id='darkModeSwitch' className={visibleClass}>
      <label>Light</label>{" "}
      <Switch
        checked={themeIsDark}
        onChange={toggleDarkMode}
        inputProps={{ "aria-label": "controlled" }}
      />
      <label>Dark</label>
    </div>
  );
};

DarkModeSwitch.propTypes = {
  toggleDarkMode: PropTypes.func,
  themeIsDark: PropTypes.bool,
  refContainer: PropTypes.object,
};
