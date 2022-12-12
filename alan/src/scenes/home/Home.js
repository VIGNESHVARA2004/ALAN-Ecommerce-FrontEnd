import React from 'react'
import { Slider } from '../../Components/Slider'
import { featuredProducts } from '../../Components/Featured Products/featuredProducts'

export default function Home() {
  return (
    <div>
      <Slider />
      <featuredProducts />
    </div>
  )
}
