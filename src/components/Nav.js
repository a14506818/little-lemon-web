import React from 'react'
import Logo from '../assets/Logo.svg';
import './Nav.css';

const navList = [
  'Home',
  'About',
  'Menu',
  'Reservations',
  'Order Online',
  'Login'
];

const Nav = () => {
  return (
    <nav>
        <img src={Logo} alt="Logo SVG"/>
        <ul>
        {navList.map(item=>{return <li key={item}><a href=''>{item}</a></li>})}
        </ul>
    </nav>
  )
}

export default Nav