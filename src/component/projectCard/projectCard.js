import React, { Component } from 'react'
import './projectCard.css'

export default class projectCard extends Component {

    render() {

        const {imgURL, header, techStack, sourceCodeURL, webURL, description} = this.props
        console.log(sourceCodeURL)
        return (
            <div className='project_card'>
                <div>
                    {
                        imgURL? <img src={imgURL}></img> : null
                    }
                </div>

                <div>
                    {
                        header? <h4>{header}</h4> : null
                    }
                    {
                        techStack? <p>{techStack}</p>: null
                    }
                    {
                        sourceCodeURL?<a href={sourceCodeURL}>view source code</a> : null
                    }
                    {
                        webURL?<a href={webURL}>view web page</a> : null
                    }
                    {
                        description?<p>{description}</p> : null
                    }
                </div>
            </div>
        )
    }
}
