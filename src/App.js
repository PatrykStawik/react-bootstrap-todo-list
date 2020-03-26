import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


class App extends Component {
  state = { 
    items: [{id: 1, title: 'wake up'},{id: 2, title: 'eat breakfast'}],
    id: uuidv4(),
    item: '',
    editItem: false,
   }

   handleChange=(e)=>{

   }
   handleSubmit=(e)=>{
    
  }
  clearList=()=>{
    
  }
  handleDelete=(id)=>{
    
  }
  handleEdit=(id)=>{
    
  }

  render() { 
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">
            
              <TodoList item={this.state.item} 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit} 
              editItem={this.state.editItem}/>
              <TodoInput items={this.state.items} 
              clearList={this.clearList} 
              handleDelete={this.handleDelete} 
              handleEdit={this.handleEdit}/>
      
            </h3>
          </div>
        </div>
      </div>
      
     );
  }
}
 
export default App;
