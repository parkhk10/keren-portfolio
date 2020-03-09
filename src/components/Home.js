import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import SugarsThumb from './SugarsThumb';
import AirbnbThumb from './AirbnbThumb';

const Home = () => {
    return(
        <div className="">
            <main class="home-main">
                <section id="intro-blurb">
                    <h1>Hi, I'm Keren.</h1>
                    <p>I’m a front-end developer and a design enthusiast.</p>
                    <p>Driven by passion for creating thoughtful experiences 
                        that empower others.</p>
                    <div id="intro-icons">
                        <FontAwesomeIcon icon={faEnvelope} className="fa-lg" id="envelope-icon"/>
                        <FontAwesomeIcon icon={faGithub} className="fa-lg"id="github-icon"/>
                        <FontAwesomeIcon icon={faLinkedin} className="fa-lg" id="linkedin-icon"/>
                    </div>
                </section> 
                <br />
                <br />
                <div id="home-projects">
                    <div className="project-display-row">
                        <SugarsThumb />
                        <div className="project-display-caption">
                            <div>
                                <h4 className="project-title">How do we digest sugars?</h4>
                                <span>information visualization</span>
                            </div>
                        </div>
                    </div>
                    <div className="project-display-row">
                        <img src="./images/airbnb.png"/>
                            <div className="project-display-caption">
                                <div>
                                    <h4 className="project-title">How can Airbnb increase customer loyalty?</h4>
                                    <span>service design</span>
                                </div>
                            </div>
                    </div>
                    <div className="project-display-row">
                        <img src="./images/majors.png"/>
                            <div className="project-display-caption">
                                <div>
                                    <h4 className="project-title">How should I select my college major?</h4>
                                    <span>information visualization</span>
                                </div>
                            </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;