import React, { Component } from 'react'
import './techStack.css'

import react from '../../images/imgs/react.jpg'
import html from '../../images/imgs/html.png'
import css from '../../images/imgs/css.png'
import js from '../../images/imgs/js.png'
import bootstrap from '../../images/imgs/bootstrap.png'
import antd from '../../images/imgs/antd.png'
import nodejs from '../../images/imgs/nodejs.png'
import jdbc from '../../images/imgs/jdbc.png'
import mysql from '../../images/imgs/mysql.png'
import postgresql from '../../images/imgs/postgresql.png'
import mongodb from '../../images/imgs/mongodb.png'
import neo4j from '../../images/imgs/neo4j.png'

export default class techStack extends Component {
    render() {
        return (
            <div className='tech_stack'>
                <div className='tech_stack_header'>
                    My Technology Stack
                </div>
                <div className='tech_stack_content'>
                    <div>
                        <p className='tech_stack_content_context'>Frontend</p>
                        <div>
                            <img id='tech_react' src={react}/>
                            <img id='tech_html' src={html}/>
                            <img id='tech_css' src={css}/>
                            <img id='tech_js' src={js}/>
                        </div>
                        <div>
                            <img id='tech_js' src={bootstrap}/>
                            <img id='tech_antd' src={antd}/>
                        </div>

                        <p className='tech_stack_content_context'>Backend</p>
                        <div>
                            <img id='tech_nodejs' src={nodejs}/>
                            <img id='tech_jdbc' src={jdbc}/>
                        </div>

                        <p className='tech_stack_content_context'>Database</p>
                        <div>
                            <img id='tech_mysql' src={mysql}/>
                            <img id='tech_postgresql' src={postgresql}/>
                            <img id='tech_mongodb' src={mongodb}/>
                            <img id='tech_neo4j' src={neo4j}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
