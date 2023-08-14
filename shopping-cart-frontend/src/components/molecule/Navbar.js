import React from 'react'
import "../../css/Navbar.css"
import NavbarLogo from '../atomic/navbar/NavbarLogo'
import NavbarMenu from '../atomic/navbar/NavbarMenu'
import NavbarAuthAndCart from '../atomic/navbar/NavbarAuthAndCart'
const Navbar = () => {
  return (
    <div className='Navbar-container'>
        <NavbarLogo />
        <NavbarMenu />
        <NavbarAuthAndCart />
    </div>
  )
}

export default Navbar
