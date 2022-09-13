import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <h1>Navbar</h1>
      <Link to='/PageOne'>PageOne</Link>
      <Link to='/PageTwo'>PageTwo</Link>
    </nav>
  )
}

export default NavBar
