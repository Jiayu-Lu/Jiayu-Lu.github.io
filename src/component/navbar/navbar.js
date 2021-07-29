import React, { Component } from 'react'
import { Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap';
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
                        </Nav>
                        <Nav className="ml-auto">
                            <NavDropdown title="Utils" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#toDoList">To Do List</NavDropdown.Item>
                                <NavDropdown.Item href="#githubSearch">Github User Search</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#features">Language</Nav.Link>
                            <Nav.Link href="#pricing">Dark Theme</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
