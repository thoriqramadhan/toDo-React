import React from 'react'

function Modal({isOpen , isClose , children}) {
    if(!isOpen) return null;
  return (
    <div className="w-[100%] h-[100%] bg-blur fixed top-0 left-0 flex items-center justify-center">
      <div className="w-[450px] h-fit bg-white rounded-xl flex flex-col justify-center relative">
        {children}
      </div>
    </div>
  )
}

export default Modal