import React, { useEffect, useState } from 'react'
import Bookings from './index'

import {getBookings, createBooking} from '../../api/bookingAPI'

const Container = (props) => {

  const [bookings, setBookings] = useState(null)
  const getData = async() => {
    try{
      const res = await getBookings()
      setBookings(res.data)
    } catch(e) {
      console.log(e)
    }
  }

  useEffect( () => {
    getData()
  }, [])

  return <div>
    {/* <button onClick={createBooking}>Create</button> */}
    <Bookings data={bookings}/>
  </div>
}

export default Container