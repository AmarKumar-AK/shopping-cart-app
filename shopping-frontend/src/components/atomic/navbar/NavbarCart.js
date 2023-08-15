import React from 'react'
// import "../../../css/Navbar.css"
import { FaShoppingCart } from 'react-icons/fa';

import { IconContext } from "react-icons";
// import Cart from '../../../pages/Cart';
import Cart from '../../molecule/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems, setIsCartOpen } from '../../../redux/slice/CartSlice';
import router from '../../../config/route';
import "../../../css/navbar/NavbarCart.css"
import { getIsLoggedIn } from '../../../redux/slice/AuthSlice';

const NavbarCart = () => {
  const iconContextProviderValue = { 
    color: "#bf2957", 
    className: "icon-context" 
  };

  let cartItemsDataLength = 0;

  const isLoggedIn = useSelector(getIsLoggedIn)
  const cartItemsData = useSelector(getCartItems)
  if(cartItemsData) {
    cartItemsDataLength = cartItemsData.length
  }

  // const isCartOpen = useSelector(selectIsCartOpen)

  // const navigateToCart = () => {
  //   router.navigate("/cart");
  // }

  // const [open, setOpen] = useState(false);
  // const [scroll, setScroll] = useState('paper');
  const dispatch = useDispatch();
  
    const handleClickOpen = () => {
      if(isLoggedIn) {
        dispatch(setIsCartOpen(true));
      } else {
        router.navigate("/signin");
        alert("Please login to view cart");
      }
      // setScroll(scrollType);
    };
  
    // const handleClose = () => {
    //   dispatch(setIsCartOpen(false));
    // };
  
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
    <div className='NavbarCart-container' >
      <IconContext.Provider value={iconContextProviderValue}>
          <FaShoppingCart />
      </IconContext.Provider>
      &nbsp;&nbsp;&nbsp;
      <span onClick={() => handleClickOpen()}>{cartItemsDataLength} items</span>
      <Cart />
    </div>
  )
}

export default NavbarCart
