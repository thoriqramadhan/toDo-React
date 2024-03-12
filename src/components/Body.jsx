import React, { useState } from 'react'
import BodyTab from './BodyTab'
import BodyCard from './BodyCard'

function Body() {
  const taskExample = [
    {
        name : "Workout",
        isFinished : false
    },
    {
        name : "Work",
        isFinished : true
    },
    {
        name : "out",
        isFinished : false
    },
    {
        name : "Berak",
        isFinished : true
    }
]
  const [task,setTask] = useState(taskExample)
  const [bodyView , setBodyView] = useState(false)

  
  return (
    <div className='w-[100%] h-[450px] mt-[34px] overflow-scroll bg-[#D9D9D9]'>
        <BodyTab setBodyView={setBodyView}/>
        <div className="px-[15px] mt-[20px] flex flex-col gap-y-2">
          {
            bodyView ? 
            task.filter(task => task.isFinished).map(task => <BodyCard name={task.name} isFinished={task.isFinished} setTask={setTask}/>) : 
            task.filter(task => !task.isFinished).map(task => <BodyCard name={task.name} isFinished={task.isFinished} setTask={setTask}/>)
          }
        </div>
    </div>
  )
}

export default Body