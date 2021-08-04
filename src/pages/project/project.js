import React, { Component } from 'react'
import { Fade, Tab, Tabs } from 'react-bootstrap';
import './project.css'
import Navbar from '../../component/navbar/navbar'
import ProjectCard from '../../component/projectCard/projectCard'
import ProjectBanner from '../../component/projectBanner/projectBanner'
import Footer from '../../component/footer/footer'

import EmpowerUAfrica from '../../images/imgs/EmpowerUAfrica.png'
import neo4j from '../../images/imgs/neo4j.png'
import postgresql from '../../images/imgs/postgresql.png'

export default class project extends Component {
    render() {
        return (
            <div className='project_page'>
                <Navbar/>
                <ProjectBanner/>
                <div className='index_body'>
                    <Tabs
                    defaultActiveKey="All"
                    transition={Fade}
                    id="project_type_switch"
                    className="mb-3 project_type_switch"
                    >
                    <Tab eventKey="All" title="All" className="project_type_context">
                        <ProjectCard imgURL={EmpowerUAfrica} 
                                    header='EmpowerUAfrica website'
                                    techStack='HTML/CSS/JS-React-Node-Express-MySQL'
                                    sourceCodeURL='https://github.com/UTSCCSCC01/project-uoft-kings'
                                    webURL=''
                                    description=''
                        />
                        <ProjectCard imgURL={postgresql} 
                                    header='PostgreSQL JDBC Backend'
                                    techStack='PostgreSQL JDBC'
                                    sourceCodeURL='https://github.com/UTSCCSCC01/project-uoft-kings'
                                    webURL=''
                                    description='hi'
                        />
                        <ProjectCard imgURL={neo4j} 
                                    header='neo4j Java Server'
                                    techStack='Neo4j Java-Server'
                                    sourceCodeURL='https://github.com/UTSCCSCC01/project-uoft-kings'
                                    webURL=''
                                    description=''
                        />
                    </Tab>
                    <Tab eventKey="Software Development" title="Software Development" className="project_type_context">
                        <ProjectCard imgURL={postgresql} 
                                    header='PostgreSQL JDBC Backend'
                                    techStack='PostgreSQL JDBC'
                                    sourceCodeURL='https://github.com/UTSCCSCC01/project-uoft-kings'
                                    webURL=''
                                    description='hi'
                        />
                        <ProjectCard imgURL={neo4j} 
                                    header='neo4j Java Server'
                                    techStack='Neo4j Java-Server'
                                    sourceCodeURL='https://github.com/UTSCCSCC01/project-uoft-kings'
                                    webURL=''
                                    description=''
                        />
                    </Tab>
                    <Tab eventKey="personal project" title="personal project" className="project_type_context">
                        c
                    </Tab>
                    </Tabs>
                </div>
                <Footer/>
            </div>
        )
    }
}
