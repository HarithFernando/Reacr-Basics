import React , {Component} from 'react';
import './App.css';
import ToDo from './components/ToDo';
import Hello from './components/FunctionComponent';

class App extends Component  {
  state = {
    todos : [
        {
            di :1,
            title : 'wake up',
            completed : true 
        },
        {
            di :2,
            title : 'wash',
            completed : false 
        },
        {
            di :3,
            title : 'sleep',
            completed : false 
        }
    ]
}
render(){
  return (
    <div>
   <ToDo todos={this.state.todos}/>
    </div>
  ); 
}
 
}


export default App;
