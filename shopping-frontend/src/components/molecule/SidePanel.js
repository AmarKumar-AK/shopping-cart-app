import React from 'react'
import { useSelector } from "react-redux"
import { getCategories } from '../../redux/slice/CategoriesSlice'
import { useNavigate } from 'react-router-dom'
import "../../css/product/SidePanel.css"

const SidePanel = () => {
    const categoriesData = useSelector(getCategories);
    let sortedCategories = categoriesData
    if(categoriesData) {
      sortedCategories = categoriesData.slice().sort((a, b) => a.order - b.order);
    }
    const navigate = useNavigate();

    const navigateToProductByCategory = (category) => {
        navigate(`/products?category=${category}`)
    }

  return (
    <div className='SidePanel-container'>
      {sortedCategories && sortedCategories.map((category) => {
        if(category.order === -1) {
          return <></>
        } else {
          return (
            <div className='SidePanel-category-name' onClick={() => navigateToProductByCategory(category.key)}>
              {category.name}
            </div>
          )
        }
      })}
    </div>
  )
}

export default SidePanel
