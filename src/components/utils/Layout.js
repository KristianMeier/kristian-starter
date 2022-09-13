import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
