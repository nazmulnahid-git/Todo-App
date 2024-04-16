import React from 'react'
import './todo.css'
const Todo = ({id, title, desc, remove}) => {
  console.log(id);
  const handleClick = () => {
    console.log(id);
    remove(id);
  }
  return (
    <article className='todo'>
      <div>
        <h3>
          {title}
        </h3>
        <p>
          {desc}
        </p>
      </div>
      <div>
        <button className='btn' onClick = {handleClick}>
          <i className='fa fa fa-trash fa-2x'> </i>
        </button>
      </div>
    </article>
  )
}

export default Todo
