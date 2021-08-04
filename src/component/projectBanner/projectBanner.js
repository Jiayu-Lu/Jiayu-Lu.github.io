import React, { Component } from 'react'
import { Wave } from 'react-animated-text';
import './projectBanner.css'

export default class projectBanner extends Component {
    render() {
        return (
            <div className='project_banner'>
                
                <div className='project_banner_name'>
                    <Wave iterations={1} effect="verticalFadeIn" text="Project"/>
                </div>

            </div>
        )
    }
}
