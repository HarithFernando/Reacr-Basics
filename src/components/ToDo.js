import React, { Component } from 'react';
import TodoItem from './TodoItems';

class ToDo extends Component {
    render() {
        return (
        this.props.todos.map((x)=>
        <TodoItem/>
        )
        );}
}

export default ToDo;