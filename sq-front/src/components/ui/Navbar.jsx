import { HashLink } from 'react-router-hash-link';

export const Navbar = () => {
    return (
        <nav className="navbar font-nav flex place-content-between py-2 px-4">
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
