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
import { ShiftBG } from './components/ui/ShiftBG'

import './App.css'

function App() {


  return (
    <>
      <ShiftBG defaultColor={ "#D6F8F1"} />
      <header className="fixed w-screen left-0 z-10 bg-white/50">
        <Navbar />
      </header>
      <main>
        <SpinningLogo speed={0.5} image={"../src/assets/strange-quark-logo-blackhole-light.svg"} />
      <Routes>
          <Route exact path="/" element={
            <>
              < Intro />
              < About />
              < Skills />
              < Experience />
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
