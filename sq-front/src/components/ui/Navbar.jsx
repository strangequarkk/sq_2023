import { HashLink } from 'react-router-hash-link';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <HashLink smooth to='/#about' className="nav-link">
                About
            </HashLink>
            <HashLink smooth to={'/#skills'} className="nav-link">
                Skills
            </HashLink>
            <HashLink to={'/#experience'} className="nav-link">
                Experience
            </HashLink>
            <HashLink to={'/#portfolio'} className="nav-link">
                Portfolio
            </HashLink>
      </nav>
    )

}
