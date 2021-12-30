import React, {useContext} from 'react'
import { ToDoContext } from './ToDoContext'

const CreateToDoButton = () => {
  const { toggleModal } = useContext(ToDoContext) 

  return(
    <button onClick={toggleModal} className='bg-cyan-500 h-[4.5rem] w-[4.5rem] sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-6xl text-white fixed bottom-8 right-8 active:scale-90 transition-transform duration-100 z-20'>
      +
    </button>
  )
}

export default CreateToDoButton