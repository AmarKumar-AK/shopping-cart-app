import React from 'react'
import DialogContent from '@mui/material/DialogContent';
import CartItem from './CartItem';
import "../../../css/cart/CartContent.css"

const CartContent = () => {
  return (
    <DialogContent className='cart-content'>
    {/* <DialogContentText
        id="scroll-dialog-description"
        // ref={descriptionElementRef}
        tabIndex={-1}
        
    > */}
        <CartItem />
        <CartItem />
        <CartItem />
        
    {/* </DialogContentText> */}
    </DialogContent>
  )
}

export default CartContent
