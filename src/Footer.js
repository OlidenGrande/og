import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/og/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;