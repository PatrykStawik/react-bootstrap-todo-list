import React, {Component} from 'react';
import uuid from 'uuid';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <TodoList/>
        <TodoInput/>
      </div>
     );
  }
}
 
export default App;
