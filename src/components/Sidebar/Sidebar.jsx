import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
     <ul>
      <li>
        <Link to='/'>
          Home
        </Link>
      </li>
      <li>
        <Link to='/menu'>
          Menu
        </Link>
      </li>
      <li>
        <Link to='/galery'>
          Galery
        </Link>
      </li>
      <li>
        <Link to='/about'>
        About Us
        </Link>
      </li>
      <li>
        <Link to='/contacts'>
          Contacts
        </Link>
      </li>
     </ul>
    </div>
  )
}

export default Sidebar
