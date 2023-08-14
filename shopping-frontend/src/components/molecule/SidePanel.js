import React from 'react'
import { useSelector } from "react-redux"
import { getCategories } from '../../redux/slice/CategoriesSlice'
import { useNavigate } from 'react-router-dom'

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
    <div className='side-panel'>
      {sortedCategories && sortedCategories.map((category) => {
        if(category.order === -1) {
          return <></>
        } else {
          return (
            <div className='category-name' onClick={() => navigateToProductByCategory(category.key)}>
              {category.name}
            </div>
          )
        }
      })}
    </div>
  )
}

export default SidePanel
