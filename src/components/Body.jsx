import React, { useState } from 'react'
import BodyTab from './BodyTab'
import BodyCard from './BodyCard'
import Modal from './Modal'

function Body({tasks , setTasks}) {
  const [bodyView , setBodyView] = useState(false)

  
  return (
    <>
    <div className='w-[100%] h-[450px] mt-[34px] overflow-scroll bg-[#D9D9D9] static'>
        <BodyTab setBodyView={setBodyView}/>
        <div className="px-[15px] mt-[20px] flex flex-col gap-y-2">
          {
            tasks ?
            bodyView ? 
            tasks.filter(task => task.isFinished).map(task => <BodyCard name={task.name} deadline={task.deadline} key={task.name} isFinished={task.isFinished} setTasks={setTasks} tasks={tasks}/>) : 
            tasks.filter(task => !task.isFinished).map(task => <BodyCard name={task.name} key={task.name} deadline={task.deadline} isFinished={task.isFinished} setTasks={setTasks} tasks={tasks}/>) :
            <h1>No data</h1>
          }
        </div>
    </div>

    </>
  )
}

export default Body