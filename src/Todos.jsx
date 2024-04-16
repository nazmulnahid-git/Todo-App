import React from 'react'
import Todo from './Todo'
import './todos.css'
const Todos = ({ todos, remove}) => {
  return (
    <section className='todos'>
      {
        todos.map((todo, ind) => (
          <Todo key={ind} id = {todo.id} title={todo.title} desc={todo.desc} remove = {remove} />
        ))
      }
    </section>
  )
}

export default Todos
