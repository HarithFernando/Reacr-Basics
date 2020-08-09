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
                textDecoration: this.props.todo.completed? 'line-through' : 'none'
            }
        }

        // markComplete=(e) => {
        //     console.log(this.props)
        // }


        render(){
            const { id , title} = this.props.todo
            

            return(
            <div /*style={{ backgroundColor: '#f24f5432'}}*/ style={this.getStyle()} >
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this , id)} />
                {'  '}
                {title}
                </p>
            </div>
            );
            }
    }

    //PropTypes
    TodoItem.propTypes ={
        todo: PropTypes.object.isRequired
    }

    export default TodoItem;