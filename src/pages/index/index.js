import React, { Component } from 'react'
import {ProgressBar} from 'react-bootstrap'
import './index.css'

import Navbar from '../../component/navbar/navbar'
import IndexBanner from '../../component/indexBanner/indexBanner'
import IndexHeader from '../../component/indexHeader/indexHeader'
import TechStack from '../../component/techStack/techStack'

export default class index extends Component {
    render() {
        return (
            <div className='index_page'>
                <Navbar/>
                <IndexBanner/>
                <div className='index_body'>
                    <IndexHeader/>
                    <div className='index_program_language_section'>
                        <div className='index_program_language_section_header'>
                            Understanding of Programming Languages
                        </div>

                        <div className='index_program_language_section_context'>
                            <div className='index_program_language_progess'>
                                <p>Java</p>
                                <div><ProgressBar animated now={80}/></div>
                            </div>
                            <div className='index_program_language_progess'>
                                <p>Javascript</p>
                                <div><ProgressBar animated now={60}/></div>
                            </div>
                            <div className='index_program_language_progess'>
                                <p>C</p>
                                <div><ProgressBar animated now={55}/></div>
                            </div>
                            <div className='index_program_language_progess'>
                                <p>Python</p>
                                <div><ProgressBar animated now={40}/></div>
                            </div>
                            <div className='index_program_language_progess'>
                                <p>SQL</p>
                                <div><ProgressBar animated now={80}/></div>
                            </div>
                        </div>
                    </div>
                    <TechStack/>
                </div>
            </div>
        )
    }
}
