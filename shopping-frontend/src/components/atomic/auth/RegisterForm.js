import React, { useState } from 'react'
import { TextField } from '@mui/material'
// import "../../../css/Register.css"
import "../../../css/auth/RegisterForm.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, getUsers } from '../../../redux/slice/UserSlice'

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const users = useSelector(getUsers)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("All fields are mandatory");
    } else if(users.find(user => user.email === email)) {
      alert("User already exists")
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      const maxCartId = users.reduce((maxId, user) => {
        const cartId = user.cart.cartId;
        return cartId > maxId ? cartId : maxId;
      }, 0);

      dispatch(
        addUser({
          "firstName": firstName,
          "lastName": lastName,
          "email": email,
          "password": password,
          "cart": {
            "cartId": maxCartId + 1,
            "cartItems": [],
          }
        })
      )
      alert("Registration successfull")
      navigate("/signin")
    }
  };

  return (
    <form className='RegisterForm-container' onSubmit={handleSubmit}>
        <TextField required label="First Name" variant="standard" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <TextField required label="Last Name" variant="standard" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <TextField required label="Email" variant="standard" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField required label="Password" variant="standard" type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <TextField required label="Confirm Password" variant="standard" type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        <button type='submit' className='RegisterForm-button'>Signup</button>
    </form>
  )
}

export default RegisterForm
