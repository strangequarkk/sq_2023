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
import LogoBright from "../src/assets/strange-quark-logo-blackhole-light.svg";
import LogoDark from "../src/assets/strange-quark-logo-blackhole-dark.svg";
import { useContainerSize } from "./utils/useContainerSize";
import { useRef, useEffect, useState } from "react";

import "./App.css";

const favicon = new URL(
  "../src/assets/strange-quark-logo-blackhole-dark.svg",
  import.meta.url
).href;
document.querySelector("link[rel='icon']").href = favicon;

function App() {
  const scrollableDiv = useRef();

  const minDesktopSize = 1210;
  const winWidth = useContainerSize()[0];
  const themeIsDark = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  console.log(themeIsDark);
  const themeClass = themeIsDark ? "dark" : "light";

  const lightColor = "#D6F8F1";
  const darkColor = "#23332f";
  const defaultColor = themeIsDark ? darkColor : lightColor;
  console.log("default color:", defaultColor);
  const logoImg = themeIsDark[0] ? LogoDark : LogoBright;

  //scroll and resize effects will refer either to the window or the scrollable div depending on size
  const [effectController, setEffectController] = useState(undefined);

  const [containerWidth, setContainerWidth] = useState(winWidth);

  //update container and its width if the window resizes
  useEffect(() => {
    const container =
      winWidth >= minDesktopSize ? scrollableDiv.current : undefined;
    const newWidth = container ? container.clientWidth : winWidth;
    setEffectController(container);
    setContainerWidth(newWidth);
  }, [winWidth]);

  return (
    <>
      <HueChangeBG
        defaultColor={defaultColor}
        refContainer={effectController}
        themeClass={themeClass}
      />
      <header className={themeClass}>
        <Navbar />
      </header>
      <main className={themeClass}>
        <SpinningLogo
          speed={0.5}
          image={logoImg}
          refContainer={effectController}
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
                    themeIsDark={themeIsDark[0]}
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
        <HireMe themeIsDark={themeIsDark[0]} refContainer={effectController} />
      </main>
    </>
  );
}

export default App;
