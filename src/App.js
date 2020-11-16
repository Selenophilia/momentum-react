import React, { Component, useState } from 'react';
import './App.css';
import Forms from  './components/Forms/Form'
import Todo from './components/Todos/Todos'

function App() {
  const [todos, setTodos] = useState([
                            { id: 0, name: 'eat'},
                            { id: 1, name: 'sleep'},
                            { id: 2, name: 'repeat'}    
                          ])

    const addTodo = (name) => {
     let newTodos = [...todos];
     let id = todos.length + 1 - 1;
     newTodos.push({id, name})
      setTodos(newTodos)
    } 

   const deleteTodo = (id) => {
      let todosArr = [...todos];
      let getId = todos.findIndex( t  =>  t.id === id)
      
      todosArr.splice(getId, 1)
      setTodos(todosArr)
    }
   const editTodo = (id, newName) => {
      const newTodo = todos.map(todo => {
        if(todo.id === id){
          return{...todo, name: newName}
        }
        return{...todo}
       })
      setTodos({  todos:newTodo })
    }

  const getTodo = todos.map(( todo ) => 
                            <Todo key={todo.id}
                                  name={todo.name}
                                  id={todo.id}
                                  deleteTodo={deleteTodo}
                                  editTodo={editTodo}  
                                  />
                      ); 
               
  const displayText = (
     <h1 className='display-text'>Nothing To Do here!!</h1>
  );  
  

  return (
    <div>
       <div className="header">
            <h1>Todo<span>List</span></h1>
            <h2>waddup this is a simple todoList </h2>
        
        </div>
        <div className='sample'>
        <Forms 
                  addTodo={addTodo}
                  />
        { getTodo }
        </div>
    </div>
      );

}

export default App;
