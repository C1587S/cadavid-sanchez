import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import CV from "../pdfs/SCS_CV.pdf"

const NavMenu = () => {
    return(
        <Navbar className="mt-2" collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav class="navbar navbar-dark bg-dark variant-dark">
            <Nav.Link href={CV} target = "_blank">CV</Nav.Link>
            </Nav>
            <NavDropdown class="navbar navbar-dark bg-dark variant-dark" title="Research" id="basic-nav-dropdown">
            <NavDropdown.Item href="#economics">Economics</NavDropdown.Item>
            <NavDropdown.Item href="#datascience">Data Science</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
        </Navbar>
        

    )
}

export default NavMenu;