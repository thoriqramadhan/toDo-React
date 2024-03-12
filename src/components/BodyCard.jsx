import React from 'react'

function BodyCard({name}) {
  return (
    <div className="w-full h-[100px] rounded-lg bg-[#404040] px-[15px] flex items-center">
        <input type="checkbox" className='h-[25px] w-[25px]'/>
        <label htmlFor="" className='text-3xl ml-[12px] text-white'>{name}</label>
    </div>
  )
}

export default BodyCard