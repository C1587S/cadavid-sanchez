import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import CV from "../pdfs/SCS_CV.pdf"

const NavMenu = () => {
    return(
        <Navbar className="mt-2" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
            </Nav>
            <Nav>
            <Nav.Link href={CV} target = "_blank">CV</Nav.Link>
            <Nav.Link href="#research">Research</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

    )
}

export default NavMenu;