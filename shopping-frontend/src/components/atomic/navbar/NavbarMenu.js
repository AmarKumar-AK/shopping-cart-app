import React from 'react'
import router from '../../../config/route'
// import "../../../css/Navbar.css"
import "../../../css/navbar/NavbarMenu.css"

const NavbarMenu = () => {
  const navigateToHome = () => {
    router.navigate("/")
  }

  const navigateToProducts = () => {
    router.navigate("/products")
  }
  
  return (
    <div className='NavbarMenu-container'>
        <ul className='NavbarMenu-items'>
            <li onClick={() => navigateToHome()}>Home</li>
            <li onClick={() => navigateToProducts()}>Products</li>
        </ul>
    </div>
  )
}

export default NavbarMenu
