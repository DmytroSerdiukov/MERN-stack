import axios from 'axios'

export const getBookings = async() => {
  const res = await axios.get('http://localhost:5000/bookings/items')
  return res
}

export const createBooking = async() => {
  await axios.post('http://localhost:5000/bookings/create', {
    price: "200$",
    rooms: "30",
    buyer: {
        firstName: "Dan",
        lastName: "Abramov"
    }
  })}