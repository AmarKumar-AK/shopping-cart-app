import React from 'react'
import DialogActions from '@mui/material/DialogActions';
import { FaAngleRight } from 'react-icons/fa';
import "../../../css/cart/CartFooter.css"

const CartFooter = () => {
  return (
    <DialogActions className='CartFooter-container'>
        <span className='CartFooter-checkout-text'>Promo code can be applied on payment page</span>
        <button className='CartFooter-checkout-button'>
            <span>Proceed to Checkout</span>
            <span>
                Rs. 100 &nbsp;&nbsp;<span className='CartFooter-checkout-icon'><FaAngleRight /></span>
            </span>
        </button>
    </DialogActions>
  )
}

export default CartFooter
