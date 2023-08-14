import React from 'react'
import { TextField } from '@mui/material'
// import "../../../css/Signin.css"
// import "../../../css/SigninForm.css"
import "../../../css/auth/SigninForm.css"

const SigninForm = () => {
  return (
    <div className='SigninForm-container'>
        <TextField label="Email" variant="standard" />
        <TextField label="Password" variant="standard" type='password'/>
        <button className='SigninForm-button'>Login</button>
    </div>
  )
}

export default SigninForm
