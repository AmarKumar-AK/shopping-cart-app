import React from 'react'
import "../css/Product.css"
import ProductCard from '../components/molecule/ProductCard'
import SidePanel from '../components/molecule/SidePanel'
import { useLocation } from 'react-router-dom'

const Product = () => {
    const location = useLocation();
    console.log(location);
    const categoryName = new URLSearchParams(location.search).get('category');

  return (
    <div className='product-container'>
        <SidePanel />
        
        <div className='product-panel'>
            <ProductCard category={categoryName}/>
        </div>
    </div>
  )
  
}

export default Product
