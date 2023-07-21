import React from 'react'
import heroImg from '../assets/restaurant.jpg';
import './Main.css';
import saladImg from '../assets/greek salad.jpg'
import bruchettaImg from '../assets/bruchetta.svg'
import lemonImg from '../assets/lemon dessert.jpg'

const Main = () => {
  return (
    <main>
      <div className="heroBG">
        <div className="hero">
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <button>Reserve a Table</button>
          </div>
          <img src={heroImg} alt='hero image' width='300px'></img>
        </div>
      </div>
      <div className="specialsBG">
        <div className="specials">
          <div className="title">
            <h2>Specials</h2>
            <button>Online Menu</button>
          </div>
          <div className="cards">
            <div className="card">
              <img src={saladImg} alt='salad image' width='100%'/>
              <div className='cardTitle'>
                <h3>Greek salad</h3>
                <h4>$12.99</h4>
              </div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
              <h4>Order a delivery</h4>
            </div>
            <div className="card">
              <img src={bruchettaImg} alt='salad image' width='100%'/>
              <div className='cardTitle'>
                <h3>Bruchetta</h3>
                <h4>$5.99</h4>
              </div>
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
              <h4>Order a delivery</h4>
            </div>
            <div className="card">
              <img src={lemonImg} alt='salad image' width='100%'/>
              <div className='cardTitle'>
                <h3>Lemon dessert</h3>
                <h4>$5.00</h4>
              </div>
              <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <h4>Order a delivery</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main