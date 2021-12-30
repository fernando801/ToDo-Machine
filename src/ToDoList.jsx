import React, {useContext} from 'react'
import { ToDoContext } from './ToDoContext'
import ToDoItem from './ToDoItem'

const ToDoList = (props) => {

  const {todos, searchValue} = useContext(ToDoContext)

  const filteredToDos = todos.filter( todo => (todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) )

  return(
    <div className='w-full max-w-[24rem] flex flex-col items-center gap-4'>
      {todos.length
      ?filteredToDos.length
        ?filteredToDos.map(todo => (<ToDoItem key={todo.id} {...todo} switcher={props.switcher} deleteToDo={props.deleteToDo}/>))
        :<p className='max-w-[24rem] w-full min-h-[6rem] p-6 flex justify-center items-center text-center text-gray-600 '>No matches found</p>
      :<p className='max-w-[24rem] w-full min-h-[6rem] p-6 flex justify-center items-center text-center text-gray-600 '>You have no ToDos. Add a new one by clicking the + button</p>}
    </div>
  )
}

export default ToDoList