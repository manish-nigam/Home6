import React from 'react'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import './Style.css'

const WarpCom = () => {
  return (
    <div className='wrap'>
        <Nav/>
        <Main/>
        <Footer/>        
    </div>
  )
}

export default WarpCom