import React from 'react'
import "../../css/HomePoster.css"
import ContentCard from '../atomic/homePoster/ContentCard'
import PosterImage from '../atomic/homePoster/PosterImage'
import { useSelector } from "react-redux"
import { getCategories } from '../../redux/slice/CategoriesSlice'
import { getOffers } from '../../redux/slice/OfferSlice'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from '../atomic/homePoster/CarouselItem'

const HomePoster = () => {
  const categoriesData = useSelector(getCategories);
  let sortedCategories = categoriesData
  if(categoriesData) {
    sortedCategories = categoriesData.slice().sort((a, b) => a.order - b.order);
  }

  const offerData = useSelector(getOffers)
  let sortedOffers = offerData
  if(offerData) {
    sortedOffers = offerData.slice().sort((a, b) => a.order - b.order);
  }
  
  return (
    <div className='HomePoster-container'>
      
      {offerData && 
        <Carousel autoPlay showThumbs={false} className='carousel'>
          {sortedOffers && sortedOffers.map((offer) => {
            if(offer.isActive) {
              return (
                <CarouselItem imageUrl={offer.bannerImageUrl} altImage={offer.bannerImageAlt}/>
              )
            } else {
              return <></>
            }
          })}
        </Carousel>
      }

      {sortedCategories && sortedCategories.map((category) => {
        if(category.order === -1) {
          return <></>
        }

        if (category.order % 2 === 0) {
          return (
            <div className='poster'>
              <ContentCard heading={category.name} description={category.description} buttonText={`Explore ${category.key}`} buttonLink={category.key} />
              <PosterImage imageUrl={category.imageUrl} />
            </div>
          )
        } else {
          return (
            <div className='poster'>
              <PosterImage imageUrl={category.imageUrl}/>
              <ContentCard heading={category.name} description={category.description} buttonText={`Explore ${category.key}`} buttonLink={category.key} />
            </div>
          )
        }
      })}
      
    </div>
  )
}

export default HomePoster
