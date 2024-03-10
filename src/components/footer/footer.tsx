import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      Made with <i className={`fa-solid fa-heart red`} /> by Access Denied (Chirag and Shresth)
    </footer>
  );
}

export default Footer;
