import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className='fixed top-0 right-0 bottom-0 left-0 px-4 py-8 bg-gray-600/80 flex flex-col z-10 justify-center items-center'>{children}</div>,
    document.getElementById('modal')
  )
}

export default Modal
