import {Router} from 'express'
import { Order } from '../models'
import {Types} from 'mongoose'

const router = Router()

router.get('/items', async(req, res) => {
    try{
        const orders = await Order.find({})
        res.status(200).json({data: orders})
    } catch(e) {
        console.log(e)
    }
  
})

router.post('/create',
  async(req, res) => {
    const {price, rooms, buyer} = req.body
    const order = new Order({
        _id: new Types.ObjectId(),
        price: price,
        rooms: rooms,
        buyer: {
            firstName: buyer.firstName,
            lastName: buyer.lastName
        }
    })
    await order.save( (err, result) => {
        if (err) console.log(err)
        else console.log(result)
    })
    res.status(201).json({message: "Order created"})
  })

export default router
