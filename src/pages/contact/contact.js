import React, { Component } from 'react'
import { Col, Row, Container, Button} from 'react-bootstrap';
import Navbar from '../../component/navbar/navbar'
import ContactBanner from '../../component/contactBanner/contactBanner'
import Footer from '../../component/footer/footer'
import './contact.css'

import facebook from '../../images/icons/facebook.svg'
import github from '../../images/icons/github.svg'
import linkedin from '../../images/icons/linkedin.svg'
import mail from '../../images/icons/mail.svg'
import location from '../../images/icons/location.svg'
import discord from '../../images/icons/discord.svg'

export default class contact extends Component {
    render() {
        return (
            <div className='contact_page'>
                <Navbar/>
                <ContactBanner/>

                <div className='contact_body'>
                    <div className='contact_info'>
                        <a id='contact_location'>
                            <Container>
                                <Row>
                                    <Col md={{span: 3, offset: 3}}>
                                        <img src={location} style={{width: '2rem'}}/>
                                    </Col>

                                    <Col md={{span: 6}}>
                                        Location: Toronto, Canada
                                    </Col>
                                </Row>
                            </Container>
                        </a>
       
                        <a id='contact_mail' href="mailTo:jiay.lu@mail.utoronto.ca">
                            <Container>
                                <Row>
                                    <Col md={{span: 3, offset: 3}}>
                                        <img src={mail} style={{width: '2rem'}}/>
                                    </Col>

                                    <Col md={{span: 3}}>
                                        Email: jiay.lu@mail.utoronto.ca
                                    </Col>
                                </Row>
                            </Container>
                        </a>
                     
                        <a id='contact_linkedin' href="https://www.linkedin.com/in/josiahlu">
                            <Container>
                                <Row>
                                    <Col md={{span: 3, offset: 3}}>
                                        <img src={linkedin} style={{width: '2rem'}}/>
                                    </Col>

                                    <Col md={{span: 6}}>
                                        Linkedin: https://www.linkedin.com/in/josiahlu
                                    </Col>
                                </Row>
                            </Container>
                        </a>
                     
                        <a id='contact_github' href='https://github.com/Jiayu-Lu'>
                            <Container>
                                <Row>
                                    <Col md={{span: 3, offset: 3}}>
                                        <img src={github} style={{width: '2rem'}}/>
                                    </Col>

                                    <Col md={{span: 6}}>
                                        Github: https://github.com/Jiayu-Lu
                                    </Col>
                                </Row>
                            </Container>
                        </a>
                   
                        <a id='contact_facebook' href='https://www.facebook.com/jiayu.lu.946'>
                            <Container>
                                <Row>
                                    <Col md={{span: 3, offset: 3}}>
                                        <img src={facebook} style={{width: '2rem'}}/>
                                    </Col>

                                    <Col md={{span: 6}}>
                                        Facebook: https://www.facebook.com/jiayu.lu.946
                                    </Col>
                                </Row>
                            </Container>
                        </a>
                       
                        <a id='contact_discord'>
                            <Container>
                                <Row>
                                    <Col md={{span: 3, offset: 3}}>
                                        <img src={discord} style={{width: '2rem'}}/>
                                    </Col>

                                    <Col md={{span: 6}}>
                                        Discord: Liturtle#1950
                                    </Col>
                                </Row>
                            </Container>
                        </a>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
