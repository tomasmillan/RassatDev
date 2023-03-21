import React from 'react'
import './whatsapp.css'

const Whatsapp = () => {
  return (
    <div className='floatBtn'>
      <a href="https://api.whatsapp.com/send?phone=541170458176" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/color/512/whatsapp--v1.png" alt="Contactar por whatsapp"  className='wIcon' />
      </a>
    </div>
  )
}

export default Whatsapp