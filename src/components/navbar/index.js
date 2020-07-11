import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <Navbar bg="white" variant="light">
            <Navbar.Brand as={Link} to="/">Ali Masyhur</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
            </Nav>
            
        </Navbar>
    )
}

export default navbar;