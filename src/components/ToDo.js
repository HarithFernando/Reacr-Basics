import React, { Component } from 'react';
import TodoItem from './TodoItems';
import PropTypes from 'prop-types';

class ToDo extends Component {

    render() {
        return (
        this.props.todos.map((todo)=> (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
        )
        )
        );
    }
}


//PropTypes
TodoItem.PropTypes = {
    todo: PropTypes.array.isRequired
}

// const ItemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default ToDo;