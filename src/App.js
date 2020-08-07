import React from 'react';
import './App.css';
import ToDo from './components/ToDo';
import Hello from './components/FunctionComponent';

function App() {
//   state = {
//     todos : [
//         {
//             di :1,
//             title : 'wake up',
//             completed : false 
//         },
//         {
//             di :2,
//             title : 'wash',
//             completed : false 
//         },
//         {
//             di :3,
//             title : 'sleep',
//             completed : false 
//         }
//     ]
// }
  return (
    <div>
    <Hello name="harith"/>
    <ToDo/>
    </div>
  );
}

export default App;
