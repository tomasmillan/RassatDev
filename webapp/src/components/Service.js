import React from 'react'
import { service } from '../utils/service'
import '../styles/services.css'

const Service = () => {

  return (
    <div className='serviceContainer'>
        {service.map(service => (
            <div className='serviceCard'>
                <div className='cardTop'>

                    <img src={service.img} className='sImg' alt={service.category} />
                </div>
            </div>
        ))}
    </div>
  )
}

export default Service