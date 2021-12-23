import React, { useState } from 'react'
import ToDoCounter from './ToDoCounter'
import ToDoSearch from './ToDoSearch'
import ToDoList from './ToDoList'
import ToDoItem from './ToDoItem'
import CreateToDoButton from './CreateToDoButton'

const todos = [
  { id:'1', text:'Super Max', completed:false},
  { id:'2', text:'Hamilton', completed:false},
  { id:'3', text:'Bottas', completed:false}
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {todos.map(todo => (<ToDoItem key={todo.id} text={todo.text}/>))}       
      </ToDoList>
      <CreateToDoButton />
    </React.Fragment>
  )
}

export default App
