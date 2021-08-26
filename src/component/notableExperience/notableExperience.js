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
                            <Col md={{span: 3}} className='notable_experience_content_header'>
                                UX/UI design: 
                            </Col>

                            <Col md={{span: 9}}>
                                <ul>
                                    <li>
                                        Having deep understanding of <strong>UX reviews</strong>, <strong>heuristic evaluations</strong>,
                                        and <strong>Shneiderman's Eight Golden Rules</strong> of Interface Design.
                                        Being skilled in designing an user-friendly interface .
                                    </li>
                                    <li>
                                        Having experience with prototyping tools, such as <strong>Axure RP</strong>
                                        and <strong>Balsamiq</strong>.
                                        Be capable of collaborating within a team to create a prototype in heigh efficiency.
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={{span: 3}} className='notable_experience_content_header'>
                                Version Control System: 
                            </Col>

                            <Col md={{span: 9}}>
                                <ul>    
                                    <li>
                                        Being able to collaboratively work in a team using <strong>Github</strong>. Understanding <strong>gitflow</strong> and <strong>CI/CD</strong> tools.
                                    </li>
                                    <li>
                                        Being skilled in applying <strong>SVN</strong> as a version controll system.
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={{span: 3}} className='notable_experience_content_header'>
                                Database Schema Design: 
                            </Col>

                            <Col md={{span: 9}}>
                                <ul>    
                                    <li>
                                        Having Strong understanding of <strong>database design theory </strong>
                                        and <strong>normalization</strong>.
                                    </li>
                                    <li>
                                        Be capable of design <strong>entity relationship diagram </strong>and <strong>tranform it into database schema</strong>,
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
