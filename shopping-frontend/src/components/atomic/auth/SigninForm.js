import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from '../../../redux/slice/UserSlice'
// import "../../../css/Signin.css"
// import "../../../css/SigninForm.css"
import "../../../css/auth/SigninForm.css"
import { useNavigate } from 'react-router-dom'
import { login } from '../../../redux/slice/AuthSlice'

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userData = useSelector(getUsers)
  const dispatch = useDispatch()
  const navigate = useNavigate ()

  const validateLogin = () => {
    if (!email || !password) {
      return false;
    }

    const currentUser = userData.find((user) => user.email === email && user.password === password);
    if(currentUser) {
      dispatch(
        login({
          "firstName": currentUser.firstName, 
          "lastName": currentUser.lastName, 
          "email": currentUser.email, 
          "cart": currentUser.cart
        })
      )
      return true;
    } else {
      return false
    }
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validateLogin()) {
      console.log('Login Successful');
      navigate("/products")
    } else {
      alert("Invalid Credentials")
    }
  };

  return (
    <form className='SigninForm-container' onSubmit={handleSubmit}>
        <TextField label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <TextField label="Password" variant="standard" type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit' className='SigninForm-button'>Login</button>
    </form>
  )
}

export default SigninForm
