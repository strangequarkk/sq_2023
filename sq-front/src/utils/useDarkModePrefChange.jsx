import { useEffect } from "react";

export const useDarkModePrefChange = (handleChange) => {
  useEffect(() => {
    const onModeChange = (e) => {
      handleChange(e);
    };
    const modePreference = window.matchMedia("(prefers-color-scheme: dark)");
    // ensure only one (of this type) of event listener attached at a time
    modePreference.removeEventListener("change", onModeChange);
    modePreference.addEventListener("change", onModeChange);
    return () => modePreference.removeEventListener("change", onModeChange);
  });
};
