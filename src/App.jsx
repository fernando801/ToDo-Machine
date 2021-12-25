import React, { useState } from 'react'
import ToDoCounter from './ToDoCounter'
import ToDoSearch from './ToDoSearch'
import ToDoList from './ToDoList'
import CreateToDoButton from './CreateToDoButton'

const todos = [
  { id:'1', text:'Do something', completed:true},
  { id:'2', text:'Lorem JSLFJDLF AKJSALK FDJLASJDF LAKJSDLFKAD JSLFKJASL DFJASLDJF DJSLKDJFAS DJFKAJDF ASKDJF AJSDJ', completed:true},
  { id:'3', text:'Do something', completed:true},
  { id:'4', text:'Do something', completed:false},
  { id:'5', text:'Do something', completed:false},
  { id:'6', text:'Lorem JSLFJDLF AKJSALK FDJLASJDF LAKJSDLFKAD JSLFKJASL DFJASLDJF DJSLKDJFAS DJFKAJDF ASKDJF AJSDJ', completed:false},
  { id:'7', text:'Do something', completed:false},
  { id:'8', text:'Do something', completed:false}
]

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className='w-full flex flex-col items-center gap-8 p-8 relative max-w-screen-md'>
      <h1 className='font-bold text-4xl text-center'>ToDo Machine📝</h1>
      <ToDoCounter toDosCount={todos.length} toDosCompleted={todos.filter(todo => (todo.completed)).length}/>
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <ToDoList todos={todos.filter(todo => (todo.text.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1) )} />
      <CreateToDoButton />
    </div>
  )
}

export default App
