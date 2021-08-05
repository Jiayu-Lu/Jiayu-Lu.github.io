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
                        <p>
                            Hello! My name is Jiayu Lu, and people call me Josiah mostly. I am a third year student in University of Toronto
                            Specialist in Computer Science Software Engineering. I have a special passion about technology in my young age.
                            I am a bilingual speaker who is fluent in both Mandarin and English.
                        </p>
                        <p>
                            I have developed many group projects and also personal projects, most of them are build by React and Nodejs.
                            If you want to take a look at them, just click the navbar tab to navigate to project page.
                        </p>
                        <p>
                            I am currently enhancing my understanding to data structure and algorithm, Leetcode is my favorite website to
                            practice my coding skills. If you are interested at me, contact me via any media platforms that is listed in the contact page.
                        </p>
                        
                    </div>

                </div>
            </div>
        )
    }
}
