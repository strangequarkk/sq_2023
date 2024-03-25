import { HashLink } from "react-router-hash-link";
import "./navbar-style.css";
import PropTypes from "prop-types";
/*
 * Navigation for single page application, using HashLink to scroll smoothly between sections
 */

export const Navbar = ({
  sections,
  currentSection,
  setCurrentSection,
  motionOkay,
}) => {
  return (
    <nav className='navbar font-nav'>
      {sections.map((section) => {
        const activeClass = currentSection === section ? "active" : "";
        const smoothScroll = motionOkay ? "smooth" : "";
        return (
          <HashLink
            key={section}
            smooth={smoothScroll}
            to={"/#" + section}
            className={"nav-link " + activeClass}
            onClick={() => setCurrentSection(section)}
          >
            {section}
          </HashLink>
        );
      })}
    </nav>
  );
};

Navbar.propTypes = {
  sections: PropTypes.array,
  currentSection: PropTypes.string,
  setCurrentSection: PropTypes.func,
  motionOkay: PropTypes.bool,
};
