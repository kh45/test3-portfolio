import React from 'react'
import { Link } from 'react-scroll'

class Navbar extends React.Component {


    handleClick() {
        window.open("https://drive.google.com/file/d/1rGVrVuMQUlFjLcqpTfCzbJ5PkIH3pP4C/view")
    }

    render() {
        return (
            <nav className="nav" id="nav">
                <div className="nav-content">
                    <ul className="nav-items">
                        <li className="nav-item"><Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>Section 1</Link></li>
                        <li className="nav-item"><Link activeClass="active" to="section2" spy={true} smooth={true} duration={500}>Section 2</Link></li>
                        <li className="nav-item"><Link activeClass="active" to="section3" spy={true} smooth={true} duration={500}>Section 3</Link></li>
                        <li className="nav-item"><Link activeClass="active" to="section4" spy={true} smooth={true} duration={500}>Section 4</Link></li>
                        <li className="nav-item"><Link activeClass="active" to="section5" spy={true} smooth={true} duration={500}>Section 5</Link></li>
                        <li className="nav-item" onClick={this.handleClick}>Résumé</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar