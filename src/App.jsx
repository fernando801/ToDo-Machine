import React from 'react'
import { ToDoProvider } from './ToDoContext'
import ToDoCounter from './ToDoCounter'
import ToDoSearch from './ToDoSearch'
import ToDoList from './ToDoList'
import CreateToDoButton from './CreateToDoButton'

// const myToDos = [
//   { id:'1', text:'Do something', completed:false},
//   { id:'2', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis sunt incidunt eligendi vero nemo ut dignissimos commodi.', completed:false},
//   { id:'3', text:'Do something', completed:false},
//   { id:'4', text:'Do something', completed:false},
//   { id:'5', text:'Do something', completed:false},
//   { id:'6', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis sunt incidunt eligendi vero nemo ut dignissimos commodi.', completed:false},
//   { id:'7', text:'Do something', completed:false},
//   { id:'8', text:'Do something', completed:false}
// ]

function App() {
  return (
    <ToDoProvider>
      <div className='w-full flex flex-col items-center gap-8 p-8 relative max-w-screen-md'>
        <h1 className='font-bold text-4xl text-center'>ToDo Machine📝</h1>
        <ToDoCounter />
        <ToDoSearch />
        <ToDoList />
        <CreateToDoButton />
      </div>
    </ToDoProvider>
  )
}

export default App
