import React, {useContext} from 'react'
import { ToDoContext } from './ToDoContext'
import ToDoCounter from './ToDoCounter'
import ToDoSearch from './ToDoSearch'
import ToDoList from './ToDoList'
import CreateToDoButton from './CreateToDoButton'
import CreateToDoForm from './CreateToDoForm'
import Modal from './Modal'

function AppUI() {
  const {modal} = useContext(ToDoContext)

  return (
    <div className='flex flex-col items-center gap-8 px-4 py-8 relative max-w-[28rem]'>
      <h1 className='font-bold text-5xl text-center'>ToDo Machine📝</h1>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList />
      <CreateToDoButton />
      {modal && <Modal>
        <CreateToDoForm />
      </Modal>}
    </div>
  )
}

export default AppUI
