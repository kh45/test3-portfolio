import React from 'react'
// import { render } from '@testing-library/react'
import WOW from 'wowjs';

class Projects extends React.Component {

    componentDidMount() {
        new WOW.WOW().init()
    }

    handleClick() {
        window.open('www.google.com')
    }

    // onMousey(event) {
    //     console.log('hello')
    //     event.target.classList.add('testyyy')

    // }

    // deadMouse(event) {
    //     console.log('hello')
    //     event.target.classList.remove('testyyy')

    // }

    render() {
        return(
            <div className="projects-container" id="section2">
                <div>
                    <h1 className="projects-header">PROJECTS</h1>
                    <div className="projects-bar"></div>
                </div>
                <div className="project-tiles">
                    <div className="cardz">
                        <div className="cardz-ind sports wow" data-wow-offset="90">
                        </div>
                        <div className="card-text">
                            <h4>SportsScraper ↑</h4>
                        </div>
                        <div className="learnButton" onClick={this.handleClick}>Learn More</div>
                    </div>
                    <div className="cardz">
                        <div className="cardz-ind pokemon wow" data-wow-offset="90">
                        </div>
                        <div className="card-text">
                            <h4>PokemonTCG</h4>
                        </div>
                        <div className="learnButton" onClick={this.handleClick}>Learn More</div>
                    </div>
                    <div className="cardz">
                        <div className="cardz-ind nightlife wow" data-wow-offset="90">
                        </div>
                        <div className="card-text">
                            <h4>NightLife</h4>
                        </div>
                        <div className="learnButton" onClick={this.handleClick}>Learn More</div>
                    </div>
                    <div className="cardz">
                        <div className="cardz-ind uefa wow" data-wow-offset="90">
                        </div>
                        <div className="card-text">
                            <h4>UEFA CHzAMPIONS MEMORY</h4>
                        </div>
                            <div class="learnButton" onClick={this.handleClick}>Learn More</div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Projects