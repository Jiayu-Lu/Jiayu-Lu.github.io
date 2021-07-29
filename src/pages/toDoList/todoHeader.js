import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './toDoList.css'

export default class todoHeader extends Component {

    static propTypes = {
        appendTodo: PropTypes.func.isRequired
    }

    handleEnter = event => {
        const {keyCode, target} = event
        if (keyCode != 13) return
        if (target.value.trim() === '') {
            alert('please enter a non-empty string')
            return
        }
        const data = {id: nanoid(), description: target.value, done: false}
        this.props.appendTodo(data)
        target.value = ''
    }

    handleEnterBtn = () => {
        if (this.input.value.trim() === '') {
            alert('please enter a non-empty string')
            return
        }
        const data = {id: nanoid(), description: this.input.value, done: false}
        this.props.appendTodo(data)
        this.input.value = ''
    }

    render() {
        return (
            <div className='todo_header'>
                <div className="input-group mb-3">
                    <input ref={e => this.input = e} onKeyUp={this.handleEnter} type="text" className="form-control" placeholder="Please enter your task"/>
                    <div class="input-group-append">
                        <button onClick={this.handleEnterBtn} className="btn btn-primary" type="submit">Enter</button>  
                    </div>
                </div>
            </div>
        )
    }
}
