import React, {useContext} from "react";
import { ToDoContext } from './ToDoContext';

const ToDoSearch = (props) => {
  const {searchValue, setSearchValue} = useContext(ToDoContext)

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }
  
  return(
    <input className='bg-gray-200 w-full max-w-[24rem] px-8 py-6 rounded-xl shadow-md sticky top-8 z-10' type='text' 
    value={searchValue}
    onChange={handleChange}
    placeholder='Search TODO'/>
  )
}

export default ToDoSearch