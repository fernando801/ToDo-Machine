import React, { useState } from 'react'
import ToDoCounter from './ToDoCounter'
import ToDoSearch from './ToDoSearch'
import ToDoList from './ToDoList'
import ToDoItem from './ToDoItem'
import CreateToDoButton from './CreateToDoButton'

const todos = [
  { id:'1', text:'Algo', completed:false},
  { id:'2', text:'Lorem JSLFJDLF AKJSALK FDJLASJDF LAKJSDLFKAD JSLFKJASL DFJASLDJF DJSLKDJFAS DJFKAJDF ASKDJF AJSDJ', completed:false},
  { id:'3', text:'Algo', completed:false},
  { id:'4', text:'Algo', completed:false},
  { id:'5', text:'Algo', completed:false},
  { id:'6', text:'Lorem JSLFJDLF AKJSALK FDJLASJDF LAKJSDLFKAD JSLFKJASL DFJASLDJF DJSLKDJFAS DJFKAJDF ASKDJF AJSDJ', completed:false},
  { id:'7', text:'Algo', completed:false},
  { id:'8', text:'Algo', completed:false}
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center gap-8 p-8 relative max-w-screen-md'>
      <h1 className='font-bold text-4xl text-center'>ToDo Machine 📝</h1>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {todos.map(todo => (<ToDoItem key={todo.id} text={todo.text}/>))}       
      </ToDoList>
      <CreateToDoButton />
    </div>
  )
}

export default App
