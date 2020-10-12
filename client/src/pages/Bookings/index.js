import React from 'react'

const Booking = ({price, rooms, buyer}, ...props) => {
  return <div>
    <div>
      <span>price: {price}</span>
    </div>
    <div>
      <span>rooms: {rooms}</span>
    </div>
    <div>
      <span>{buyer.firstName}</span>
      {' '}
      <span>{buyer.lastName}</span>
    </div>
  </div>
}

export default function Bookings({data}){
  return <div>
    {data === null? "Ничего не забронировано":
    data.map( (el, i) => (
    <Booking 
    key = {i}
    price = {el.price}
    rooms = {el.rooms}
    buyer = {el.buyer}
    />))}
    
  </div>
}