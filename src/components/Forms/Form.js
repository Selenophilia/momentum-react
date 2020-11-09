import React, {  useState } from 'react'
import './Form.css'

function Form(props){
    
    const [todoInput, setTodoInput] = useState('')
    const handleInput = (e) => {
       setTodoInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(todoInput)
        setTodoInput("")
    }

        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                          className='todo__input'  
                          type='text'
                          name='text'  
                          placeholder='Insert your task here...'
                          value={todoInput}        
                          onChange={handleInput}
                    />

                </form>
             </div>
        );
}


export default  Form;
