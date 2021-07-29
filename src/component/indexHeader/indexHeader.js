import React, { Component } from 'react'
import './indexHeader.css'

export default class indexHeader extends Component {
    render() {
        return (
            <div className='index_header'>
                
                <div className='index_header_content'>
                    
                    <div className='index_header_content_header'>
                        About me
                    </div>
                    <hr/>
                    <div className='index_header_content_context'>
                        I am a third year student in University of Toronto<br />
                        Specialist in Computer Science Software Engineering
                    </div>

                </div>
            </div>
        )
    }
}
