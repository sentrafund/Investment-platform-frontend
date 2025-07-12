import React from 'react'

function Investmentcards({title, content}) {
  return (
    <div>
        <div>
            <h1> How it works </h1>
            <h1>Investing with <span className='text-amber-500'>SENTRAFUND</span></h1>
        </div>
        <div className='w-[269px] h-[316px] p-[40px] gap-[40px] bg-white shadow-lg '>
            <div> <h2>{title}</h2></div>
            <div> <p>{content}</p></div>
        </div>
    </div>
  )
}

export default Investmentcards