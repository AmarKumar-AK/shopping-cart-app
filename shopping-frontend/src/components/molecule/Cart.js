import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { setIsCartOpen, selectIsCartOpen } from '../../redux/slice/CartSlice';
import { useSelector } from 'react-redux';
import { FaTimes, FaAngleRight } from 'react-icons/fa';
import "../../css/Cart.css"
import CartItem from '../atomic/cart/CartItem';

const Cart = () => {
  const isCartOpen = useSelector(selectIsCartOpen)
  const dispatch = useDispatch()
    // const [open, setOpen] = React.useState(false);
    // const [scroll, setScroll] = React.useState('paper');
  
    // const handleClickOpen = (scrollType) => () => {
    //   setOpen(true);
    //   setScroll(scrollType);
    // };
  
    const handleClose = () => {
      dispatch(setIsCartOpen(false));
    };
  
    // const descriptionElementRef = React.useRef(null);
    // React.useEffect(() => {
    //   if (isCartOpen) {
    //     const { current: descriptionElement } = descriptionElementRef;
    //     if (descriptionElement !== null) {
    //       descriptionElement.focus();
    //     }
    //   }
    // }, [isCartOpen]);
  
    return (
      <>
        {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
        <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
        <Dialog
          fullScreen
          sx={{width: "35%", position: "fixed", left: "50%"}}
          open={isCartOpen}
          onClose={handleClose}
          scroll={"paper"}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <div className='cart-header'>
            <div>My cart <span>(0 item)</span></div>
            <div onClick={handleClose}>
              <FaTimes />
            </div>
            
          </div>
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

          <DialogActions className='cart-footer'>
            <span className='checkout-text'>Promo code can be applied on payment page</span>
            <button className='button'>
              <span>Proceed to Checkout</span>
              <span>Rs. 100 &nbsp;&nbsp;<span className='checkout-icon'><FaAngleRight /></span>
              </span>
            </button>
          </DialogActions>
        </Dialog>
      </>
    );
}

export default Cart
