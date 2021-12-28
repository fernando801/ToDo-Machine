import React, {useState} from 'react';

const ToDoContext = React.createContext()

const ToDoProvider = ({children}) => {

  const defaultToDos = JSON.parse( localStorage.getItem('TODOS') || JSON.stringify([]) )
  const [searchValue, setSearchValue] = useState('')
  const [todos, setToDos] = useState(defaultToDos)

  const saveToDos = (newToDos) => {
    localStorage.setItem('TODOS', JSON.stringify(newToDos))
    setToDos(newToDos)
  }

  const switchToDoState = (id) => {
    const toDoIndex = todos.findIndex(todo => todo.id == id)
    const newToDos = [...todos]
    newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed
    saveToDos(newToDos)
  }

  const deleteToDo = (id) => {
    const toDoIndex = todos.findIndex(todo => todo.id == id)
    const newToDos = [...todos]
    newToDos.splice(toDoIndex,1)
    saveToDos(newToDos)
  }

  return(
    <ToDoContext.Provider value={{
      searchValue, 
      setSearchValue, 
      todos, 
      switchToDoState,
      deleteToDo
    }}>
      {children}
    </ToDoContext.Provider>  
  )
}

export {ToDoContext, ToDoProvider}