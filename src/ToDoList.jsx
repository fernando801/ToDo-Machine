import React from "react"

const ToDoList = (props) => {
  return(
    <ul>
      {props.children}
    </ul>
  )
}

export default ToDoList