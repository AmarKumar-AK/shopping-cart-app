import React from 'react'

const CarouselItem = ({imageUrl, altImage}) => {
  const imagePath = `${process.env.PUBLIC_URL}${imageUrl}`;

  return (
    <div className='carousel-item'>
      <img src={imagePath} alt={altImage} />
    </div>
  )
}

export default CarouselItem
