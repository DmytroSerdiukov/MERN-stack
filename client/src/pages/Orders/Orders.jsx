import React, {useHistory} from 'react'

const Order = ({id, name, price, quantity, variant}, ...props) => {
  const showId = (id) => console.log(id)
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

const Orders = ({orders}) => {
  return <div>
    <div>
      {orders === null ? "Заказов нет":
      orders.map((el, i) => (
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