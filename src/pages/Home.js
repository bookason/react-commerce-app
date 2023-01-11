import React from 'react'
import Featuredproducts from '../components/Featuredproducts'
import Slider from '../components/Slider'

const Home = () => {

  return (
    <>
        <Slider/>
        <Featuredproducts type ="latest collection"/>
        {/* <Featuredproducts type ="best sellers"/> */}
    </>
  )
}

export default Home