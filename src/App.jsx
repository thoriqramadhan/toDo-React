import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Modal from './components/Modal'
import ModalBody from './components/ModalBody'

function App() {
  const [tasks,setTasks] = useState([])
  const [isOpen , setIsOpen] = useState(false)
  return (
    <>
    <div className="px-[20px]">
    <Header setIsOpen={setIsOpen}/>
    <Body tasks={tasks} setTasks={setTasks}/>
    <Modal isOpen={isOpen}>
    <button onClick={() => setIsOpen(false)} className="text-2xl font-bold absolute top-5 right-5">X</button>
      <ModalBody setIsOpen={setIsOpen} tasks={tasks}/>
    </Modal>
    </div>
    </>
  )
}

export default App
