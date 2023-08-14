import React from 'react'
import "../../../css/Navbar.css"
import router from '../../../config/route';

const NavbarLogo = () => {
  const imagePath = `${process.env.PUBLIC_URL}/static/images/logo.png`;
  
  const navigateToHome = () => {
    router.navigate("/");
  }
  
  return (
    <div className='logo'>
      <img src={imagePath} alt="logo" onClick={() => navigateToHome()}/>
    </div>
  )
}

export default NavbarLogo
