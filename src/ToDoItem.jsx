import { BsCheckLg, BsThreeDots, BsTrashFill } from 'react-icons/bs';
import React from 'react'

const ToDoItem = (props) => {
  return(
    <div className={`max-w-[24rem] w-full min-h-[6rem] p-6 
                   rounded-xl border-[1px] border-gray-100 
                   flex items-center 
                   shadow-lg relative 
                   transition-all ease-linear duration-200 
                   ${props.completed ? 'bg-gray-100': 'bg-white' }`}>
      <div className={`min-w-[2rem] h-8 
                      flex items-center justify-center 
                      hover:cursor-pointer
                      sm:hover:text-cyan-500 
                      active:text-cyan-500
                      active:scale-90
                      ${props.completed ? 'text-cyan-500' : 'text-gray-400'}`}
                      onClick={()=>{props.switcher(props.id)}}>
        <BsCheckLg size='20'/>
      </div>
      <p className={`px-4 ${props.completed && 'text-gray-600 line-through'}`}>{props.text}</p>
      <div tabIndex='0' className='w-8 h-8 
                      absolute top-2 right-2 
                      flex items-center justify-center 
                      text-gray-400
                      hover:cursor-pointer group'>
        <BsThreeDots size='20'/>
        <div onClick={() => {props.deleteToDo(props.id)}}
             className='flex gap-2 items-center 
                        bg-red-500 text-white 
                        px-2 py-1 rounded 
                        absolute top-0 right-0 
                        scale-0 group-focus:scale-100 
                        transition-all ease-linear duration-100'>
          <BsTrashFill size='20'/><p>Delete</p>
        </div>
      </div>
    </div>
  )
}

export default ToDoItem
