import React from 'react'

function Header({setIsOpen}) {
  const currentDate = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Daftar nama bulan dalam setahun
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Mendapatkan hari dan bulan dalam format yang diinginkan
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = monthsOfYear[currentDate.getMonth()];
  const year = currentDate.getFullYear().toString().slice(-2);
  return (
    <>
    <p className='text-[20px] pt-[40px]'>{dayOfWeek}, {month} {year}</p>
    <div className="flex w-[100%] justify-between">
        <h1 className='text-[32px] font-bold'>To Do List</h1>
        <button className='w-[46px] h-[44px] bg-slate-200 rounded-full' onClick={() => setIsOpen(true)}>+</button>
    </div>
    </>
  )
}

export default Header