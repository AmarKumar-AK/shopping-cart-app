import React from 'react'
// import "../../../css/Navbar.css"
import router from "../../../config/route"
import "../../../css/navbar/NavbarAuth.css"

const NavbarAuth = () => {

  const navigateToSignin = () => {
    router.navigate("/signin")
  }

  const navigateToRegister = () => {
    router.navigate("/register")
  }

  return (
    <div className='NavbarAuth-container'>
        <div onClick={() => navigateToSignin()}>SignIn</div>
        <div onClick={() => navigateToRegister()}>Register</div>
    </div>
  )
}

export default NavbarAuth
