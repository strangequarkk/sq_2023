import { Routes, Route, Link } from 'react-router-dom'
import { AddResumeItem } from './components/AddResumeItem'
import { ResumeList } from './components/ResumeList'
import { UpdateResume } from './components/UpdateResume'
import './App.css'

function App() {


  return (
    <>
      <nav className="navbar">
        <a href='/' className="navbar-brand">
          Resume
        </a>
        <Link to={'/add'} className="nav-link">
          Add
        </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={< ResumeList />} />
        <Route exact path="/resume" element={< ResumeList />} />
        <Route exact path="/add/" element={< AddResumeItem />} />
        <Route exact path="/resume/:id/update/" element={< UpdateResume/>} />
      </Routes>
    </>
  )
}

export default App
