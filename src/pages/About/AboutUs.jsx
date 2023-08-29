import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'


const AboutUs = () => {
  return (
    <>
    <Header />

    <div className='main-container'>
      <Sidebar />
      <div className='main'>
        About Us
      </div>
    </div>

    <Footer />
  </>
  )
}

export default AboutUs
