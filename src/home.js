import React from 'react'
import Typed from 'react-typed'
// import { Link } from 'react-router-dom'
// import Particles from 'react-particles-js'
import Particles from 'react-tsparticles'
// Hiii Mom!


class Home extends React.Component {
    render() {
        return(
            <div className="home-container">
                <div id="particles-canvas">
                {/* <Particles 
                    params={{
                        particles: {
                            number: {
                                value: 200,
                                density: {
                                    enable: true,
                                    value_area: 1000
                                }
                            }
                        },
                        detectRetina: false,
                        fpsLimit: 60
                    }} /> */}
                    <Particles
        id="tsparticles"
        options={{
            background: {
                color: "#000"
            },
            detectRetina: true,
            fpsLimit: 60,
            interactivity: {
                detectsOn: "window",
                events: {
                    // onHover: {
                        // mode: "trail",
                        // enable: true
                    // }
                },
                modes: {
                    trail: {
                        delay: 0.005,
                        quantity: 5,
                        particles: {
                            color: {
                                value: "#ff0000",
                                animation: {
                                    enable: true,
                                    speed: 400,
                                    sync: true
                                }
                            },
                            collisions: {
                                enable: false
                            },
                            links: {
                                enable: false
                            },
                            move: {
                                outMode: "destroy",
                                speed: 5
                            },
                            size: {
                                value: 5,
                                animation: {
                                    enable: true,
                                    speed: 5,
                                    minimumValue: 1,
                                    sync: true,
                                    startValue: "min",
                                    destroy: "max"
                                }
                            }
                        }
                    }
                },
                resize: true
            },
            particles: {
                color: {
                    animation: {
                        enable: true,
                        sync: false,
                        speed: 50
                    },
                    value: "#f00"
                },
                links: {
                    color: "random",
                    enable: true
                },
                collisions: {
                    enable: true,
                },
                move: {
                    enable: true
                },
                number: {
                    density: {
                        enable: true
                    }
                },
                opacity: {
                    animation: {
                        enable: true,
                        minimumValue: 0.3,
                        speed: 0.5
                    },
                    value: 0.8,
                    random: {
                        enable: true,
                        minimumValue: 0.3
                    }
                },
                size: {
                    animation: {
                        enable: true,
                        minimumValue: 1,
                        speed: 3
                    },
                    value: 3,
                    random: {
                        enable: true,
                        minimumValue: 1
                    }
                }
            }
        }} 
      />
                    </div>
                <div className="home-text">
                    <h1>Hello I Am: <Typed strings={["Khaled Hassan"]} onComplete={(self) => self.cursor.remove()} startDelay={500} typeSpeed={40} /></h1>
                    <h1>I am a: <Typed strings={["Full Stack Web Developer"]} startDelay={1500} typeSpeed={40} onComplete={(self) => self.cursor.remove()} /></h1>
                    <Typed strings={["What would you like to see?"]} startDelay={3000} typeSpeed={40} onComplete={(self) => self.cursor.remove()} />
                    <hr></hr>
                </div>
                {/* <Link to="/about"><button>About Me</button></Link> */}
                {/* <Link to="/projects"><button>Projects</button></Link> */}
                {/* <Link to="/projects"><button>Projects</button></Link> */}
            </div>
        )
    }
}

export default Home