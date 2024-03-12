import React from 'react'

function BodyCard({name , isFinished, setTasks , tasks}) {
  function setChecked(e) {
    const isChecked = e.target.checked

    const updateTasks = tasks.map(task => {
      if(task.name == name){
        task.isFinished = isChecked;
      }
      return task
    })

    console.log(updateTasks)
    setTasks(updateTasks)
  }
  return (
    <div className="w-full h-[100px] rounded-lg bg-[#404040] px-[15px] flex items-center">
        <input type="checkbox" className='h-[25px] w-[25px]' checked={isFinished} onChange={setChecked}/>
        <label htmlFor="" className='text-3xl ml-[12px] text-white'>{name}</label>
    </div>
  )
}

export default BodyCard