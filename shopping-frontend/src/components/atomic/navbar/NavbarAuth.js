import React from 'react'
import "../../../css/Navbar.css"
import router from "../../../config/route"

const NavbarAuth = () => {

  const navigateToSignin = () => {
    router.navigate("/signin")
  }

  const navigateToRegister = () => {
    router.navigate("/register")
  }

  return (
    <div className='auth'>
        <div onClick={() => navigateToSignin()}>SignIn</div>
        <div onClick={() => navigateToRegister()}>Register</div>
    </div>
  )
}

export default NavbarAuth
