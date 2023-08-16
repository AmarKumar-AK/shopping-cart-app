import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import "../../../css/product/ProductItem.css"
import { useDispatch, useSelector } from 'react-redux';
import { addCartItemToCart, getCartItems } from '../../../redux/slice/CartSlice';
import { getProducts } from '../../../redux/slice/ProductSlice';

const ProductItem = ({heading, imageUrl, description, price, itemKey}) => {
    const cartItemsData = useSelector(getCartItems);
    const productsData = useSelector(getProducts);
    const dispatch = useDispatch();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
    }));

    let cartItemAlreadyAdded = false;

    if(cartItemsData) {
      cartItemAlreadyAdded = cartItemsData.find(item => item.sku === itemKey) ? true : false;
    }

    

    // const [isButtonClicked, setIsButtonClicked] = useState(false);

    const addProductToCart = () => {
      const itemToAdd = productsData.find(item => item.sku === itemKey)
      if(itemToAdd) {
        dispatch(addCartItemToCart({
          "name": itemToAdd.name,
          "imageURL":itemToAdd.imageURL,  
          "description": itemToAdd.description,
          "price": itemToAdd.price,
          "quantity": 1,
          "totalItemPrice": itemToAdd.price,
          "category": itemToAdd.category,
          "sku": itemToAdd.sku, 
          "id": itemToAdd.id
        }))
      }
      // console.log("item to add : ", itemToAdd)
      
      // setIsButtonClicked(true)
      // console.log("add product to cart")
    }

    const imagePath = `${process.env.PUBLIC_URL}${imageUrl}`;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Item>
        <p className='ProductItem-heading'>{heading}</p>
        <div className='ProductItem-image'>
          <img src={imagePath} alt="product" />
        </div>
        
        <p className='ProductItem-description'>{description}</p>
        {cartItemAlreadyAdded ? (
          <div className='ProductItem-buy-container'>
            <span className='ProductItem-added-price'>Rs.{price}</span>
            <button className='ProductItem-added-button'><span>Added</span></button>
          </div>
        ) : (
          <button key={itemKey} className='ProductItem-buy-button' onClick={() => addProductToCart()}>Buy Now @ {price}</button>
        )}
        {/* <button key={key} className='ProductItem-buy-button' onClick={() => addProductToCart()}>Buy Now @ {price}</button> */}
      </Item> 
    </Grid>
  )
}

export default ProductItem
