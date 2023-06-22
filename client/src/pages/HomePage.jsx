import React from 'react'
import Header from "../components/Layout/Header.jsx"
import Hero from "../components/HomePage/Hero.jsx"
import Categories from "../components/HomePage/Categories/Categories.jsx"
import BestDeals from "../components/HomePage/BestDeals/BestDeals.jsx"
import FeaturedProduct from "../components/HomePage/FeaturedProduct/FeaturedProduct.jsx"
import Events from "../components/Events/Events.jsx"
const HomePage = () => {
  return (
    <div>
   <Header activeHeading={1}/>
   <Hero />
   <Categories />
   <BestDeals />
   <Events />
   <FeaturedProduct />
   </div>
  )
}

export default HomePage