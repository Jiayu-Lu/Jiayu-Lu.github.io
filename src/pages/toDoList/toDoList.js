import React, { Component } from 'react'
import ToDoHeader from './todoHeader';
import ToDoBody from './todoBody';
import TodoFooter from './todoFooter';

export default class toDoList extends Component {

    state = {
        todos:[
        ]
    }

    appendTodo = (data) => {
        const {todos} = this.state
        const newTodos = [data, ...todos]
        this.setState({
            todos: newTodos
        })
    }

    switchDone = (id, done) => {
        const {todos} = this.state
        const newTodos = todos.map( todo => {
            if (todo.id === id) return {...todo, done: done}
            else return todo
        })
        this.setState({
            todos: newTodos
        })
    }

    deleteTodo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter(todo => {
            return todo.id != id
        })
        this.setState({
            todos: newTodos
        })
    }

    checkAllTodo = (done) => {
        const {todos} = this.state
        const newTodos = todos.map( todo => {
            return {...todo, done: done}
        })
        this.setState({
            todos: newTodos
        })
    }

    handleClearAllDone = () => {
        const {todos} = this.state
        const newTodos = todos.filter(todo => {
            return !todo.done
        })
        this.setState({
            todos: newTodos
        })
    }

    render() {

        const {todos} = this.state

        return (
            <div className="container todo">

               <div class="row">
                    <div class="col-sm"></div>
                    <div class="col-sm-6">
                        <ToDoHeader appendTodo={this.appendTodo}/>
                    </div>
                    <div class="col-sm"></div>
                </div>

                <div class="row">
                    <div class="col-sm"></div>
                    <div class="col-sm-6">
                        <ToDoBody todos={todos} switchDone={this.switchDone} deleteTodo={this.deleteTodo}/>
                    </div>
                    <div class="col-sm"></div>
                </div>

                <div class="row">
                    <div class="col-sm"></div>
                    <div class="col-sm-6">
                        <TodoFooter todos={todos} checkAllTodo={this.checkAllTodo} handleClearAllDone={this.handleClearAllDone}/>
                    </div>
                    <div class="col-sm"></div>
                </div>

            </div>
        )
    }
}
