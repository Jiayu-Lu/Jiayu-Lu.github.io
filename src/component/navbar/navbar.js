import React, { Component } from 'react'
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './navbar.css'

export default class index extends Component {
    render() {
        return (
            <div className='navbar'>
                <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
                    <Container>
                        <Navbar.Brand href="#">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#project">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <NavDropdown title="Utils" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#toDoList">To Do List</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#githubSearch">Github User Search</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Language" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">English</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
