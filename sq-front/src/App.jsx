import { Routes, Route } from "react-router-dom";
// import { AddResumeItem } from './components/editor/AddResumeItem'
// import { ResumeList } from './components/editor/ResumeList'
// import { UpdateResume } from './components/editor/UpdateResume'
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

const favicon = new URL(
  "../src/assets/strange-quark-logo-blackhole-dark.svg",
  import.meta.url
).href;
document.querySelector("link[rel='icon']").href = favicon;

function App() {
  const scrollableDiv = useRef();

  const minDesktopSize = 1210;
  const containerSize = useContainerSize()[0];
  const [containerWidth, setContainerWidth] = useState(containerSize);

  //scroll and resize effects will refer either to the window or the scrollable div depending on size
  const [emittingElement, setEmittingElement] = useState(undefined);

  const matchDarkMode = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : false;

  const [themeIsDark, setThemeIsDark] = useState(matchDarkMode);

  const toggleDarkMode = () => {
    setThemeIsDark(!themeIsDark);
  };
  useDarkModePrefChange(toggleDarkMode);
  const themeClass = themeIsDark ? "dark" : "light";

  //update container and its width if the window resizes
  useEffect(() => {
    const container =
      containerSize >= minDesktopSize ? scrollableDiv.current : undefined;

    const newWidth = container ? container.clientWidth : containerSize;
    setEmittingElement(container);
    setContainerWidth(newWidth);
  }, [containerSize]);

  return (
    <>
      <HueChangeBG
        themeIsDark={themeIsDark}
        refContainer={emittingElement}
        themeClass={themeClass}
      />
      <header className={themeClass}>
        <Navbar />
      </header>
      <main className={themeClass}>
        <DarkModeSwitch
          themeIsDark={themeIsDark}
          toggleDarkMode={toggleDarkMode}
        />
        <SpinningLogo
          speed={0.5}
          themeIsDark={themeIsDark}
          refContainer={emittingElement}
        />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <div className='content-all'>
                <Intro />
                <div className='scrolling-content' ref={scrollableDiv}>
                  <About />
                  <Skills />
                  <Experience />
                  <Reviews
                    containerWidth={containerWidth}
                    themeIsDark={themeIsDark}
                  />
                  <Portfolio />
                </div>
              </div>
            }
          />
          {/* <Route exact path='/about' element={<About />} />
          <Route exact path='/skills' element={<Skills />} />
          <Route exact path='/experience' element={<Experience />} />
          <Route exact path='/portfolio' element={<Portfolio />} /> */}
        </Routes>
        <HireMe themeIsDark={themeIsDark} refContainer={emittingElement} />
      </main>
    </>
  );
}

export default App;
