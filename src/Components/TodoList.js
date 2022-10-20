import React from 'react'

const TodoList = ({todos}) => {
    return (
        <div >
            {todos.map((todo) => <h1>{todo.text}</h1> )}
        </div>
    )
}

export default TodoList
