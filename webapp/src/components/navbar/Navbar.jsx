import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useRef } from 'react';

const Navbar = () => {
    const picUrl = 'http://rassat.com.ar/images/logo1.jpg';
    const navRef = useRef();
    const showNavbar = () => {
      navRef.current.classList.toggle("responsive");
    };
    const arg = 'https://cdn-icons-png.flaticon.com/128/206/206654.png'
    const uru = 'https://cdn-icons-png.flaticon.com/128/206/206764.png'

  return (
    <header>
      <Link to='/' className='logo'>
        <img src={picUrl} alt='logo' />
      </Link>
      <nav ref={navRef}>
        <ul className="navbarList">
          <li onClick={showNavbar}>
            <Link to="/">Inicio</Link>
          </li>
          <li onClick={showNavbar}>
            <Link to='/about'>Nosotros</Link>
          </li>
          <li onClick={showNavbar}>
            <Link to='/services'>Servicios</Link>
          </li>
          <li onClick={showNavbar}>
            <Link to='/contact'>Contacto</Link>
          </li>
        </ul>
        <button className="closeIcon" onClick={showNavbar}>
          <AiOutlineClose />
        </button>
      </nav>
      <div className='fono'>
        <img src={arg} alt='arg' /> 
        <span>+54 (011) 7045 8176</span>
        <img src={uru} alt='arg' /> 
        <span>+598 99931761</span>
      </div>
      <button className="menuIcon" onClick={showNavbar}>
          <FaBars />
        </button>
    </header>
  )
}

export default Navbar