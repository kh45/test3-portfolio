import React from 'react'
import { Modal } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

class MyModal extends React.Component {

    createSlides = () => {
        return this.props.project.pictures.map(picture => <Carousel.Item>
            <img className="d-block w-100" src={require(`${this.props.project.img1}`)} alt="First slide"/>
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>)
    }

    createButtons = (project) => {
        return (<div>
                <img src={require(`${project.buttons.image}`)} />
                <p>{project.buttons.name}</p>
            </div>)
    }

    render() {
        return(
            <Modal show={this.props.showModal} size="lg" onHide={this.props.handleHideParent} dialogClassName="hey">
                <Modal.Header className="screenshot">
                    <Carousel autoPlay={true} interval={2500}>
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
                <Modal.Body className="custom-modal-body">
                    <div>
                        <h3>{this.props.project.title}</h3>
                        <h5>React | Redux | Rails | Bootstrap</h5>
                        <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
                    </div>
                </Modal.Body>
                <Modal.Footer><div>{this.createButtons(this.props.project)}</div></Modal.Footer>
            </Modal>
        )
    }
}

export default MyModal