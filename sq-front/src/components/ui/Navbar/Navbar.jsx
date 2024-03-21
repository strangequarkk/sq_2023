import { HashLink } from "react-router-hash-link";
import { useRef } from "react";
import "./navbar-style.css";
// external css adjust size for a smaller breakpoint than tailwind can handle

/*
 * Navigation for single page application, using HashLink to scroll smoothly between sections
 */

export const Navbar = () => {
  const links = useRef([
    "about",
    "skills",
    "experience",
    "reviews",
    "portfolio",
  ]);

  return (
    <nav className='navbar font-nav'>
      {links.current.map((section) => (
        <HashLink key={section} smooth to={"/#" + section} className='nav-link'>
          {section}
        </HashLink>
      ))}
    </nav>
  );
};
