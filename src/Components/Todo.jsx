import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const Todo = ({todos}) => {
  return (
    <div>
        {todos.map((text)=> <TodoList text={text} /> )}
        <AddTodo/>

    </div>
  )
}

export default Todo