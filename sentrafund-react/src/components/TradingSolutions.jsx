import React from 'react'
import TradingSolutionCard from './TradingSolutionCard'
function TradingSolutions() {
  return (
    <section className=''>
        <div className='flex flex-col h-screen items-center py-15 gap-3 bg-[#F4FFFF]'>
        {/* <h2 className="text-3xl font-bold mb-4">Complete Trading Solutions</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Everything you need to trade and invest across multiple asset classes,
        all from one powerful platform designed for modern investors.
      </p> */}

        <div className='grid grid-rows-3'>
          <TradingSolutionCard />

        </div>
        </div>
    </section>
  )
}

export default TradingSolutions