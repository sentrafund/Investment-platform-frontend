import React from 'react'
import InputField from './Inputfield'

function Register() {
  return (
    <div>
        {/* <form action="">
            <input type="text" name='Clement' placeholder='' />
        </form> */}
        <InputField label='Clement' placeholder='Your name'  />
        <InputField label='Email' placeholder='type your email'  />
        <InputField label= 'Password' placeholder= '*****' required />
    </div>
  )
}

export default Register