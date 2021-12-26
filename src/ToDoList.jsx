import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = (props) => {

  return(
    <div className='w-full max-w-[24rem] flex flex-col items-center gap-4'>
      {props.todos.length > 0
      ?props.todos.map(todo => (<ToDoItem key={todo.id} {...todo} switcher={props.switcher} deleteToDo={props.deleteToDo}/>))
      :<p className='max-w-[24rem] w-full min-h-[6rem] p-6 flex justify-center items-center text-gray-600 '>No TODOs found</p>}
    </div>
  )
}

export default ToDoList