import React from 'react'
import { TextField } from '@mui/material'
import "../../../css/Register.css"

const RegisterForm = () => {
  return (
    <div className='register-form'>
        <TextField label="First Name" variant="standard" />
        <TextField label="Last Name" variant="standard" />
        <TextField label="Email" variant="standard" />
        <TextField label="Password" variant="standard" type='password'/>
        <TextField label="Confirm Password" variant="standard" type='password'/>
        <button className='button form-content'>Signup</button>
    </div>
  )
}

export default RegisterForm
