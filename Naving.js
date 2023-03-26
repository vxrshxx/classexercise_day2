import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png'

function Naving() {
  return (
    <div> 
      <Navbar bg="secondary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
            <img src={logo} width={35} height={35} alt=""/>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Details</Nav.Link>
            <Nav.Link href="#pricing">Location</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Naving