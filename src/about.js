import React from 'react';
import profilePic from './assets/profpic.png'

class About extends React.Component {

    render() {

        const filePath = './assets/logos'
        return(
            <div className="about-container" id="section1">
                <div className="about-title">
                    <h1 className="about-header">ABOUT</h1>
                    <div className="about-bar"></div>
                </div>
                    <div className="holder">
                        <img src={profilePic} alt="" />
                        <div className="caption">
                        <h3>Who's this guy?</h3>
                        <p>I'm a Full Stack Web Developer based in Washington D.C. When I'm not learning new frameworks you can catch me watching Liverpool FC or playing pickup basketball.</p>
                        </div>
                    </div>
                    <div className="jimmybuckets">
                        <h3 className="about-sub-headers">My Story</h3>
                        <p>
                        I graduated from the University of Maryland in 2016 with a degree in Mechanical Engineering and went on to work at NASA for 2.5 years. There I realized that coding is what I truly enjoy so I quit to attend Flatiron School Coding Bootcamp. I have a serious passion for learning new technologies and creating sleek, user-friendly, fast web applications.
                        </p>
                        <h3 className="about-sub-headers">SKILLS</h3>
                        <div className="skills">
                            <div className="typeSkills">
                                <h5 className="skills-heading">FRONT-END</h5>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/react.svg`)} />
                                    <p>React</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/redux.svg`)} />
                                    <p>Redux</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/javascript.svg`)} />
                                    <p>JavaScript</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/angular-icon-1.svg`)} />
                                    <p>Angular</p>
                                </div>
                            </div>
                            <div className="typeSkills">
                                <h5 className="skills-heading">BACK-END</h5>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/nodejs.svg`)} />
                                    <p>NodeJS</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/ruby.svg`)} />
                                    <p>Ruby/Rails</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/postgresql.svg`)} />
                                    <p>PostgreSQL</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/python.svg`)} />
                                    <p>Python</p>
                                </div>
                            </div>
                            <div className="typeSkills">
                                <h5 className="skills-heading">TOOLS</h5>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/github.svg`)} />
                                    <p>GitHub</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/AWS.svg`)} />
                                    <p>AWS</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/visualstudio.svg`)} />
                                    <p>VisualStudio</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/typescript.svg`)} />
                                    <p>TypeScript</p>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        )
    }
}

export default About