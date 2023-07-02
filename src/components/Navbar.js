import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => { setClick(!click) }
  const closeMobileMenu = () => { setClick(false) }

  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                Cade Fowler
            </Link>
            <div className="nav-menu" onClick={handleClick}>
                <i className={ click ? 'not-bars' : 'bars' } />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
