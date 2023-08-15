import React from 'react'
import DialogContent from '@mui/material/DialogContent';
import CartItem from './CartItem';
import "../../../css/cart/CartContent.css"
import { useSelector } from 'react-redux';
import { getCartItems } from '../../../redux/slice/CartSlice';

const CartContent = () => {
  // cart item ke array se fetch krna hai cart item aur yaha show krna hai
  const cartItemsData = useSelector(getCartItems)

  return (
    <DialogContent className='cart-content'>
    {/* <DialogContentText
        id="scroll-dialog-description"
        // ref={descriptionElementRef}
        tabIndex={-1}
        
    > */}
    {cartItemsData && cartItemsData.map((item) => {
      // console.log("item name : ", item.id)
      return (
        <CartItem 
          itemKey={item.sku} 
          itemImageUrl={item.imageURL} 
          itemName={item.name} 
          itemQuantity={item.quantity} 
          itemPrice={item.price}
          totalItemPrice={item.totalItemPrice} 
        />

      )
    })}
    {cartItemsData && cartItemsData.length === 0 &&
      <div className='CartContent-no-items'>
        <span className='CartContent-no-items-heading'>No items in your cart</span>
        <span className='CartContent-no-items-description'>Your favourite items are just a click away</span>
      </div>
    
    }
        
    {/* </DialogContentText> */}
    </DialogContent>
  )
}

export default CartContent
