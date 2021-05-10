import React from 'react'
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap'
const NavMenu = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
            </Nav>
            <Nav>
            <Nav.Link href="#CV">CV</Nav.Link>
            <Nav.Link href="#research">Research</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

    )
}

export default NavMenu;