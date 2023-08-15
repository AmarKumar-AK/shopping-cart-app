import React from 'react'
import DialogActions from '@mui/material/DialogActions';
import { FaAngleRight } from 'react-icons/fa';
import "../../../css/cart/CartFooter.css"
import { useSelector } from 'react-redux';
import { getCartItems } from '../../../redux/slice/CartSlice';
import router from "../../../config/route"

const CartFooter = () => {
  // const navigate = useNavigate();
  const cartItemsData = useSelector(getCartItems)
  let totalPrice = 0;
  for(let i = 0; i < cartItemsData.length; i++) {
    totalPrice += cartItemsData[i].totalItemPrice
  }

  return (
    <DialogActions className='CartFooter-container'>
        {totalPrice > 0 &&
          <span className='CartFooter-checkout-text'>Promo code can be applied on payment page</span>
        }
        {/* <span className='CartFooter-checkout-text'>Promo code can be applied on payment page</span> */}
        {totalPrice > 0 ? (
            <button className='CartFooter-checkout-button'>
              <span>Proceed to Checkout</span>
              <span>
                  Rs. {totalPrice} &nbsp;&nbsp;<span className='CartFooter-checkout-icon'><FaAngleRight /></span>
              </span>
            </button>
          ) : (
            <button className='CartFooter-start-shopping-button'>
              Start Shopping 
            </button>
          )   
        }
    </DialogActions>
  )
}

export default CartFooter
