import React from 'react'
import './adminDashboardSidebar.scss'
import { Link } from 'react-router-dom'

const AdminDashboardSidebar = () => {
  return (
    <div className='admin-dashboard-navbar-container'>
      <Link to="/admin/user">
        user
      </Link>
    </div>
  )
}

export default AdminDashboardSidebar
