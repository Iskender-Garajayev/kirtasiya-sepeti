import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      
      <div className='navbar-container'>
        <ul className='navbar-inner' >
          <li>
            <Link to='/' >
              Home
            </Link>
          </li>
          <li>
            <Link to='/menu' >
              Menu
            </Link>
          </li>

          <li>
            <Link to='/contacts' >
              Contacts
            </Link>
          </li>

          <li>
            <Link to='/about' >
              About Us
            </Link>
          </li>

          <li>
            <Link to='/contacts' >
              Contacts
            </Link>
          </li>
          
        </ul>
      </div>

    </>
  )
}

export default Navbar
