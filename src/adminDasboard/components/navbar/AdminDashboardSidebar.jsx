import React from 'react'
import './adminDashboardSidebar.scss'
import { Link } from 'react-router-dom'

const AdminDashboardSidebar = () => {
  return (
    <div className='admin-dashboard-navbar-container'>

<ul>
<li>
<Link to="/admin/user">
        user
      </Link>
</li>
  <li>
  <Link to="/admin/sparis">
        sparis
      </Link>
  </li>
</ul>
 

      
     
      
    </div>
  )
}

export default AdminDashboardSidebar
