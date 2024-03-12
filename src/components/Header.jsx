import React from 'react'

function Header() {
  return (
    <>
    <p className='text-[20px] pt-[40px]'>Saturday, July 24</p>
    <div className="flex w-[100%] justify-between">
        <h1 className='text-[32px] font-bold'>To Do List</h1>
        <button className='w-[46px] h-[44px] bg-slate-200 rounded-full'>+</button>
    </div>
    </>
  )
}

export default Header