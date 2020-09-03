import React from 'react'
// import { render } from '@testing-library/react'
import WOW from 'wowjs';
import MyModal from './myModal'
import { Modal } from 'react-bootstrap'
import { projectsList } from './projectsData'

class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
            selectedProject: projectsList.sportsscraper
        }
    }

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

    handleHideParent = () => {
        this.setState({
            showModal: false
        })
    }

    handleClick = (event) => {
        this.setState({
            showModal: true,
            selectedProject: projectsList[event.target.classList[1]]
        })
        // console.log(event.target.classList[1].description)
        // console.log(projectsList[event.target.classList[1]])
    }

    render() {
        return(
            <div>
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
                        <div className="learnButton sportsscraper" onClick={this.handleClick}>Learn More</div>
                    </div>
                    <div className="cardz">
                        <div className="cardz-ind pokemon wow" data-wow-offset="90">
                        </div>
                        <div className="card-text">
                            <h4>PokemonTCG</h4>
                        </div>
                        <div className="learnButton pokemonTCG" onClick={this.handleClick}>Learn More</div>
                    </div>
                    <div className="cardz">
                        <div className="cardz-ind nightlife wow" data-wow-offset="90">
                        </div>
                        <div className="card-text">
                            <h4>NightLife</h4>
                        </div>
                        <div className="learnButton nightlife2" onClick={this.handleClick}>Learn More</div>
                    </div>
                    <div className="cardz">
                        <div className="cardz-ind uefa wow" data-wow-offset="90">
                        </div>
                        <div className="card-text">
                            <h4>UEFA CHzAMPIONS MEMORY</h4>
                        </div>
                            <div className="learnButton uefaGame" onClick={this.handleClick}>Learn More</div>
                        </div>
                </div>
            </div>
            {/* <Modal show={this.state.showModal} size="lg" onHide={this.handleHide} dialogClassName="hey">
                <Modal.Header className="screenshot">
                    <img className="screenshots" src={require('./assets/SportsScraper.png')} /></Modal.Header>
                <Modal.Body className="yello">
                    <div className="nigga">
                    Title of Thing
                    </div>
                </Modal.Body>
                <Modal.Footer>Close</Modal.Footer>
            </Modal> */}
            <MyModal showModal={this.state.showModal} project={this.state.selectedProject} handleHideParent={this.handleHideParent} />
            </div>
        )
    }
}

export default Projects