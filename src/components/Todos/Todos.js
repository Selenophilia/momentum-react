import React, { Component } from 'react'
import './Todos.css'
class Todo extends Component{
    state = {
        active: false,
        isEditing: false,
        name: this.props.name
    }

    toggleEditing = () => {
        const editingState = this.state.isEditing
        this.setState({ isEditing: !editingState})
    }

    toggleActive = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editTodo(this.props.id, this.state.name)
        this.setState({ isEditing: false, active: false})
        
    }

     handleInput = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    render(){
        const editTemplate = (
         <form onSubmit={this.handleSubmit}>
             <input 
                type='text'
                name='text'  
                value={this.state.name}        
                onChange={this.handleInput}
                />
            <div className='btn__group'>
                <button type='submit'
                        className='btn todo__save'
                        onClick={() => this.props.editTodo(this.props.id)}> save </button>
                <button type='submit'
                        className="btn todo__cancel"
                        onClick={()=>  this.setState({ isEditing: false, active: false})}
                        > cancel </button>
             </div>
         </form>
          
        );
        const viewTemplate = (
            <li className={this.state.active ? 'done' : null}
                        onClick={() => this.toggleActive()}>
                        {this.state.name} 
                        <span className='todo__delete'
                            onClick={() => this.props.deleteTodo(this.props.id)}> X</span>  
                        <span  className='todo__edit'
                            onClick={() => this.toggleEditing()}> edit</span></li> 
        );
     
        return(
            <div className='todos'>
                  <ul className='todo__list'>
                        {this.state.isEditing ? editTemplate : viewTemplate}
                  </ul>      
            </div>
        );
    }
}

export default Todo
