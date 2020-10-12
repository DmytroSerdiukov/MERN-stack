import React, {useHistory} from 'react'


const Order = ({id, price, rooms, buyer}, ...props) => {
  const showId = (id) => console.log(id)
  return (
  <div style={{border: "1px solid black"}} onClick={ () => showId(id)}>
    <div>
      <span>id: {id}</span>
    </div>
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
)}

const Orders = ({orders}) => {
  return <div>
    <div>
      {orders === null ? "Заказов нет":
      orders.map((el, i) => (
        <Order  
          key = {i}
          id = {el._id || null}
          price = {el.price}
          rooms = {el.rooms}
          buyer = {el.buyer}
        />))}
    </div>
  </div>
}

export default Orders