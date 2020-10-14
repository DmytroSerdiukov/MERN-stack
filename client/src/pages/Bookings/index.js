import React from 'react'

const Booking = ({price, rooms, name, description}, ...props) => {
  return <div style={{border: "1px solid black", margin: "5px"}}>
    <div>
      <span>name: {name}</span>
    </div>
    <div>
      <span>price: {price}</span>
    </div>
    <div>
      <span>derscription: {description}</span>
    </div>
    <div>
      <span>rooms: {rooms}</span>
    </div>
  </div>
}

export default function Bookings({data}){
  return <div>
    {data === null? "Ничего не забронировано":
    data.data.map( (el, i) => (
    <Booking 
    key = {i}
    name = {el.name}
    price = {el.price}
    description = {el.description}
    rooms = {el.rooms}
    />))}
    
  </div>
}