import {Router} from 'express'
import {Booking} from '../models/index'

const router = Router()

router.get('/items', 
async (req, res) => {
  try {
    const bookings = await Booking.find({})
    res.status(200).json({data: bookings})
  } catch (e) {
    console.log(e)
  }
})

router.get('items/:id',
  async(req, res) => {
    try {
      const {id} = req.params
      const booking = await Booking.findById(id)
      res.status(200).json({data: booking})
    } catch (e) {
      console.log(e)
    }
})

router.post('/create',
  async(req, res) => {
    try {
      const {price, rooms, buyer} = req.body
      const Booking = new Booking({
        price: price,
        rooms: rooms,
        buyer: {
          firstName: buyer.firstName,
          lastName: buyer.lastName
        }
      })
      await Booking.save( (err, result) => {
        if (err) return console.log(err)
        else return console.log(result)
      })
      res.send(201).json({message: "bookings created"})
    } catch(e) {
      console.log(e)
    }
  })
export default router