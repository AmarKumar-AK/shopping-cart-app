import React, { useEffect} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';


import ProductItem from '../atomic/product/ProductItem';
import { getProducts, requestProducts } from '../../redux/slice/ProductSlice';
import { getCategories, requestCategories  } from '../../redux/slice/CategoriesSlice';

const ProductCard = ({category}) => {
    const productsData = useSelector(getProducts);
    const categoryData = useSelector(getCategories);
    // const cartItemsData = useSelector();

    let dataToRender = productsData;

    if(category) {
      const filteredCategory = categoryData.filter((cat) => {
          return cat.key === category
      });

      const productDataByCategory = productsData.filter((product) => {
          return product.category === filteredCategory[0].id
      });

      dataToRender = productDataByCategory;
    }

    // for(let i = 0; i < cartItemsData.length; i++) {
    //   const index = dataToRender.findIndex(item => item.sku === cartItemsData[i].sku);
    //   if(index !== -1) {
    //     dataToRender[index].isAdded = true
    //   }
    // }

  return (
    <Box sx={{ flexGrow: 1, margin:2}}>
      <Grid container rowSpacing={{ sm: 1, md: 1 }} columnSpacing={{ sm: 1, md: 1 }}>
        {dataToRender.map((product) => {
          return (
            <ProductItem 
              heading={product.name}
              imageUrl={product.imageURL} 
              description={product.description} 
              price={product.price} 
              itemKey={product.sku}
            />
          )
        })}
      </Grid>
    </Box>
  )
}

export default ProductCard
