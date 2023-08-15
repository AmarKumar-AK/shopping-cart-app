import React, { useEffect } from 'react'
import HomePoster from '../components/molecule/HomePoster'
import { requestCategories } from '../redux/slice/CategoriesSlice'
import { requestOffer } from '../redux/slice/OfferSlice'
import { useDispatch } from 'react-redux'
import { requestProducts } from '../redux/slice/ProductSlice'
import { requestUsers } from '../redux/slice/UserSlice'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestCategories())
    dispatch(requestOffer())
    dispatch(requestProducts())
    dispatch(requestUsers())
  }, [dispatch])
  
  return (
    <>
      <HomePoster />
    </>
  )
}

export default Home
