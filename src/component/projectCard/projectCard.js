import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import { OffcanvasProvider, Trigger, Offcanvas } from 'react-simple-offcanvas'
import './projectCard.css'

export default class projectCard extends Component {

    state = {
        show: false
    }

    handleClose = () => this.setState({show: false});
    toggleShow = () => {
        const {show} = this.state;
        this.setState({show: !show});
    }

    render() {

        const {imgURL, header, techStack, sourceCodeURL, webURL, description} = this.props
        const {show} = this.state;

        return (
            <div className='project_card'>
                <Container>
                    <Row>
                        <Col md={{span: 3}}>
                            {imgURL? <img src={imgURL}></img> : null}
                        </Col>

                        <Col md={{span: 6, offset: 3}}>
                            {
                                header? <h4>{header}</h4> : null
                            }
                            {
                                techStack? <p>{techStack}</p>: null
                            }
                            {
                                sourceCodeURL?<a href={sourceCodeURL} className='project_button'>view source code<br/></a> : null
                            }
                            {
                                webURL?<a href={webURL} className='project_button'>view web page</a> : null
                            }
                            {
                                description?
                                    <OffcanvasProvider>
                                        <Trigger component="button" children="view description" className="project_offcanvas_trigger"/>
                                        <Offcanvas position="left" title={header} className="project_offcanvas">
                                            {description}
                                        </Offcanvas>
                                    </OffcanvasProvider>
                                : null
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
