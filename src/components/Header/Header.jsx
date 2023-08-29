import React from 'react'
import './header.css'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <div className='header-container'>

      <div className="header-inner">
        <div className="logo">

        </div>

        <div className="navbar">
          <Navbar/>
        </div>

        <div className="user-section">

        </div>
      </div>
      
    </div>
  )
}

export default Header
