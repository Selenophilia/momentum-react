import React, { useState } from 'react'
import './Todos.css'
function Todo(props){ 
 
    const [active, setActive] = useState(false)
    const [editing, setEditing] = useState(false)
    const [name, setName] = useState(props.name)

    const toggleEditing = () => {
        const isEditing = editing
        setEditing(!isEditing)
    }

    const toggleActive = () => {
        const activeState = active
        setActive( !activeState );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.editTodo(props.id, name)
        setEditing(false)
        
    }

     const handleInput = (e) => {
        setName( e.target.value )
    }
        const editTemplate = (
         <form onSubmit={handleSubmit}>
             <input 
                className='todo__edit-input'
                type='text'
                name='text'  
                value={name}        
                onChange={handleInput}
                />
            <div className='btn__group'>
                <button type='submit'
                        className='btn todo__save'
                        onClick={() => props.editTodo(props.id), toggleActive}> save </button>
                <button type='submit'
                        className="btn todo__cancel"
                        onClick={()=>  toggleEditing, 
                                      toggleActive}
                        > cancel </button>
             </div>
         </form>
          
        );
        const viewTemplate = (
            <li className={active ? 'done' : null}
                        onClick={() => toggleActive()}>
                        {name} 
                        <span className='todo__delete'
                            onClick={() => props.deleteTodo(props.id)}> X</span>  
                        <span  className='todo__edit'
                            onClick={() => toggleEditing()}> edit</span></li> 
        );
     
        return(
            <div className='todos'>
                  <ul className='todo__list'>
                        {editing ? editTemplate : viewTemplate}
                  </ul>      
            </div>
        );
}

export default Todo
