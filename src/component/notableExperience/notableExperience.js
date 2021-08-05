import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import './notableExperience.css'

export default class notableExperience extends Component {
    render() {
        return (
            <div className='notable_experience'>
                <div className='notable_experience_header'>
                    My Notable Experience
                </div>
                <div className='notable_experience_content'>
                    <Container>
                        <Row>
                            <Col md={{span: 3}}>
                                UX/UI design: 
                            </Col>

                            <Col md={{span: 9}}>
                                <ul>
                                    <li>
                                        Having deep understanding of UX reviews and heuristic evaluations, 
                                        such as Shneiderman's Eight Golden Rules of Interface Design. 
                                        Being skilled in designing an user-friendly interface .
                                    </li>
                                    <li>
                                        Having experience with prototyping tools, such as Axure RP and Balsamiq.
                                        Be capable of collaborating within a team to create a prototype in heigh efficiency.
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={{span: 3}}>
                                Version Control System: 
                            </Col>

                            <Col md={{span: 9}}>
                                <ul>    
                                    <li>
                                        Being able to collaboratively work in a team using github. Understanding gitflow and CI/CD tools.
                                    </li>
                                    <li>
                                        skilled in applying SVN as a version controll system.
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={{span: 3}}>
                                Database Schema Design: 
                            </Col>

                            <Col md={{span: 9}}>
                                <ul>    
                                    <li>
                                        Having Strong understanding of database design theoryand normalization
                                    </li>
                                    <li>
                                        Be capable of design entity relationship diagram and tranform it into database schema,
                                        by removing any generalizations (subclass), unnecessary data and structural redundancies, multi-valued attributes, 
                                        optional relationships,and irregularities.
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        )
    }
}
