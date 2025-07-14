import React from 'react'

function Investmentcards({title, content}) {
  return (
    <div>
        <div className='w-[269px] h-[316px] p-[40px] gap-[40px] bg-[#FFFFFF] shadow-lg '>
            <div className='mb-10'> <h2>{title}</h2></div>
            <div className='w-[189px] h-[171px] text-sm text-gray-400  ' > <p>{content}</p></div>
        </div>
    </div>
  )
}

export default Investmentcards