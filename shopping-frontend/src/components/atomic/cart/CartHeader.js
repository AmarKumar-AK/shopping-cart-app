import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { getCartItems, setIsCartOpen } from '../../../redux/slice/CartSlice';
import "../../../css/cart/CartHeader.css"

const CartHeader = () => {
    const dispatch = useDispatch();
    const cartItemsData = useSelector(getCartItems)
  
    const handleClose = () => {
      dispatch(setIsCartOpen(false));
    };

  return (
    <div className='CartHeader-container'>
        <div>
            My cart &nbsp;
            {cartItemsData &&
              <span>({cartItemsData.length} item)</span>
            }
            
        </div>
        <div onClick={handleClose}>
            <FaTimes />
        </div>
    
    </div>
  )
}

export default CartHeader
