import React from 'react'
import heroImg from '../assets/restaurant.jpg';
import './Main.css';

const Main = () => {
  return (
    <main>
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <button>Reserve a Table</button>
        </div>
        <img src={heroImg} alt='hero image' width='300px'></img>
    </main>
  )
}

export default Main