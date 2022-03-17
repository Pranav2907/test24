import React, { useState } from 'react';
import './navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='navbar'>
      <img src="../../assets/logos/robotomic.png" style={{height:"70px"}} alt="" />

      <ul className="list">
        <li className="listItem"><a href="#home">HOME</a></li>
        <li className="listItem"><a href="#about">ABOUT</a></li>
        <li className="listItem"><a href="#services">SERVICES</a></li>
        <li className="listItem"><a href="#clients">CLIENTS</a></li>
        <li className="listItem"><a href="#contact">CONTACT</a></li>
      </ul>

      <div className='hamburger' onClick={()=>setOpen(!open)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <ul onClick={()=> setOpen(false)} className="menu" style={{right: open ? "0px" : "-50vw"}} >
        <li className="menuItem"><a href="#home">HOME</a></li>
        <li className="menuItem"><a href="#about">ABOUT</a></li>
        <li className="menuItem"><a href="#services">SERVICES</a></li>
        <li className="menuItem"><a href="#clients">CLIENTS</a></li>
        <li className="menuItem"><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  )
}

export default Navbar