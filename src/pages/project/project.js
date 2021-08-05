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
import toDoList from '../../images/imgs/toDoList.png'
import githubSearch from '../../images/imgs/githubSearch.png'
import zoomer from '../../images/imgs/zoomer.png'
import doodleJump from '../../images/imgs/doodleJump.png'
import personalWeb from '../../images/imgs/personalWeb.png'
import AfricanImpactChallengePDF from '../../files/AfricanImpactChallenge.pdf'

export default class project extends Component {
    render() {

        const neo4jJavaServerDes = <div>
                                    <h4>Description</h4>
                                    <p>
                                        This is a backend for a service that computes 
                                        <a href='https://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon'> six degrees of Kevin Bacon</a>.
                                        This project can be restated as finding the shortest path between Kevin Bacon
                                        and a given actor (via shared movies). This project use a specific dependency injection
                                        framework (Google Dagger2) and use Neo4j as the database management system
                                    </p>
                                    <h4>Objective</h4>
                                    <p>
                                        <ul>
                                            <li>Explore NOSQL/Graph Database (Neo4j) and learn Cypher</li>
                                            <li>To create REST API endpoints that are supported by Neo4j graph databases</li>
                                            <li>To utilize Git, Git Flow, and code style correctly</li>
                                            <li>Practice Enterprise Design Patterns, specifically dependency injection and Data Access Object (DAO) Pattern</li>
                                            <li>To learn and apply CI/CD</li>
                                            <li>Use Postman as a tool to test endpoints for basic behaviour.</li>
                                        </ul>
                                    </p>
                                </div>

        const postgresqlJavaServerDes = <div>
                                        <h4>Description</h4>
                                        <p>
                                            The project is a backend service that process Postgresql queries using JDBC.  
                                        </p>
                                        <h4>Objective</h4>
                                        <p>
                                            <ul>
                                                <li>Explore SQL Database (Postgresql)</li>
                                                <li>Practice Data Definition Language(DDL) and Data Query Language(DQL)</li>
                                            </ul>
                                        </p>
                                    </div>
        
        const EmpowerUAfricaDes = <div>
                                    <h4>Description</h4>
                                    <p>
                                        The project is to build a platform to teach aspiring entrepreneurs in Africa how to create 
                                        a successful business. As well as connecting them to potential investors in order to enable them to 
                                        build market-creating innovations which tackle their country's biggest challenges with technology.
                                        For more information, please read the <a href={AfricanImpactChallengePDF}>AfricaImpactChallenge.pdf</a>.
                                    </p>
                                    <h4>Software Architecture</h4>
                                    <p>
                                        <ul>
                                            <li>
                                                The frontend uses React and it is connected to the backend using HTTP requests. 
                                                The backend is running on Node.js and Express.js. 
                                                The backend is connected to the database system using Javascript, 
                                                and for the database, this project uses MySQL and neo4j.
                                                For more detail, please read the google doc&nbsp;
                                                <a href='https://docs.google.com/document/d/1K4fWfoktwehsyiohvP7GdRp-pCMByX8j6nwAbA0p3ms/edit'>SystemDesign.md</a>
                                            </li>
                                        </ul>
                                    </p>
                                    <h4>Objective</h4>
                                    <p>
                                        <ul>
                                            <li>
                                                Designed a software that is based on MVC architecture
                                            </li>
                                            <li>
                                                Follow Agile  Development methodology
                                            </li>
                                            <li>
                                                Use project tracking tool Jira, one of the Agile tools much in 
                                                demand in the modern software engineering
                                            </li>
                                            <li>
                                                Work collaboratively within a team of size 5 people
                                            </li>
                                        </ul>
                                    </p>
                                </div>

        const toDoListDes = <div>
                                <h4>Description</h4>
                                <p>
                                    The project is a to-do-list that is build using React. It supports actions, such as 
                                    adding tasks, deleting tasks, check all tasks etc.
                                    Click on view web page to use it.
                                </p>
                                <h4>Objective</h4>
                                <p>
                                    <ul>
                                        <li>
                                            Practice fearture of React, such as state, props and 
                                            especially how each component communicates to each other
                                        </li>
                                        <li>
                                            Practice javascript ES6 - ES11 new features
                                        </li>
                                    </ul>
                                </p>
                            </div>

        const githubSearchDes = <div>
                                <h4>Description</h4>
                                <p>
                                    The project is a Github search user search engine that is build using React. 
                                    It fetches json information from Github backend service.
                                    Click on view web page to use it.
                                </p>
                                <h4>Objective</h4>
                                <p>
                                    <ul>
                                        <li>
                                            Practice fearture of React, such as state, props and 
                                            especially how each component communicates to each other
                                        </li>
                                        <li>
                                            Practice axios using together with React
                                        </li>
                                    </ul>
                                </p>
                            </div>
        
        const zoomerDes = <div>
                            <h4>Description</h4>
                            <p>
                                The project is about creating an application with a microservices architecture,
                                containing three microservices (backend Java APIs) with an accompanying API Gateway. It
                                will be using PostgreSQL, MongoDB, and Neo4J databases for the three microservices
                                respectively, and will be implementing using the Java Maven framework. It
                                also implement an API Gateway to interface with the user and to communicate with all three
                                microservices. It also dockerizes all three services
                                and add continuous integration checks via Github Actions.
                            </p>
                            <h4>Objective</h4>
                            <p>
                                <ul>
                                    <li>
                                        To practice SQL database(PostgreSQL) and NoSQL database(Mongodb and neo4j)
                                    </li>
                                    <li>
                                        To understand general design and purpose of microservice architecture
                                    </li>
                                    <li>
                                        To understand and implement an API gateway
                                    </li>
                                    <li>
                                        To create REST API endpoints that are supported by Neo4j 
                                        graph, MongoDB, and PostgreSQL databases
                                    </li>
                                    <li>
                                        To utilize git, git flow, and code style correctly
                                    </li>
                                    <li>
                                        To learn and apply CI/CD
                                    </li>
                                    <li>
                                        To understand how docker works
                                    </li>
                                </ul>
                            </p>
                        </div>
                              
        const doodleJumpDes = <div>
                            <h4>Description</h4>
                            <p>
                                This project implements the popular mobile game Doodle Jump using MIPS assembly. 
                                The project is running in a simulated environment within MARS, i.e., 
                                a simulated bitmap display and a simulated keyboard input. 
                            </p>
                            <h4>Objective</h4>
                            <p>
                                <ul>
                                    <li>
                                        To get familiar with assembly language
                                    </li>
                                    <li>
                                        To learn  assembly simulated environment MARS
                                    </li>
                                </ul>
                            </p>
                        </div>

        const personalWebDes = <div>
                                <h4>Description</h4>
                                <p>
                                    This project is my personal responsive website build mainly by React and Bootstrap.
                                    It is what you see right now.
                                </p>
                                <h4>Objective</h4>
                                <p>
                                    <ul>
                                        <li>
                                            To help people get familiar with myself
                                        </li>
                                        <li>
                                            It collects my projects that I think is worth sharing 
                                        </li>
                                    </ul>
                                </p>
                            </div>
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
                                    header='EmpowerUAfrica Website'
                                    techStack='React Nodejs Expressjs MySQL Neo4j'
                                    sourceCodeURL='https://github.com/UTSCCSCC01/project-uoft-kings'
                                    webURL=''
                                    description={EmpowerUAfricaDes}
                        />
                        <ProjectCard imgURL={zoomer} 
                                    header='Zoomer'
                                    techStack='PostgreSQL MongoDB Neo4j Java-HttpServer'
                                    sourceCodeURL='https://github.com/Jiayu-Lu/Jiayu-Lu.github.io/tree/master/src/pages/githubSearch'
                                    webURL=''
                                    description={zoomerDes}
                        />
                        <ProjectCard imgURL={neo4j} 
                                    header='neo4j Java-HttpServer'
                                    techStack='Neo4j Java-HttpServer'
                                    sourceCodeURL='https://github.com/Jiayu-Lu/neo4jJavaServer'
                                    webURL=''
                                    description={neo4jJavaServerDes}
                        />
                        <ProjectCard imgURL={postgresql} 
                                    header='PostgreSQL JDBC Backend'
                                    techStack='PostgreSQL JDBC'
                                    sourceCodeURL='https://github.com/Jiayu-Lu/postgreSQL_JDBC'
                                    webURL=''
                                    description={postgresqlJavaServerDes}
                        />
                        <ProjectCard imgURL={personalWeb} 
                                    header='My Personal Website'
                                    techStack='React Bootstrap'
                                    sourceCodeURL='https://github.com/Jiayu-Lu/Jiayu-Lu.github.io'
                                    webURL='#'
                                    description={personalWebDes}
                        />
                        <ProjectCard imgURL={toDoList} 
                                    header='To Do List'
                                    techStack='React'
                                    sourceCodeURL='https://github.com/Jiayu-Lu/Jiayu-Lu.github.io/tree/master/src/pages/toDoList'
                                    webURL='/#/toDoList'
                                    description={toDoListDes}
                        />
                        <ProjectCard imgURL={githubSearch} 
                                    header='Github User Search Engine'
                                    techStack='React Axios'
                                    sourceCodeURL='https://github.com/Jiayu-Lu/Jiayu-Lu.github.io/tree/master/src/pages/githubSearch'
                                    webURL='/#/githubSearch'
                                    description={githubSearchDes}
                        />
                        <ProjectCard imgURL={doodleJump} 
                                    header='Doodle Jump Game'
                                    techStack='Assembly Language'
                                    sourceCodeURL='https://github.com/Jiayu-Lu/doodleJumpGame'
                                    webURL=''
                                    description={doodleJumpDes}
                        />
                    </Tab>
                    <Tab eventKey="Software Development" title="Software Development" className="project_type_context">
                        <ProjectCard imgURL={EmpowerUAfrica} 
                                    header='EmpowerUAfrica Website'
                                    techStack='React Nodejs Expressjs MySQL Neo4j'
                                    sourceCodeURL='https://github.com/UTSCCSCC01/project-uoft-kings'
                                    webURL=''
                                    description={EmpowerUAfricaDes}
                        />
                        <ProjectCard imgURL={zoomer} 
                                    header='Zoomer'
                                    techStack='PostgreSQL MongoDB Neo4j Java-HttpServer'
                                    sourceCodeURL='https://github.com/Jiayu-Lu/Jiayu-Lu.github.io/tree/master/src/pages/githubSearch'
                                    webURL=''
                                    description={zoomerDes}
                        />
                        <ProjectCard imgURL={personalWeb} 
                                    header='My Personal Website'
                                    techStack='React Bootstrap'
                                    sourceCodeURL='https://github.com/Jiayu-Lu/Jiayu-Lu.github.io'
                                    webURL='#'
                                    description={personalWebDes}
                        />
                        <ProjectCard imgURL={neo4j} 
                                    header='neo4j Java-HttpServer'
                                    techStack='Neo4j Java-HttpServer'
                                    sourceCodeURL='https://github.com/Jiayu-Lu/neo4jJavaServer'
                                    webURL=''
                                    description={neo4jJavaServerDes}
                        />
                        <ProjectCard imgURL={postgresql} 
                                    header='PostgreSQL JDBC Backend'
                                    techStack='PostgreSQL JDBC'
                                    sourceCodeURL='https://github.com/Jiayu-Lu/postgreSQL_JDBC'
                                    webURL=''
                                    description={postgresqlJavaServerDes}
                        />
                    </Tab>
                    <Tab eventKey="Personal project" title="Personal project" className="project_type_context">
                        <ProjectCard imgURL={toDoList} 
                                    header='To Do List'
                                    techStack='React'
                                    sourceCodeURL='https://github.com/Jiayu-Lu/Jiayu-Lu.github.io/tree/master/src/pages/toDoList'
                                    webURL='/#/toDoList'
                                    description={toDoListDes}
                        />
                        <ProjectCard imgURL={githubSearch} 
                                    header='Github User Search Engine'
                                    techStack='React Axios'
                                    sourceCodeURL='https://github.com/Jiayu-Lu/Jiayu-Lu.github.io/tree/master/src/pages/githubSearch'
                                    webURL='/#/githubSearch'
                                    description={githubSearchDes}
                        />
                        <ProjectCard imgURL={doodleJump} 
                                    header='Doodle Jump Game'
                                    techStack='Assembly Language'
                                    sourceCodeURL='https://github.com/Jiayu-Lu/doodleJumpGame'
                                    webURL=''
                                    description={doodleJumpDes}
                        />
                    </Tab>
                    </Tabs>
                </div>
                <Footer/>
            </div>
        )
    }
}
