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

import "./App.css";

const favicon = new URL(
  "../src/assets/strange-quark-logo-blackhole-dark.svg",
  import.meta.url
).href;
document.querySelector("link[rel='icon']").href = favicon;

function App() {
  return (
    <>
      <HueChangeBG defaultColor={"#D6F8F1"} />
      <header className='fixed w-screen top-0 left-0 z-10 pb-8  px-4'>
        <Navbar />
      </header>
      <main className='px-4 max-w-100'>
        <SpinningLogo speed={0.5} image={LogoBright} />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <div className='content-all'>
                <Intro />
                <div className='scrolling-content'>
                  <About />
                  <Skills />
                  <Experience />
                  <Reviews />
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
        <HireMe />
      </main>
    </>
  );
}

export default App;
