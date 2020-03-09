import React from 'react';

const About = () => {
    console.log('trying to load about component')
    return (
        <div className="">
            <main class="home-main">
                {/* <h1>Hello!</h1> */}
                <div id="about-content-wrapper">
                    <div className="about-picture">
                        <img src="images/keren2.jpg"/>
                    </div>
                    <div className="about-text">
                        <h4>A bit about me...</h4>
                        <p>
                            My name is Keren, and I’m a front-end developer, curious dabbler, 
                            and an aspiring fit person (fit emoji). I’m passionate about 
                            leveraging technology as a tool to create meaningful experiences 
                            that empower others. 
                        </p>
                        <p>
                            Currently at Northwestern University, I will be graduating in June 
                            2020 with a degree in Computer Science with the Segal Design Certificate, 
                            and I’m looking forward to moving to Seattle to work as a software 
                            developer after I graduate. 
                        </p>
                        <p>
                            My eventual goal is to work as a front-end developer or UX engineer 
                            in the healthcare or education tech industry—two fields where I see 
                            myself doing the most purpose-driven work. 
                        </p>
                        <p>
                            Want to connect? Drop me a line at hkpark@u.northwestern.edu.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About;