import React from 'react'
import "../../../css/Navbar.css"
import { FaShoppingCart } from 'react-icons/fa';
import { IconContext } from "react-icons";

const NavbarCart = () => {
  const iconContextProviderValue = { 
    color: "#bf2957", 
    className: "icon-context" 
  };

  return (
    <div className='cart'>
        <IconContext.Provider value={iconContextProviderValue}>
            <FaShoppingCart />
        </IconContext.Provider>

        &nbsp;&nbsp;&nbsp;

        <span>0 items</span>
    </div>
  )
}

export default NavbarCart
