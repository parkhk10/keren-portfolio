import React from 'react';
import Logo from './Logo';

const NavBar = () => {
    return(
        <nav className="nav-bar">
            <a href="/"><Logo /></a>
            <div className="">
                <a id="about-menu" href="#">about</a> 
                <a id="work-menu" href="#">work</a> 
                <a id="play-menu" href="#">play</a> 
            </div>
        </nav>
    )
}

export default NavBar;