import React from "react";
import logo from '../src/assets/Logo_OG.png';
import './Header.css';

function Header() {
    return(
        <header>
            <img src={logo} alt="Mi-Logo"/>
        </header>
    );
}

export default Header;