import React, { useEffect } from 'react'
import HomePoster from '../components/molecule/HomePoster'
import { requestCategories } from '../redux/slice/CategoriesSlice'
import { requestOffer } from '../redux/slice/OfferSlice'
import { useDispatch } from 'react-redux'
import { requestProducts } from '../redux/slice/ProductSlice'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestCategories())
    dispatch(requestOffer())
    dispatch(requestProducts())
  }, [dispatch])
  
  return (
    <>
      <div className='Home-container'>
        <HomePoster />
      </div>
    </>
  )
}

export default Home
