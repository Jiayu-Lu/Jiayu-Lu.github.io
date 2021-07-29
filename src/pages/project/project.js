import React, { Component } from 'react'
import './project.css'
import Navbar from '../../component/navbar/navbar'
import ProjectCard from '../../component/projectCard/projectCard'

import EmpowerUAfrica from '../../images/imgs/EmpowerUAfrica.png'
import neo4j from '../../images/imgs/neo4j.png'
import postgresql from '../../images/imgs/postgresql.png'

export default class project extends Component {
    render() {
        return (
            <div className='project_page'>
                <Navbar/>
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
                             description=''
                />
                <ProjectCard imgURL={neo4j} 
                             header='neo4j Java Server'
                             techStack='Neo4j Java-Server'
                             sourceCodeURL='https://github.com/UTSCCSCC01/project-uoft-kings'
                             webURL=''
                             description=''
                />
            </div>
        )
    }
}
