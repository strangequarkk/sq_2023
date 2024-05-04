import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/ui/Navbar/Navbar";
import { SpinningLogo } from "./components/ui/SpinningLogo/SpinningLogo";
import { Intro } from "./components/sections/Intro/Intro";
import { About } from "./components/sections/About/About";
import { Skills } from "./components/sections/Skills/Skills";
import { Experience } from "./components/sections/Experience/Experience";
import { Portfolio } from "./components/sections/Portfolio/Portfolio";
import { Reviews } from "./components/sections/Reviews/Reviews";
import { HueChangeBG } from "./components/ui/HueChangeBG/HueChangeBG";
import { HireMe } from "./components/ui/HireMe/HireMe";

import { useContainerSize } from "./utils/useContainerSize";
import { useDarkModePrefChange } from "./utils/useDarkModePrefChange";
import { useRef, useEffect, useState } from "react";
import { DarkModeSwitch } from "./components/ui/DarkModeSwitch/DarkModeSwitch";

import "./App.css";

function App() {
  const sections = useRef([
    "about",
    "skills",
    "experience",
    "reviews",
    "projects",
  ]);
  const [currentSection, setCurrentSection] = useState("");
  const scrollableDiv = useRef();
  const contentWrapper = useRef();
  const minDesktopSize = 1080;
  const containerSize = useContainerSize()[0];
  const [containerWidth, setContainerWidth] = useState(containerSize);
  const [pauseAnimations, setPauseAnimations] = useState(false);
  const [usingTouch, setUsingTouch] = useState(false);
  const motionOkay = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  ).matches;
  //hi-res devices with small rem have different styling needs
  const windowResWidth = window.devicePixelRatio * window.screen.width;
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
  const remRatio = rem / windowResWidth;
  const hiResClass = remRatio >= 0.009 ? "" : "hi-res";

  //scroll and resize effects will refer either to the window or the scrollable div depending on size
  const [scrollContainer, setScrollContainer] = useState(undefined);

  const matchDarkMode = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : false;

  const [themeIsDark, setThemeIsDark] = useState(matchDarkMode);

  const toggleDarkMode = () => {
    if (!document.querySelector("#darkModeSwitch.disappear")) {
      setThemeIsDark(!themeIsDark);
    }
  };
  useDarkModePrefChange(toggleDarkMode);
  const themeClass = themeIsDark ? "dark" : "light";

  //update container and its width if the window resizes
  useEffect(() => {
    const container =
      containerSize >= minDesktopSize ? scrollableDiv.current : undefined;

    const newWidth = container ? container.clientWidth : containerSize;
    setScrollContainer(container);
    setContainerWidth(newWidth);
  }, [containerSize]);

  useEffect(() => {
    window.addEventListener("touchstart", () => {
      setUsingTouch(true);
    });
  }, []);
  return (
    <>
      <HueChangeBG
        themeIsDark={themeIsDark}
        refContainer={scrollContainer}
        themeClass={themeClass}
        pauseColors={pauseAnimations}
      />
      <header className={themeClass}>
        <Navbar
          motionOkay={motionOkay}
          sections={sections.current}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </header>
      <main className={themeClass + " " + hiResClass}>
        <DarkModeSwitch
          themeIsDark={themeIsDark}
          toggleDarkMode={toggleDarkMode}
          refContainer={scrollContainer}
          pauseAppearance={pauseAnimations}
        />
        <SpinningLogo
          speed={0.5}
          themeIsDark={themeIsDark}
          refContainer={scrollContainer}
        />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <div className='content-all' ref={contentWrapper}>
                {/* scrollContainer element is falsey in 1-col layout and truthy in 2-col */}
                <Intro
                  motionOkay={motionOkay}
                  splitLayoutIsActive={Boolean(scrollContainer)}
                />
                <div className='scrolling-content' ref={scrollableDiv}>
                  <About setCurrentSection={setCurrentSection} />
                  <Skills
                    motionOkay={motionOkay}
                    setCurrentSection={setCurrentSection}
                  />
                  <Experience setCurrentSection={setCurrentSection} />
                  <Reviews
                    usingTouch={usingTouch}
                    motionOkay={motionOkay}
                    containerWidth={containerWidth}
                    themeIsDark={themeIsDark}
                    setCurrentSection={setCurrentSection}
                    container={scrollContainer}
                    setPauseAnimations={setPauseAnimations}
                    pauseAnimations={pauseAnimations}
                  />
                  <Portfolio setCurrentSection={setCurrentSection} />
                </div>
              </div>
            }
          />
          {/* <Route exact path='/about' element={<About />} />
          <Route exact path='/skills' element={<Skills />} />
          <Route exact path='/experience' element={<Experience />} />
          <Route exact path='/portfolio' element={<Portfolio />} /> */}
        </Routes>
        <HireMe
          themeIsDark={themeIsDark}
          refContainer={scrollContainer}
          motionOkay={motionOkay}
          pauseWave={pauseAnimations}
        />
      </main>
    </>
  );
}

export default App;
