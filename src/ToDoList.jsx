import React from "react"

const ToDoList = (props) => {
  return(
    <ul className='flex flex-col gap-4'>
      {props.children}
    </ul>
  )
}

export default ToDoList