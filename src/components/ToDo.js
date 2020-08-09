import React, { Component } from 'react';
import TodoItem from './TodoItems';
import PropTypes from 'prop-types';

class ToDo extends Component {
    render() {
        return (
        this.props.todos.map((x)=>
        <div /*style={ItemStyle}*/>
        <TodoItem key={x.di} x={x}/>
        </div>
        )
        );}
}


//PropTypes
TodoItem.PropTypes = {
    todos: PropTypes.array.isRequired
}

const ItemStyle = {
    backgroundColor: '#f4f4f4'
}

export default ToDo;