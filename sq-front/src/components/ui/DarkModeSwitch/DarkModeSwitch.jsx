import { Switch } from "@mui/base/Switch";
import PropTypes from "prop-types";
import "./darkModeSwitch-style.css";

export const DarkModeSwitch = ({ themeIsDark, toggleDarkMode }) => {
  return (
    <div id='darkModeSwitch'>
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
};
