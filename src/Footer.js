import React from "react";
import './Footer.css';

function Footer() {
    return(
        <footer className="footer">
            <div className="footer-links">
                <a href="/About">About me</a>
                <a href="/privacy">Privacy</a>
            </div>
            {/* <div className="footer-clients">
                <h3>Clientes</h3>
                <div className="client-icons">

                </div>
            </div> */}
            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear} Oliden Grande</p>
            </div>
        </footer>
    );
}

export default Footer;