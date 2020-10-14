import React, { useEffect, useState } from 'react'
import { sendOrder, getOrders } from '../../api/ordersAPI'
import Orders from './Orders'
const Container = (props) => {

  const [orders, setOrders] = useState(null)

  const getData = async() => {
    try {
      const orders = await getOrders()
      setOrders(orders)
      
    } catch (e) {
      console.log('error', e)
    }
  }

  useEffect(() => {getData()})
  
  return <Orders orders={orders}/>
}

export default Container