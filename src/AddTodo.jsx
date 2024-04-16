import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './addtodo.css'
const AddTodo = ({add}) => {
  const [todo, setTodo] = useState (
    {
      id : uuidv4(),
      title : '',
      desc : ''
    }
  );
  const {title, desc} = todo;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    add(todo);
    setTodo({
      id : uuidv4(),
      title : '',
      desc : ''
    });
  }
  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => {
      return {...oldTodo, [name]: e.target.value}
  });
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-field'>
        <label>
          Title : 
        </label>
        <input type = 'text' id = 'title' name = 'title' value = {title} onChange={handleChange} />
      </div>
      <div className='form-field'>
        <label>
          Description : 
        </label>
        <textarea type = 'text' id = 'desc' name = 'desc' value = {desc} onChange={handleChange} />
      </div>
      <button type = 'submit'>
        Add
      </button>
    </form>
  )
}

export default AddTodo
