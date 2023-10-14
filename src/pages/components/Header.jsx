import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Header() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }
    
    return (
        <div id="header">
            <a className="logo" href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="118" height="25" viewBox="0 0 118 25">
                    <g fill="none" fillRule="evenodd">
                    </g>
                </svg>SVG Logo
		    </a>
    		<nav>	
    		 <ul className="nav-bar"><div class="bg"></div>
    			<li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
    			<li>
                    <a className="nav-link" target="_blank" href="https://github.com/leomosley/React-Template">Github</a>
                </li>
                <li className="hamburger-container">
                    <button className="hamburger" onClick={handleToggle}>
                        <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
                            <path d="M21 13H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0-8H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0 16H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1z"></path>
                        </svg>
                    </button>
                    <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                        <button className="hamburger exit" onClick={() => closeMenu()}exact>
                            <svg className="exit-svg" width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
                                <line x1="10" y1="10" x2="20" y2="20" stroke="#000" stroke-width="1" />
                                <line x1="20" y1="10" x2="10" y2="20" stroke="#000" stroke-width="1" />
                            </svg>
                        </button>
                        <ul className="menu-list"><div class="bg"></div>
                            <br></br>
                            <br></br>
                            <br></br>
                            
                			<li>
                                <Link className="menu-nav-link" to="/">Home</Link>
                            </li>
                            <br></br>
                			<li>
                                <a className="menu-nav-link" target="_blank" href="https://github.com/leomosley">Github</a>
                            </li>
                        </ul>
                    </div>
                </li>
    		 </ul>
    		</nav>
        </div>
    );
}

export default Header;