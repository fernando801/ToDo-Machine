import React, { useState, useContext } from 'react'
import { ToDoContext } from './ToDoContext'

const CreateToDoForm = () => {
  const { toggleModal, addToDo } = useContext(ToDoContext)
  const [toDoValue, setToDoValue] = useState('')

  const handleChange = (event) => {
    setToDoValue(event.target.value)
  }

  const handleCancel = (event) => {
    event.preventDefault()
    setToDoValue('')
    toggleModal()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!toDoValue) return
    addToDo(toDoValue)
    toggleModal()
  }

  return (
    <div className='w-full max-w-[28rem] bg-white rounded-xl p-6 '>
      <form
        autoComplete='off'
        className='w-full flex flex-col gap-8 items-center'
        onSubmit={handleSubmit}
      >
        <label htmlFor='toDoText' className='text-3xl font-bold'>
          New ToDo
        </label>
        <input
          id='toDoText'
          autoFocus='autofocus' 
          value={toDoValue}
          onChange={handleChange}
          rows='5'
          className='w-full bg-gray-200 rounded p-4 resize-none overflow-auto h-auto'
          placeholder='Create something awesome'
        />
        <div className='w-full max-w-[15rem] flex justify-between flex-row-reverse'>
          <button
            type='submit'
            className='w-24 bg-cyan-500 text-white p-2 rounded-lg active:scale-90 transition-transform duration-100'
          >
            Add
          </button>
          <button
            onClick={handleCancel}
            className='w-24 bg-gray-200 p-2 rounded-lg active:scale-90 transition-transform duration-100'
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateToDoForm
