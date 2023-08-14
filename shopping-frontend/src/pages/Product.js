import React from 'react'
import ProductCard from '../components/molecule/ProductCard'
import SidePanel from '../components/molecule/SidePanel'
import { useLocation } from 'react-router-dom'
import "../css/product/Product.css"

const Product = () => {
    const location = useLocation();
    console.log(location);
    const categoryName = new URLSearchParams(location.search).get('category');

  return (
    <div className='Product-container'>
        <SidePanel />
        
        <div className='Product-panel'>
            <ProductCard category={categoryName}/>
        </div>
    </div>
  )
  
}

export default Product
