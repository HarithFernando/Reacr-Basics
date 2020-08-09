    import React , {Component} from 'react';
    import PropTypes from 'prop-types';


    class TodoItem extends Component{
        getStyle =() =>{
            // if(this.props.x.completed){
            //     return{
            //     textDecoration:'line-through'
            //     }
            // }else{
            //     return{
            //     textDecoration:'none'
            //     }
            // }

            return{
                backgroundColor:'#ff0454',
                padding:'20px',
                borderBottom:'1px #ccc dotted',
                textDecoration: this.props.x.completed? 'line-through' : 'none'
            }
        }

        render(){
            

            return(
            <div /*style={{ backgroundColor: '#f24f5432'}}*/ style={this.getStyle()} >
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