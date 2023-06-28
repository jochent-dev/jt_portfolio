import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import { faEnvelope, faHome, faUser, faFolder } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './assets/PressStart2P-Regular.ttf'

export default function App() {
  return (
    <div className='container'>
      <nav className='nav_bar'>
        <div className='nav_link'>
          <NavLink className={({ isActive }) =>
            [
              "link",
              isActive ? "active_link" : null,
            ]
              .filter(Boolean)
              .join(" ")
          } to="/">
            <FontAwesomeIcon icon={faHome} size="3x" />
            <span className='link_name'>&gt;Home</span>
          </NavLink>
        </div>
        <div className='nav_link'>
        <NavLink className={({ isActive }) =>
            [
              "link",
              isActive ? "active_link" : null,
            ]
              .filter(Boolean)
              .join(" ")
          } to="/about">
            <FontAwesomeIcon icon={faUser} size="3x" />
            <span className='link_name'>&gt;About</span>

          </NavLink>
        </div>
        <div className='nav_link'>
        <NavLink className={({ isActive }) =>
            [
              "link",
              isActive ? "active_link" : null,
            ]
              .filter(Boolean)
              .join(" ")
          } to="/projects">
            <FontAwesomeIcon icon={faFolder} size="3x" />
            <span className='link_name'>&gt;Proj.</span>

          </NavLink>
        </div>
        <div className='nav_link'>
        <NavLink className={({ isActive }) =>
            [
              "link",
              isActive ? "active_link" : null,
            ]
              .filter(Boolean)
              .join(" ")
          } to="/contact">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
            <span className='link_name'>&gt;Cont.</span>
          </NavLink>
        </div>
      </nav>
      <div className='boxed'>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>

  );
}
