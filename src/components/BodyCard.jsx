import React from 'react'

function BodyCard({name , deadline, isFinished, setTasks , tasks}) {
  function setChecked(e) {
    const isChecked = e.target.checked

    const updateTasks = tasks.map(task => {
      if(task.name == name){
        task.isFinished = isChecked;
      }
      return task
    })

    setTasks(updateTasks)
  }
  function deleteCard(){
    const updateTaks = tasks.filter(task => task.name !== name)

    setTasks(updateTaks)
  }
  return (
    <div className="w-full h-[100px] rounded-lg bg-[#404040] px-[15px] flex items-center justify-between">
      <div className="">
        <input type="checkbox" className='h-[25px] w-[25px]' checked={isFinished} onChange={setChecked}/>
        <label htmlFor="" className='text-3xl ml-[12px] text-white'>{name}  <span className='text-sm font-thin relative -top-3'>{deadline}</span> </label>
      </div>
      <div className="text-2xl font-bold text-red-400">
        <button onClick={deleteCard}>X</button>
      </div>
    </div>
  )
}

export default BodyCard