import React from 'react'
import { TextField } from '@mui/material'
import "../../../css/Signin.css"

const SigninForm = () => {
  return (
    <div className='signin-form'>
        <TextField label="Email" variant="standard" />
        <TextField label="Password" variant="standard" type='password'/>
        <button className='button form-content'>Login</button>
    </div>
  )
}

export default SigninForm
