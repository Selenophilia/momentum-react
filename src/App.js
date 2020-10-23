import React, { Component } from 'react';
import './App.css';
import Forms from  './components/Forms/Form'
import Todo from './components/Todos/Todos'

class App extends Component {
  state = {
      todos:  [
          { id: 0, name: 'eat'},
          { id: 1, name: 'sleep'},
          { id: 2, name: 'repeat'}    
      ]
    }
    addTodo = (name) => {
     let newTodos = this.state.todos;
     let id = this.state.todos.length + 1;
     newTodos.push({id, name})
      this.setState({
              todos:newTodos
      })
    } 

    deleteTodo = (id) => {
      let todosArr = this.state.todos;
      let getId = this.state.todos.findIndex( t  =>  t.id === id)
      todosArr.splice(getId, 1)
      this.setState({
        todos:todosArr
      })
    }
    editTodo = (id, newName) => {
      const newTodo = this.state.todos.map(todo => {
        if(todo.id === id){
          return{...todo, name: newName}
        }
        return{...todo}
       })
       console.log(newTodo)
    this.setState({
      todos:newTodo
    })
    }

 render(){
  const getTodo = this.state.todos.map(( todo, idx ) => (
                            <Todo key={todo.id}
                                  name={todo.name}
                                  id={todo.id}
                                  deleteTodo={this.deleteTodo}
                                  editTodo={this.editTodo}  
                                  />
                      )); 
  const displayText = (
     <h1 className='display-text'>Nothing To Do here!!</h1>
  );                     
  return (
        <div className="header">
            <h1>Todo<span>List</span></h1>
            <h2>waddup this is a simple todoList </h2>
              <Forms 
                  addTodo={this.addTodo}
                  />
            { getTodo.length === 0 ? displayText : getTodo}
        </div>
      );
  } 
}

export default App;
