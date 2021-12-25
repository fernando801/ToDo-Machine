import React from 'react'

const ToDoCounter = (props) => {
  return <h1 className='text-center text-lg'>You have completed {props.toDosCompleted} of {props.toDosCount} TODOs</h1>
}

export default ToDoCounter