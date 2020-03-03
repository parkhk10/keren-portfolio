import React from 'react';
import Logo from './Logo';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="nav-bar">
            <a href="/"><Logo /></a>
            <div className="">
                <a id="about-menu" href="/about">
                    <Link to="/about">about</Link>
                </a> 
                <a id="work-menu" href="/work">
                    <Link to="/work">work</Link>
                </a> 
                <a id="play-menu" href="/play">
                    <Link to="/play">play</Link>
                </a> 
            </div>
        </nav>
    )
}

export default NavBar;