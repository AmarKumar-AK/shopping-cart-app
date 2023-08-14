import React from 'react'
import Dialog from '@mui/material/Dialog';
import { useDispatch } from 'react-redux';
import { setIsCartOpen, selectIsCartOpen } from '../../redux/slice/CartSlice';
import { useSelector } from 'react-redux';
import CartHeader from '../atomic/cart/CartHeader';
import CartFooter from '../atomic/cart/CartFooter';
import CartContent from '../atomic/cart/CartContent';

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
      <Dialog
        fullScreen
        sx={{width: "35%", position: "fixed", left: "50%"}}
        open={isCartOpen}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <CartHeader />
        <CartContent />
        <CartFooter />
      </Dialog>
    );
}

export default Cart
