import { BsCheckLg, BsThreeDots } from 'react-icons/bs';
import React from 'react'

const ToDoItem = ({props}) => {
  return(
    <li className={`max-w-[24rem] w-full min-h-[6rem] p-6 
                   rounded-xl border-[1px] border-gray-100 
                   flex items-center 
                   shadow-lg relative
                   ${props.completed ? 'bg-gray-100': 'bg-white' }`}>
      <div className={`min-w-[2rem] h-8 
                      flex items-center justify-center 
                      hover:cursor-pointer
                      hover:text-cyan-500
                      ${props.completed ? 'text-cyan-500' : 'text-gray-400'}`}>
        <BsCheckLg size='20'/>
      </div>
      <p className={`px-4 ${props.completed && 'text-gray-600 line-through'}`}>{props.text}</p>
      <div className='w-8 h-8 
                      absolute top-2 right-2 
                      flex items-center justify-center 
                      text-gray-400
                      hover:cursor-pointer'>
        <BsThreeDots size='20'/>  
      </div>
    </li>
  )
}

export default ToDoItem
