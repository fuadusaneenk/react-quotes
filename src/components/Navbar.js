import React from 'react'
import "./navbar.css"
import { useNavigate,Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()



  return (
    
    <div className='nav'>
      <Link to='/'>
    <a href="#">Home</a>
    </Link>
    <Link to='/bookmark'>
    <a href="#">Bookmarks</a>
    </Link>
    </div>
  )
}

export default Navbar;