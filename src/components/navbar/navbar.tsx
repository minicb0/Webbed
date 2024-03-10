import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);
  const [button, setButton] = useState<boolean>(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const directHome = () => {
    const element = document.getElementById("home");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
  }
  const directAnimal = () => {
    const element = document.getElementById("animals");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
  }

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i className="fa-solid fa-horse-head fa-beat-fade"></i>
            Virtual Zoo
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='#home' className='nav-links' onClick={directHome}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='#animals' className='nav-links' onClick={directAnimal}>
                Animals
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
