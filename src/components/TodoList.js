import React, { Component } from 'react';
import TodoItem from './TodoItem';


class TodoList extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div>todo list</div>
            <TodoItem/>
            </>
         );
    }
}
 
export default TodoList;