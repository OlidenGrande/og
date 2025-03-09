import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/Privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
}

export default Footer;