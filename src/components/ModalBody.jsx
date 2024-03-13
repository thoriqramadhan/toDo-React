import React from 'react'

function ModalBody({setIsOpen ,tasks}) {
    function formatData(e){
        const form = e.target
        const formData = {
            name : form.elements.toDo.value,
            deadline : form.elements.deadline.value,
            isFinished: false
        }
        tasks.push(formData)
        setIsOpen(false)
        e.preventDefault()
    }
  return (
    <form action="" onSubmit={formatData} className='w-full mt-[50px] mb-[30px] flex flex-col items-start justify-center px-[20px]'>
        <div className="w-full">
          <label htmlFor="" className='font-bold text-3xl'>Target</label>
          <input type="text" name="toDo" id="toDo" className='block ring-1 px-[8px] py-[5px] w-full rounded-lg mt-2' maxLength={20} required/>
        </div>
        <div className="w-full mt-5">
          <label htmlFor="" className='font-bold text-3xl'>Deadline</label>
          <input type="date" name="deadline" id="deadline" className='block ring-1 px-[8px] py-[5px] w-full rounded-lg mt-2' required/>
        </div>
        <button className='bg-gray-300 p-1 rounded-lg text-lg w-full mt-7'>Submit</button>
      </form>
  )
}

export default ModalBody