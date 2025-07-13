import React from 'react'
import Investmentcards from './Investmentcards'

function Howitworks() {
  return (
    <div>
        <div className='mb-15 mt-15'>
            <h1 className='text-center mb-5 text-blue-900 text-xl'> How it works </h1>
            <h1 className='text-center mb-5 text-3xl'>Investing with <span className='text-amber-500'>SENTRAFUND</span></h1>
        </div>
        <div className='w-[1280px] h-[316px] gap-[68px] flex justify-between ml-[80px] '>
            <Investmentcards title="Sign Up" content= "Create your account on our secure platform and gain access to our investing tools. It's easy and quick, just provide some basic information, and you'll be ready to start your investing journey." />
            <Investmentcards title="Fund Your Account" content= "Deposit funds securely to start investing. Choose from multiple payment options and enjoy our encrypted transaction system, designed to keep your funds safe."/>
            <Investmentcards title="Grow Your Investments" content= "Track your portfolio and see your investments grow with informed decisions. Our analytics and reports provide insights to help you optimize your investment strategy."/>
            <Investmentcards title="Withdraw Funds" content= "In your SENTRAFUND account, you can decide to to withdraw funds when you reach your account threshold."/>
        </div>
    </div>
  )
}

export default Howitworks