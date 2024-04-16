import React, { useState } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'
import './home.css'

const Home = () => {
  const [todos, setTodo] = useState([
    {
      id : 1,
      title : 'Sleep',
      desc : 'Taratari ghumaite hobe..!!'
    },
    {
      id : 2,
      title : 'Awake',
      desc : 'Sokale joldi joldi ut te hobe..!!'
    },
    {
      id : 3,
      title : 'Streak',
      desc : 'Cf a problem solve kore streak bachate hobe..!!'
    }
  ]);
  const add = (newTodo) => {
    setTodo((prevTodos) => [...prevTodos, newTodo]);
  }
  const remove = (del_id) => {
    const updatedTodos = todos.filter(todo => todo.id != del_id);
    console.log(updatedTodos)
    setTodo(updatedTodos);
  };
  return (
    <div className='container'>
      <h1 style = {{color : ' white'}}> Todo App </h1>
      <AddTodo add = {add}/>
      <Todos todos = {todos} remove = {remove}/>
    </div>
  )
}

export default Home
