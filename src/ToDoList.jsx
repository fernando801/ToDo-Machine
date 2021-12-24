import React from "react"

const ToDoList = (props) => {
  return(
    <ul className='w-full max-w-[24rem] flex flex-col items-center gap-4'>
      {props.children}
    </ul>
  )
}

export default ToDoList