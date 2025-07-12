import React from 'react'

function BorderButton( props) {
  return (
    <div>
         <button className='border boeder-[#F59E0B]-800 rounded-xl p-2.5 w-28 text-[#F59E0B]'>
          {props.name} 
          </button>
    </div>
  )
}

export default BorderButton