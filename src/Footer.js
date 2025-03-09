import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
      </div>
      {/* ... (el resto del componente) ... */}
    </footer>
  );
}

export default Footer;