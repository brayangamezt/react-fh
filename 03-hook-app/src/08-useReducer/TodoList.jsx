import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, onDeleteTodo, onToggleTodo}) => {
  return (
    <>
      <ul className='list-group'>
        {
            todos.map( (task, index)=>{
                return(
                    <TodoItem key={index} 
                              description={task.description} 
                              idTodo={task.id} 
                              done={task.done} 
                              onDeleteTodo={onDeleteTodo} 
                              onToggleTodo={onToggleTodo}
                    />
                )
            } )
        }
      </ul>
    </>
  )
}
