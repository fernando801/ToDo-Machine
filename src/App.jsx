import React, { useState } from 'react'
import ToDoCounter from './ToDoCounter'
import ToDoSearch from './ToDoSearch'
import ToDoList from './ToDoList'
import CreateToDoButton from './CreateToDoButton'

const defaultToDos = [
  { id:'1', text:'Do something', completed:true},
  { id:'2', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis sunt incidunt eligendi vero nemo ut dignissimos commodi.', completed:true},
  { id:'3', text:'Do something', completed:true},
  { id:'4', text:'Do something', completed:false},
  { id:'5', text:'Do something', completed:false},
  { id:'6', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis sunt incidunt eligendi vero nemo ut dignissimos commodi.', completed:false},
  { id:'7', text:'Do something', completed:false},
  { id:'8', text:'Do something', completed:false}
]

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [todos, setToDos] = useState(defaultToDos)

  const switchToDoState = (id) => {
    const toDoIndex = todos.findIndex(todo => todo.id == id)
    const newToDos = [...todos]
    newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed
    setToDos(newToDos)
  }

  const deleteToDo = (id) => {
    const toDoIndex = todos.findIndex(todo => todo.id == id)
    const newToDos = [...todos]
    newToDos.splice(toDoIndex,1)
    setToDos(newToDos)
  }

  return (
    <div className='w-full flex flex-col items-center gap-8 p-8 relative max-w-screen-md'>
      <h1 className='font-bold text-4xl text-center'>ToDo Machine📝</h1>
      <ToDoCounter toDosCount={todos.length} toDosCompleted={todos.filter(todo => (todo.completed)).length}/>
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <ToDoList switcher={switchToDoState} deleteToDo={deleteToDo} todos={todos.filter( todo => (todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) )} />
      <CreateToDoButton />
    </div>
  )
}

export default App
