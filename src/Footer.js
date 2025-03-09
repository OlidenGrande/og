import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        {/* <Link to="/Privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> */}
        <a href="/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;