import React from 'react'
import './Booking.css'
import BookingForm from './BookingForm'

const Booking = () => {
  return (
    <div className='bookingBG'>
        <h2>Reservations</h2>
        <BookingForm/>
    </div>
  )
}

export default Booking