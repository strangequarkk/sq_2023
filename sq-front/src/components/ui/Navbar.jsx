import { HashLink } from 'react-router-hash-link';
/*
* Navigation for single page application, using HashLink to scroll smoothly between sections
*/
export const Navbar = () => {
    return (
        <nav className="navbar font-nav flex place-content-between py-2">
            <HashLink smooth to='/#about' className="nav-link">
                About
            </HashLink>
            <HashLink smooth to={'/#skills'} className="nav-link">
                Skills
            </HashLink>
            <HashLink smooth to={'/#experience'} className="nav-link">
                Experience
            </HashLink>
            <HashLink smooth to={'/#portfolio'} className="nav-link">
                Portfolio
            </HashLink>
      </nav>
    )

}
