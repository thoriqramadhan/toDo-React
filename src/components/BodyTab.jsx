import React from 'react'
import { useState } from 'react'

function BodyTab({setBodyView}) {
  const [isClickedFinished , setIsClickedFinished] = useState(true)
  const [isClickedGoing , setIsClickedGoing] = useState(false)

  function FinishedHandler(){
    setBodyView(true)
    setIsClickedFinished(false)
    setIsClickedGoing(true)
  }
  function OnGoingHandler(){
    setBodyView(false)
    setIsClickedGoing(false)
    setIsClickedFinished(true)
  }
  return (
    <div className='w-full h-[46px] bg-black text-white text-[24px] flex justify-between items-center px-[40px] sticky top-0'>
        <h1 className={`cursor-pointer transition-all delay-100 ${isClickedGoing ? 'opacity-80' : ''}`} onClick={OnGoingHandler}>On Going</h1>
        <h1 className={`cursor-pointer transition-all delay-100 ${isClickedFinished ? 'opacity-80' : ''}`} onClick={FinishedHandler}>Finished</h1>
    </div>
  )
}

export default BodyTab