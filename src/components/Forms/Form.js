import React, { Component } from 'react'
import './Form.css'

class Form extends Component{
    state = {
        todoInput: ''
    };
    handleInput = (e) => {
        this.setState({
            todoInput: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todoInput)
        
        this.setState({
            todoInput: ""
        })

    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                          className='todo__input'  
                          type='text'
                          name='text'  
                          placeholder='Insert your task here...'
                          value={this.state.todoInput}        
                          onChange={this.handleInput}
                    />

                </form>
             </div>
        );
    }

}


export default  Form;
