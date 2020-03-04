import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    return(
        <div className="">
            <main class="home-main">
                <section id="intro-blurb">
                    <h1>Hi, I'm Keren.</h1>
                    <p>I’m a front-end developer and a design enthusiast.</p>
                    <p>Driven by passion for creating thoughtful experiences 
                        that empower others.</p>
                </section> 
                <div id="intro-icons">
                    <FontAwesomeIcon icon={faEnvelope} className="fa-lg" id="envelope-icon"/>
                    <FontAwesomeIcon icon={faGithub} className="fa-lg"id="github-icon"/>
                    <FontAwesomeIcon icon={faLinkedin} className="fa-lg" id="linkedin-icon"/>
                </div>
            </main>
        </div>
    )
}

export default Home;