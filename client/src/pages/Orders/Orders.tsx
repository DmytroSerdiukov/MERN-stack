import React from 'react'

interface Spreaded {
  id: string,
  name: string,
  price: string,
  quantity: number,
  variant: string,
}

type Order = {
  _id: any,
  name: string,
  price: string,
  quantity: number,
  variant: string
}

const Order = ({id, name, price, quantity, variant}: Spreaded) => {
  const showId = (id: string) => console.log(id)
  return (
  <div style={{border: "1px solid black"}} onClick={ () => showId(id)}>
    <div>
      <span>id: {id}</span>
    </div>
    <div>
      <span>name: {name}</span>
    </div>
    <div>
      <span>price: {price}</span>
    </div>
    <div>
      <span>quantity: {quantity}</span>
    </div>
  </div>
)}

const Orders = ({orders}: any) => {
  return <div>
    <div>
      {orders === null ? "Заказов нет":
      orders.map((el: Order, i: number) => (
        <Order  
          key = {i}
          id = {el._id || null}
          name = {el.name}
          price = {el.price}
          quantity = {el.quantity}
          variant = {el.variant}
        />))}
    </div>
  </div>
}

export default Orders