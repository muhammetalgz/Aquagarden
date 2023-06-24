import React from 'react'
import "../Style/Header.css"
import { Link } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'

function Header() {


   function menuFunc() {
      var element = document.getElementById("mobile-app");
      element.classList.toggle("mobile-app");
   }
   return (
      <div className='header text-center'>
         <div className='header-logo'>
            <Link to="/">
               <i><h1><span>Aqua</span> Garden</h1></i>
            </Link>
         </div>
         <ul className='header-link' id='header-link'>
            <li> <Link to="/" className='button'>Anasayfa</Link> </li>
            <li> <Link to="/About" className='button'>Hakkımızda</Link> </li>
            <li> <Link to="/Images" className='button'>Fotoğraflar</Link> </li>
            <li> <Link to="/Shop" className='button'>Market</Link> </li>
         </ul>
         <div className='mobile-app-menu'>
            <button onClick={menuFunc}><BiMenuAltRight /></button>
         </div>
         <div id='mobile-app' onClick={menuFunc}>

            <div className='mobile-menu-app'>
               <Link to="/" >Anasayfa</Link>
               <Link to="/About">Hakkımızda</Link>
               <Link to="/Images">Fotoğraflar</Link>
               <Link to="/Shop">Market</Link>
            </div>

         </div>
      </div>
   )
}

export default Header
