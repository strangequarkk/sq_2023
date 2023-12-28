import { Routes, Route} from 'react-router-dom'
// import { AddResumeItem } from './components/editor/AddResumeItem'
// import { ResumeList } from './components/editor/ResumeList'
// import { UpdateResume } from './components/editor/UpdateResume'
import { Navbar } from './components/ui/Navbar'
import { SpinningLogo } from './components/ui/SpinningLogo'
import { Intro } from './components/Intro'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Portfolio } from './components/Portfolio'
import { Reviews } from './components/Reviews'
import { ShiftBG } from './components/ui/ShiftBG'
import LogoBright from '../src/assets/strange-quark-logo-blackhole-light.svg'

import './App.css'

const favicon = new URL('../src/assets/strange-quark-logo-blackhole-dark.svg', import.meta.url).href
document.querySelector("link[rel='icon']").href = favicon;

function App() {
  

  return (
    <>
      <ShiftBG defaultColor={ "#D6F8F1"} />
      <header className="fixed w-screen top-0 left-0 z-10 pb-8  px-4">
        <Navbar />
      </header>
      <main className="px-4 max-w-100">
        <SpinningLogo speed={0.5} image={LogoBright} />
      <Routes>
          <Route exact path="/" element={
            <>
              < Intro />
              < About />
              < Skills />
              < Experience />
              < Reviews />
              < Portfolio />
            </>
            
          } />
          <Route exact path="/about" element={< About />} />
          <Route exact path="/skills" element={< Skills />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/portfolio" element={<Portfolio/>}/>
        {/* <Route exact path="/edit/resume" element={< ResumeList />} />
        <Route exact path="/edit/resume/add/" element={< AddResumeItem />} />
        <Route exact path="/edit/resume/:id/update/" element={< UpdateResume/>} /> */}
        </Routes>
        </main>
    </>
  )
}

export default App
