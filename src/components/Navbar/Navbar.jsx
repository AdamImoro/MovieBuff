import React, { useState } from 'react'
import './Navbar.css'
import Fire from '../../assets/fire.png'
import Star from '../../assets/glowing-star.png'
import party from '../../assets/partying-face.png'
import DarkMode from '../DarkMode/DarkMode'
import {  NavLink } from 'react-router-dom'

function Navbar() {
  const [showMenu , setShowMenu] =useState(false)
  const toggleMenu =() =>{
    setShowMenu(!showMenu)
  }
  return (
    <nav className="navbar">
            <h1>MovieBuff</h1>
        <div className={showMenu?"navbar_links activity":"navbar_links"}>
          <DarkMode />
            <NavLink to="/">Popular<img src={Fire} alt="image" className='navbar_emoji' /></NavLink>
             <NavLink to="/top_rated">Top rated<img src={Star} alt="image" className='navbar_emoji' /></NavLink>
            <NavLink to="/upcoming">Upcoming<img src={party} alt="image" className='navbar_emoji' /></NavLink>
        </div>
        <div className="burger" onClick={()=>toggleMenu()}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
    </nav>
  )
}

export default Navbar