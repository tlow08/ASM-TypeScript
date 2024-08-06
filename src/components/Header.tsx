// import React from 'react'

import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
     {/* <ul className="bg-gradient-to-r to-[#B5DCB0] from-[#4A7C59] h-64 w-full"> */}
     <ul className="flex gap-8 text-2xl">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/home-page">Home page</Link></li>
        <li><Link to="/shop-page">Shop page</Link></li>
        <li><Link to="/detail-page">Detail page</Link></li>
    </ul> 
    </>
  )
}

export default Header
