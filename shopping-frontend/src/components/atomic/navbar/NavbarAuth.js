import React from 'react'
// import "../../../css/Navbar.css"
import router from "../../../config/route"
import "../../../css/navbar/NavbarAuth.css"
import { useSelector, useDispatch } from 'react-redux'
import { getIsLoggedIn, logout } from '../../../redux/slice/AuthSlice'
import { removeCartOnLogout } from '../../../redux/slice/CartSlice'

const NavbarAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
  const dispatch = useDispatch()
  

  const navigateToSignin = () => {
    router.navigate("/signin")
  }

  const navigateToRegister = () => {
    router.navigate("/register")
  }

  const loggingOut = () => {
    dispatch(logout())
    dispatch(removeCartOnLogout())
    router.navigate("/")
    alert("Logged out successfully")
  }

  return (
    <div className='NavbarAuth-container'>
        {isLoggedIn ? (
          <div onClick={() => loggingOut()}>Logout</div>
        ) : (
          <>
            <div onClick={() => navigateToSignin()}>SignIn</div>
            <div onClick={() => navigateToRegister()}>Register</div>
          </>
        )}
        
    </div>
  )
}

export default NavbarAuth
