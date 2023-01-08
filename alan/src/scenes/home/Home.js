import React from 'react'
import { Slider } from '../../Components/Slider'
import FeaturedProducts from '../../Components/Featured Products/FeaturedProducts'
import Banner from '../../Components/Banners/Banner'
import TrendingProducts from '../../Components/Trending Products/TrendingProducts'

export default function Home() {
  return (
    <div style={{height : "auto",maxWidth:"1920px",display:"grid",overflow:"hidden",zIndex : 12}}>
      <Slider />
      <FeaturedProducts type="featured"/>
      <Banner/>
      <TrendingProducts type="trending"/>
    </div>
  )
}
