import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const ProductItem = ({heading, imageUrl, description, price}) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
    }));

    const imagePath = `${process.env.PUBLIC_URL}${imageUrl}`;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Item>
        <p className='product-heading'>{heading}</p>
        <img src={imagePath} alt="product" />
        
        <p className='product-description'>{description}</p>
        <button className='buy-button'>Buy Now @ {price}</button>
      </Item> 
    </Grid>
  )
}

export default ProductItem
