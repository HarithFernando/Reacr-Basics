import React , {Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component{
    render(){
        return(
        <div>
            <h1>{this.props.x.title}</h1>
        </div>
        );
        }
}

//PropTypes
TodoItem.propTypes ={
    x: PropTypes.object.isRequired
}

export default TodoItem;