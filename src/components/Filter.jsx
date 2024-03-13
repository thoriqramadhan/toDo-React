import React, { useState } from 'react'

function Filter({filter ,setFilter}) {
    function changeFilter(e){
        setFilter(e.target.value)
    }

  return (
    <div className="w-full h-[50px] bg-[#D9D9D9] fixed bottom-0 left-0 flex justify-center items-center">
        <select name="" id=""  onChange={changeFilter} value={filter} className='w-[50%] h-[30px] bg-black text-white px-2'>
            <option value="name">Name</option>
            <option value="input">Input</option>
        </select>
    </div>
  )
}

export default Filter