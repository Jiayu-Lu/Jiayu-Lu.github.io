import React, { Component } from 'react'
import { Wave } from 'react-animated-text';
import './indexBanner.css'

import facebook from '../../images/icons/facebook.svg'
import github from '../../images/icons/github.svg'
import linkedin from '../../images/icons/linkedin.svg'

export default class indexBanner extends Component {
    render() {
        return (
            <div className='index_banner'>
                
                <div className='index_banner_name'>
                    <Wave iterations={1} effect="verticalFadeIn" text="Jiayu(Josiah) Lu"/>
                </div>

                <div className='index_banner_career'>
                    <Wave iterations={1} effect="verticalFadeIn" effectDirection="down" text="-Software Developer-"/>
                </div>

                <div className='index_banner_icons'>
                    <a id='index_banner_facebook'>
                        <img src={facebook} style={{width: '1.5rem'}}/>
                    </a>
                    <a id='index_banner_github'>
                        <img src={github} style={{width: '1.5rem'}}/>
                    </a>
                    <a id='index_banner_linkedin'>
                        <img src={linkedin} style={{width: '1.5rem'}}/>
                    </a>
                </div>

            </div>
        )
    }
}
