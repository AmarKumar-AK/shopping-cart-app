import React from 'react'
// import "../../../css/Navbar.css"
import router from '../../../config/route';
import "../../../css/navbar/NavbarLogo.css"

const NavbarLogo = () => {
  const imagePath = `${process.env.PUBLIC_URL}/static/images/logo.png`;
  
  const navigateToHome = () => {
    router.navigate("/");
  }
  
  return (
    <div className='NavbarLogo-container'>
      <img src={imagePath} alt="logo" onClick={() => navigateToHome()}/>
    </div>
  )
}

export default NavbarLogo
