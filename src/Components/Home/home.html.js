import React from 'react'
import Carousel from '../Carousel/carousel.html'
import Dashboard from '../Dashboard/dashboard.html'

export default function Home () {
  return (
    <div>
      <Carousel/>
      <hr style={{height:"3px" , borderWidth:"0" , backgroundColor: "black"}}/>
      <Dashboard/>
    </div>
  )
}
