import React from 'react'
import { service } from '../utils/service'
import '../styles/services.css'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div className='serviceContainer'>
        {service.map(service => (
            <div className='serviceCard'>
                <Link className='cardTop' id={service.id} to={`/services/${service.category}`}>
                    <img src={service.img} className='sImg' alt={service.category} />
                </Link>
            </div>
        ))}
    </div>
  )
}

export default Service