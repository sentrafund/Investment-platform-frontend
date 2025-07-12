import React from 'react'

function button( props) {
  return (
    <div>
        <button className='bg-[#F59E0B] rounded-xl p-2.5 text-white'>
          {props.name} 
          </button>
        </div>
  )
}

export default button