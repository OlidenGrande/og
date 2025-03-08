import React from "react";
import logo from '../src/assets/Logo_OG.png'

function Header() {
    return(
        <header style={{textAlign: 'center', padding: '20px 0'}}>
            <img src={logo} alt="Mi-Logo" style={{maxWidth: '200px'}}/>
        </header>
    );
}

export default Header;