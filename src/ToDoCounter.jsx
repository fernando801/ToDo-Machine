import React, {useContext} from 'react'
import { ToDoContext } from './ToDoContext'

const ToDoCounter = (props) => {
  const {todos} = useContext(ToDoContext) 
  return <h1 className='text-center text-lg'>You have completed {todos.filter(todo => (todo.completed)).length} of {todos.length} TODOs</h1>
}

export default ToDoCounter