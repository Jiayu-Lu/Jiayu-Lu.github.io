import React, { Component } from 'react'
import { Wave } from 'react-animated-text';
import './contactBanner.css'

export default class contactBanner extends Component {
    render() {
        return (
            <div className='contact_banner'>
                
                <div className='contact_banner_name'>
                    <Wave iterations={1} effect="verticalFadeIn" text="Contact"/>
                </div>

            </div>
        )
    }
}
