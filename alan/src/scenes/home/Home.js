import React from 'react'
import { Slider } from '../../Components/Slider'
import FeaturedProducts from '../../Components/Featured Products/FeaturedProducts'
import Banner from '../../Components/Banners/Banner'

export default function Home() {
  return (
    <div style={{height : "auto",width:"1920px",display:"grid",overflow:"hidden",zIndex : 12}}>
      <Slider />
      <FeaturedProducts type="Featured"/>
      <Banner/>
      <FeaturedProducts type="Trending"/>
    </div>
  )
}
