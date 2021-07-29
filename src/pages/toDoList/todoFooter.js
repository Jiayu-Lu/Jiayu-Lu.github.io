import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';
import './toDoList.css'

export default class todoFooter extends Component {

    handleCheckAll = event => {
        this.props.checkAllTodo(event.target.checked)
    }

    handleClearAllDone = () => {
        this.props.handleClearAllDone()
    }

    render() {

        const {todos} = this.props
        const doneCount = todos.reduce((pre, todo)=>{return pre + (todo.done ? 1 : 0)}, 0)
        const total = todos.length
        const progress = total == 0 ? 0 : Math.round(doneCount/total * 100)

        return (
            <div className='todo_footer'>
                <div className='todo_footer_wapper'>
                    <label>
                        <input type='checkbox' onChange={this.handleCheckAll} checked={total == doneCount && total != 0 ? true : false}/>
                        <span>Check all as done</span>
                    </label>
                        <span>Finished: {doneCount}/Total: {total}</span>
                    <button onClick={this.handleClearAllDone} className='btn btn-danger'>
                        Delete All finished Task
                    </button>
                </div>
                <ProgressBar animated now={progress} label={`${progress}%`}/>
            </div>
        )
    }
}
