import React from 'react'
import { logos } from '../utils/partners'
import '../styles/partners.css'


const Partners = () => {
  return (
    <>
    <div className='pTitle'>
      <h1 className='pTitleH'>partners</h1>
    </div><div className='pContainer'>
        {logos.partners.map((logo) => (
          <img src={logo.img} key={logo.id} alt={logo.id} className='partners' />
        ))}
      </div>
      </>
  )
}

export default Partners