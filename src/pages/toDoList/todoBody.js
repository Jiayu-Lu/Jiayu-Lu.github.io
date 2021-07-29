import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ToDoListItem from './todoListItem';
import './toDoList.css'

export default class todoBody extends Component {

    static propTypes = {
        switchDone: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired
    }

    render() {

        const {todos, switchDone, deleteTodo} = this.props
        let todoBody = todos.map(todo => <ToDoListItem key={todo.id} {...todo} switchDone={switchDone} deleteTodo={deleteTodo}/>)

        return (
            <div>
                {todoBody}
            </div>
        )
    }
}
