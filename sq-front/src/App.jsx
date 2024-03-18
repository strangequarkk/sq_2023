import { Routes, Route } from "react-router-dom";
// import { AddResumeItem } from './components/editor/AddResumeItem'
// import { ResumeList } from './components/editor/ResumeList'
// import { UpdateResume } from './components/editor/UpdateResume'
import { Navbar } from "./components/ui/Navbar/Navbar";
import { SpinningLogo } from "./components/ui/SpinningLogo/SpinningLogo";
import { Intro } from "./components/sections/Intro/Intro";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills/Skills";
import { Experience } from "./components/sections/Experience/Experience";
import { Portfolio } from "./components/sections/Portfolio/Portfolio";
import { Reviews } from "./components/sections/Reviews/Reviews";
import { HueChangeBG } from "./components/ui/HueChangeBG/HueChangeBG";
import { HireMe } from "./components/ui/HireMe/HireMe";
import LogoBright from "../src/assets/strange-quark-logo-blackhole-light.svg";
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
  const defaultColor = "#D6F8F1";
  const minDesktopSize = 1210;
  const winWidth = useContainerSize()[0];

  //scroll and resize effects will refer either to the window or the scrollable div depending on size
  const [effectController, setEffectController] = useState(undefined);

  useEffect(() => {
    const container =
      winWidth >= minDesktopSize ? scrollableDiv.current : undefined;
    setEffectController(container);
  }, [winWidth]);

  return (
    <>
      <HueChangeBG
        defaultColor={defaultColor}
        refContainer={effectController}
      />
      <header className='fixed w-screen top-0 left-0 z-10 pb-8  px-4'>
        <Navbar />
      </header>
      <main className='px-4 max-w-100'>
        <SpinningLogo
          speed={0.5}
          image={LogoBright}
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
                  <Reviews refContainer={effectController} />
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
        <HireMe refContainer={effectController} />
      </main>
    </>
  );
}

export default App;
