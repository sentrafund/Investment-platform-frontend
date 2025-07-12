import React from 'react'
import Button from '../components/Button'
import BorderButton from '../components/BorderButton'
import Logo from '../assets/CoinVertical.svg'

function Header() {
    return (
        <div>
            
        <header className='flex justify-around mt-8'>
         
          <div className='flex items-center'>
            <img src={Logo} alt="SENTRAFUND-logo" />
            <h1 className='font-extrabold text-4xl'>SENTRAFUND</h1>
          </div>
          
            <ul className='gap-10 flex items-center'>
              <li>Home</li>
              <li>Investment Plans</li>
              <li>Contact</li>
            </ul>
          
          <div className='flex gap-2.5'>
            <Button name ='Register' />
            <BorderButton  name='Login' />
            </div>
        </header>
        <div className='flex flex-col justify-center items-center gap-5 h-screen'>
        <h1 className='text-5xl w-8/12 text-center' >
        Transform Your Investments with <span className='text-[#F59E0B]'>SENTRAFUND</span>
        </h1>
        <p className='w-8/12 text-2xl text-center'>
        Join the future of trading with SENTRAFUND. 
        Our advanced platform combines cutting-edge technology with 
        institutional-grade analytics to maximize your investment potential.
        </p>
        <Button name="Start Investing" />
        </div>
       
        </div>
      )
}

export default Header