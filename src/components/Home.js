import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
                <FontAwesomeIcon icon={faEnvelope} />
                {/* <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faLinkedin} /> */}
            </main>
        </div>
    )
}

export default Home;