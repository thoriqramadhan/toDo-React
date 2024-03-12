import React, { useState } from 'react'
import BodyTab from './BodyTab'
import BodyCard from './BodyCard'

function Body() {
  const taskExample = ['Workout' , 'Drawing' , 'dada' , 'daadda' ,'daad' , 'dadda' , 'dadad']
  const [task,setTask] = useState(taskExample)
  return (
    <div className='w-[100%] h-[450px] mt-[34px] overflow-scroll bg-[#D9D9D9]'>
        <BodyTab/>
        <div className="px-[15px] mt-[20px] flex flex-col gap-y-2">
          {taskExample.map(task => {
            return <BodyCard name={task}/>
          })}
        </div>
    </div>
  )
}

export default Body