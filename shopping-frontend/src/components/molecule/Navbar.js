import React from 'react'
import NavbarLogo from '../atomic/navbar/NavbarLogo'
import NavbarMenu from '../atomic/navbar/NavbarMenu'
import NavbarAuthAndCart from '../atomic/navbar/NavbarAuthAndCart'
import "../../css/navbar/Navbar.css"

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
