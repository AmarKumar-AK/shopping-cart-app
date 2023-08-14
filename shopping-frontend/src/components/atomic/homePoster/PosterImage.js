import React from 'react'

const PosterImage = ({imageUrl}) => {
  const imagePath = `${process.env.PUBLIC_URL}${imageUrl}`;

  return (
      <img src={imagePath} alt="poster" />
  )
}

export default PosterImage
