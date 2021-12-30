import React, { useState } from 'react'

const ToDoContext = React.createContext()

const ToDoProvider = ({ children }) => {
  const defaultToDos = JSON.parse(
    localStorage.getItem('TODOS') || JSON.stringify([])
  )
  const [todos, setToDos] = useState(defaultToDos)
  const [searchValue, setSearchValue] = useState('')
  const [modal, setModal] = useState(false)

  const saveToDos = (newToDos) => {
    localStorage.setItem('TODOS', JSON.stringify(newToDos))
    setToDos(newToDos)
  }

  const switchToDoState = (id) => {
    const toDoIndex = todos.findIndex((todo) => todo.id == id)
    const newToDos = [...todos]
    newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed
    saveToDos(newToDos)
  }

  const deleteToDo = (id) => {
    const toDoIndex = todos.findIndex((todo) => todo.id == id)
    const newToDos = [...todos]
    newToDos.splice(toDoIndex, 1)
    saveToDos(newToDos)
  }

  const toggleModal = () => {
    setModal((prevModal) => !prevModal)
  }

  const addToDo = (newToDoText) => {
    const newToDoId = todos.length ? parseInt(todos[todos.length - 1].id) + 1 : 1
    const newToDos = [...todos]
    newToDos.push({ 
      id: newToDoId.toString(), 
      text: newToDoText, 
      completed: false 
    })
    saveToDos(newToDos)
  }

  return (
    <ToDoContext.Provider
      value={{
        searchValue,
        setSearchValue,
        todos,
        switchToDoState,
        deleteToDo,
        modal,
        toggleModal,
        addToDo
      }}
    >
      {children}
    </ToDoContext.Provider>
  )
}

export { ToDoContext, ToDoProvider }
