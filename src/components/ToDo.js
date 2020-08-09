import React, { Component } from 'react';
import TodoItem from './TodoItems';
import PropTypes from 'prop-types';

class ToDo extends Component {
    render() {
        return (
        this.props.todos.map((x)=>
        <TodoItem key={x.di} x={x}/>
        )
        );}
}


//PropTypes
TodoItem.PropTypes = {
    todos: PropTypes.array.isRequired
}

export default ToDo;