import React ,{useState}from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const {isMobile,setIsMobile}=useState(false);
  return (
    <nav className='navbar'>
        <img src='https://t4.ftcdn.net/jpg/03/74/26/81/240_F_374268161_12es1yLijB3gwmYYVChz3cDtMiPy9Gh0.jpg' alt='text' className='image'/>
        <h3 className='logo'>TOYFINITY</h3>

        <ul className={isMobile ? 'nav-links-mob' :'nav-links'}>
            <Link to="/" className='home'>
                <li>
                    Home
                </li>
            </Link>
            <Link to="/Menu" className='menu'>
                <li>
                    Toys
                </li>
            </Link>
            <Link to="/About" className='about'>
                <li>
                    About
                </li>
            </Link>
            <Link to="/Contact" className='contact'>
                <li>
                    Contact
                </li>
            </Link>
            {/* <Link to="/Signup" className='signup'>
                <li>
                    Signup
                </li>
            </Link> */}
            <Link to="/Login" className='login'>
                <li>Login</li></Link>
            <Link to="/Cart" className='cart'>
                <li>🛒</li></Link>
        </ul>
        <button className='mob-menu-icon' onClick={()=> setIsMobile(!isMobile)}>
            {isMobile ? <h1>x</h1> :<h1>=</h1>}
        </button>
    </nav>
  )
}
export default Navbar;