import React from 'react'
import { clients } from '../utils/clients'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/clients.css'


const Clients = () => {
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 520,
          settings: {
            slidesToShow: 3
          }
        }]
      };
  return (
    <div className='clientsContainer'>
        <div className='cContainer'>
            <h1 className='ctitle'>clientes</h1>
        </div>
        <Slider {...settings}>
            {clients.map(client => (
                    <img src={client.img} alt={client.id} key={client.id} className='cImage' />
            ))}
        </Slider>
    </div>
  )
}

export default Clients