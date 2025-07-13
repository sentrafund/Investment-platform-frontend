import React from 'react'

function Footer() {
  return (
    <div>
        <main className='w-[1440px] h-96 text-white bg-blue-950'>
          <section className='flex items-start justify-around mb-13 w-[1271px] align-text-top '>  
            {/* First section of footer */}
            <div className='mt-10'>
              <div className='flex'>
                <div className='mb-10'> <img className='cursor-pointer' src="/Sentrafundlogo.png" alt="website logo" /></div>
                {/* <div>SENTRAFUND</div> */}
              </div>
              <div className='w-[371px] h-[96px]'>
                Your trusted partner in financial markets. Trade stocks, crypto, forex and more with more confidence and security
              </div>
            </div>
            {/* Services */}
            <div className='mt-10'>
              <div className='mb-5 font-bold '> Services</div>
              <div className='mb-3 hover:text-yellow-500 cursor-pointer transition duration-300 ease-in'> Stock Trading</div>
              <div className='mb-3  hover:text-yellow-500 cursor-pointer transition duration-300 ease-in'> Cryptocurrency</div>
              <div className='mb-3  hover:text-yellow-500 cursor-pointer transition duration-300 ease-in'> Forex Trading </div>
              <div className='mb-3  hover:text-yellow-500 cursor-pointer transition duration-300 ease-in'> Binary Options</div>
              <div className='mb-3  hover:text-yellow-500 cursor-pointer transition duration-300 ease-in'> Bonds and Fixed Income</div>
            </div>
            {/* Contact us */}
            <div className='mt-10'>
              <div className='font-bold mb-5'>Contact Us</div>
              <div className='mb-5 flex gap-2 hover:text-yellow-500 cursor-pointer transition duration-300 ease-in'>
                <div> <img src="/material-symbols_mail-outline-rounded.svg" alt="" /></div>
                <div> support@sentrafund.com</div>
              </div>
              <div className='flex gap-2 hover:text-yellow-500 cursor-pointer transition duration-300 ease-in'>
                <div> <img src="ri_whatsapp-line.svg" alt="" /></div>
                <div> +234---------- </div>
              </div>
            </div>
            {/* Follow us */}
            <div className='mt-10'>
              <div className='font-bold mb-5'>Follow us</div>
              <div className='mb-4'>
                <div> <img className='cursor-pointer' src="/fe_facebook.svg" alt="facebook icon" /></div>
                <div></div>
              </div>
              <div className='mb-4'>
                <div> <img className='cursor-pointer' src="/streamline-logos_x-twitter-logo-block.svg" alt="x icon" /></div>
                <div> </div>
              </div>
              <div className='mb-4'>
                <div><img className='cursor-pointer' src="/mdi_linkedin.svg" alt="linkedin icon" /></div>
                <div> </div>
              </div>
              <div className='mb-4'>
                <div> <img className='cursor-pointer' src="streamline_instagram-solid.svg" alt="instagram icon" /></div>
                <div> </div>
              </div>
            </div>
          </section>
          {/* my mild line */}
          <div className='bg-[#666666] w-full h-px'></div>
          {/* the last section */}
          <section className='flex justify-between mx-14 items-center mt-5 mb-0'>
            <div className='flex gap-2 items-center'>
              <div> <img src="ic_baseline-copyright.svg" alt="copyright icon" /></div>
              <div> 2025 Sentrafunds. All rights reserved</div>
            </div>
            <div  className='flex space-x-6'>
              <div className=' hover:text-yellow-500 cursor-pointer transition duration-300 ease-in'> Privacy Policy</div>
              <div className=' hover:text-yellow-500 cursor-pointer transition duration-300 ease-in'> Terms of Service</div>
              <div className=' hover:text-yellow-500 cursor-pointer transition duration-300 ease-in'> Risk Disclosure</div>
            </div>
          </section>
        </main>
    </div>
  )
}

export default Footer