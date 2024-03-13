import React, { useState , useEffect} from 'react'
import BodyTab from './BodyTab'
import BodyCard from './BodyCard'
import Filter from './Filter'

function Body({tasks , setTasks}) {
  const [bodyView , setBodyView] = useState(false)
  const [filter , setFilter] = useState('input')
  const [tasksUsed , setTasksUsed] = useState(tasks)
  let condition;
  if(tasks.length == 0){
    condition = false
  }else{
    condition = true
  }
  useEffect(() => {
    if (filter === 'name') {
      const nameTasks = [...tasks].sort((a, b) => a.name.localeCompare(b.name));
      setTasksUsed(nameTasks);
    } else {
      setTasksUsed(tasks);
    }
  }, [filter, tasks]);
  return (
    <>
    <div className='w-[100%] h-[450px] mt-[34px] overflow-scroll bg-[#D9D9D9] relative'>
        <BodyTab setBodyView={setBodyView}/>
        <div className="px-[15px] mt-[20px] flex flex-col gap-y-2">
          {
            condition ?
            bodyView ? 
            tasksUsed.filter(task => task.isFinished).map(task => <BodyCard name={task.name} deadline={task.deadline} key={task.name} isFinished={task.isFinished} setTasks={setTasks} tasks={tasks}/>) : 
            tasksUsed.filter(task => !task.isFinished).map(task => <BodyCard name={task.name} key={task.name} deadline={task.deadline} isFinished={task.isFinished} setTasks={setTasks} tasks={tasks}/>) :
            <h1 className='text-4xl font-bold text-center mt-[35%]'>No Data</h1>
          }
        </div>
        <Filter filter={filter} setFilter={setFilter}/>
    </div>

    </>
  )
}

export default Body