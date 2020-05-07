import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


function TopNavigation() {

    return (
        <Navbar style={{zIndex: 200}} expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Petits Loups LLC</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#deets">Help</Nav.Link>
                    <Nav.Link href="#memes">Log In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopNavigation;
