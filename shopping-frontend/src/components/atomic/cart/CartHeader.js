import React from 'react'
import { useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { setIsCartOpen } from '../../../redux/slice/CartSlice';
import "../../../css/cart/CartHeader.css"

const CartHeader = () => {
    const dispatch = useDispatch();
  
    const handleClose = () => {
      dispatch(setIsCartOpen(false));
    };

  return (
    <div className='CartHeader-container'>
        <div>
            My cart <span>(0 item)</span>
        </div>
        <div onClick={handleClose}>
            <FaTimes />
        </div>
    
    </div>
  )
}

export default CartHeader
