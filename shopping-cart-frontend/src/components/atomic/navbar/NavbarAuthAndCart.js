import React from 'react'
import "../../../css/Navbar.css"
import NavbarAuth from './NavbarAuth';
import NavbarCart from './NavbarCart';

const NavbarAuthAndCart = () => {
  return (
    <div className='auth-cart'>
        <NavbarAuth />
        <NavbarCart />
    </div>
  )
}

export default NavbarAuthAndCart
