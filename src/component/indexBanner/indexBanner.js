import React, { Component } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
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
                    <a id='index_banner_facebook' href='https://www.facebook.com/jiayu.lu.946'>
                        <img src={facebook} style={{width: '1.5rem'}}/>
                    </a>
                    <OverlayTrigger
                        overlay={
                            <Tooltip>
                                Liturtle#1950
                            </Tooltip>
                        }
                        >
                        <img src={github} style={{width: '1.5rem'}}/>
                    </OverlayTrigger>
                    <a id='index_banner_linkedin' href='https://www.linkedin.com/in/josiahlu'>
                        <img src={linkedin} style={{width: '1.5rem'}}/>
                    </a>
                </div>

            </div>
        )
    }
}
