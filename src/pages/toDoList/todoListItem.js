import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './toDoList.css'

export default class todoListItem extends Component {

    static propTypes = {
        switchDone: PropTypes.func.isRequired
    }

    state = {
        mouse: false
    }

    handleMouse = flag => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    handleCheck = (id) => {
        return event => {
            this.props.switchDone(id, event.target.checked)
        }
    }

    handleDelete = (id) => {
        return () => {
            if (window.confirm('Are you sure to delete this task?')) {
                this.props.deleteTodo(id)
            }
        }
    }

    render() {

        const {mouse} = this.state
        const {id, description, done} = this.props

        return (
            <div 
                onMouseLeave={this.handleMouse(false)} 
                onMouseEnter={this.handleMouse(true)}
                className='todo_list_item'
            >
                <label>
                    <input 
                        type='checkbox'
                        onChange={this.handleCheck(id)}
                        checked={done}
                        id='todo_list_item_checkbox'
                    />
                    <div className='list_item_dep'>{description}</div>
                </label>

                <button
                    onClick={this.handleDelete(id)}
                    className='btn btn-danger todo_list_item_button'
                    style={{display:mouse?'block':'none'}}
                >
                    Delete
                </button>  
            </div>
        )
    }
}
