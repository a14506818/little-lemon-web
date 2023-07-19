import React from 'react'
import Img from '../assets/restauranfood.jpg';

const navList = [
  'Home',
  'About',
  'Menu',
  'Reservations',
  'Order Online',
  'Login'
];

const Footer = () => {
  return (
    <footer>
      <img src={Img} alt='restauranfood' width='162px' height='279px'/>
			<div>
				<h3>Doormat Navigations</h3>
				<ul>
					{navList.map(item=>{return <li key={item}><a>{item}</a></li>})}
				</ul>
			</div>
			<div>
				<h3>Contact</h3>
				<ul>
					<li key='Adress'><a>Adress</a></li>
					<li key='Phone Number'><a>Phone Number</a></li>
					<li key='Email'><a>Email</a></li>
				</ul>
			</div>
			<div>
				<h3>Social Media Links</h3>
				<ul>
					<li key='Adress'><a>Adress</a></li>
					<li key='Phone Number'><a>Phone Number</a></li>
					<li key='Email'><a>Email</a></li>
				</ul>
			</div>
    </footer>
  )
}

export default Footer