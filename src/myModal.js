import React from 'react'
import { Modal } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

class MyModal extends React.Component {

    render() {
        return(
            <Modal show={this.props.showModal} size="lg" onHide={this.props.handleHideParent} dialogClassName="hey">
                <Modal.Header className="screenshot">
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src={require(`${this.props.project.img1}`)} alt="First slide"/>
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={require('./assets/SportsScraper.png')} alt="Third slide"/>
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={require('./assets/SportsScraper.png')} alt="Third slide"/>

                        <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                </Modal.Header>
                <Modal.Body className="yello">
                    <div className="nigga">
                    Title of Thing
                    </div>
                </Modal.Body>
                <Modal.Footer>Close</Modal.Footer>
            </Modal>
        )
    }
}

export default MyModal