import React, {useState} from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'
function Navbar() {

    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='header' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active' className='navbar-logo' onClick={closeMobileMenu}>
                        Jón Ingimarsson
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active' className='nav-links' onClick={closeMobileMenu}>
                                Heim
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>  
        </>
    )
}

export default Navbar
