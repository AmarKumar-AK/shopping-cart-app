import React from 'react'
import NavbarAuth from './NavbarAuth';
import NavbarCart from './NavbarCart';
import "../../../css/navbar/NavbarAuthAndCart.css"

const NavbarAuthAndCart = () => {
  return (
    <div className='NavbarAuthAndCart-container'>
        <NavbarAuth />
        <NavbarCart />
    </div>
  )
}

export default NavbarAuthAndCart
