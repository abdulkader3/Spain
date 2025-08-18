import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar.jsx'

const LayOut = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default LayOut
