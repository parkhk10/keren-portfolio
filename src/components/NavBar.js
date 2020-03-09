import React from 'react';
import Logo from './Logo';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="nav-bar">
            <a href="/keren-portfolio"><Logo /></a>
            <div className="">
                <a id="about-menu" href="/about">
                    <Link to="keren-portfolio/about">about</Link>
                </a> 
                <a id="work-menu" href="/work">
                    <Link to="keren-portfolio/work">work</Link>
                </a> 
                <a id="play-menu" href="/play">
                    <Link to="keren-portfolio/play">play</Link>
                </a> 
            </div>
        </nav>
    )
}

export default NavBar;