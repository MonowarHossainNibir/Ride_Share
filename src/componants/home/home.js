import React from 'react';
import {Button,Navbar,Nav,Form,Card} from 'react-bootstrap';
import bgImg from '../../images/background.jpg';
import carImg from '../../images/car.png';
import busImg from '../../images/bus.png';
import trainImg from '../../images/train.png';
import bikeImg from '../../images/bike.png';


const home = () => {
    return (
        <div>
        <div style={{position:'absolute'}} className='background'>
            <img style={{width:'100%', height:'780px'}} src={bgImg} alt=""/>
        </div>
        <div style={{position:'relative'}}>
            <Navbar style={{backgroundColor:''}} variant="light">
            <Nav className="mr-auto">
            </Nav>
            <Form inline className="mr-sm-2 nav" >
            <Nav.Link style={{color:'white'}} href="#home">Home</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#features">Destination</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#pricing">blog</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#pricing">Contact</Nav.Link>
            <Button style={{color:'white'}} variant="outline-primary">Login</Button>
            </Form>
            </Navbar>
        </div>

        <div className="d-flex justify-content-center ">
            <Card className='card'>
            <Card.Img className='cardImg' variant="top" src={bikeImg} />
            <Card.Body>
                <Card.Title>Bike</Card.Title>
            </Card.Body>
            </Card>
            <Card className='card'>
            <Card.Img className='cardImg' variant="top" src={carImg} />
            <Card.Body>
                <Card.Title>Car</Card.Title>
            </Card.Body>
            </Card>
            <Card className='card'>
            <Card.Img className='cardImg' variant="top" src={busImg} />
            <Card.Body>
                <Card.Title>Bus</Card.Title>
            </Card.Body>
            </Card>
            <Card className='card'>
            <Card.Img className='cardImg' variant="top" src={trainImg} />
            <Card.Body>
                <Card.Title>Train</Card.Title>
            </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default home;