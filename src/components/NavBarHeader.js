import React from 'react'
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const NavMenu = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
            <Nav.Link href="#deets">Research</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

    )
}

export default NavMenu;