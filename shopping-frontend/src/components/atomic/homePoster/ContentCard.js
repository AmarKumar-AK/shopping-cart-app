import React from 'react'
// import "../../../css/ContentCard.css"
import { useNavigate } from 'react-router-dom'
import "../../../css/home/ContentCard.css"

const ContentCard = ({heading, description, buttonText, buttonLink}) => {
  const navigate = useNavigate();

  const navigateToProductByCategory = (category) => {
    navigate(`/products?category=${category}`)
  }

  return (
    <div className='ContentCard-container'>
        <h3 className='ContentCard-heading'>{heading}</h3>
        <p className='ContentCard-description'>{description}</p>
        <button className='ContentCard-button' onClick={() => navigateToProductByCategory(buttonLink)}>
          {buttonText}
        </button>
    </div>
  )
}

export default ContentCard
