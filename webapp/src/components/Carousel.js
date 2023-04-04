import React from 'react'
import ImageSlider from './ImageSlider'
export const Carousel = () => {
    

    const styleSlider = {
        width: "100%",
        height: "400px",
        margin: "0 auto",
    }
  return (
    <div style={styleSlider}>
        <ImageSlider />
    </div>
  )
}
