import React from 'react'
// import "../../../css/Navbar.css"
import { FaShoppingCart } from 'react-icons/fa';

import { IconContext } from "react-icons";
// import Cart from '../../../pages/Cart';
import Cart from '../../molecule/Cart';
import { useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../../redux/slice/CartSlice';
// import router from '../../../config/route';
import "../../../css/navbar/NavbarCart.css"

const NavbarCart = () => {
  const iconContextProviderValue = { 
    color: "#bf2957", 
    className: "icon-context" 
  };

  // const isCartOpen = useSelector(selectIsCartOpen)

  // const navigateToCart = () => {
  //   router.navigate("/cart");
  // }

  // const [open, setOpen] = useState(false);
  // const [scroll, setScroll] = useState('paper');
  const dispatch = useDispatch();
  
    const handleClickOpen = (scrollType) => {
      console.log("inside handle open")
      dispatch(setIsCartOpen(true));
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
      <span onClick={() => handleClickOpen('paper')}>0 items</span>
      <Cart />
    </div>
  )
}

export default NavbarCart
