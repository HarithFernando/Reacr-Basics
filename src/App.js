import React , {Component} from 'react';
import './App.css';
import ToDo from './components/ToDo';
//import Hello from './components/FunctionComponent';

class App extends Component  {
  state = {
    todos : [
        {
            id :1,
            title : 'wake up',
            completed : true 
        },
        {
            id :2,
            title : 'wash',
            completed : false 
        },
        {
            id :3,
            title : 'sleep',
            completed : false 
        },
        {
          id :4,
          title : 'drink',
          completed : false 
      }
    ]
}

markComplete=(id) => {
  this.setState({todos : this.state.todos.map(todo =>{

    if(todo.id === id){
    todo.completed = !todo.completed
  }
  return todo;
})});
}

render(){
  return (
    <div>
   <ToDo todos={this.state.todos} markComplete={this.markComplete} />
    </div>
  ); 
}
 
}


export default App;
