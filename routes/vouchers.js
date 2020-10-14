import {Router} from 'express'
import { Voucher, Order } from '../models'

const router = Router()

router.get('/items', async(req, res) => {
  try{
    const vouchers = await Voucher.find({})
    console.log(vouchers)
    res.status(200).json({data: vouchers})
  } catch(e) {
    console.log(e)
  }
})

router.post('/buy',
  async(req, res) => {
    try{
      // console.log(req.body)
      const {_id} = req.body
      const voucher = await Voucher.findById(_id)
      console.log("--------------------------------------")
      console.log(voucher)
      voucher.quantity -=1

      const order = await Order.findById(_id)
      if (order) {
        order.quantity = quantity++ || 1
        await order.save()
      }
      else {
        const order = new Order({
          name: voucher.name,
          description: voucher.description,
          price: voucher.price,
          variant: voucher.variant,
          quantity: 1
        })
        await order.save()
      }
      if (voucher.quantity <= 0) {
        voucher.deleteOne({_id: _id})
        return
      }
      console.log('voucher' ,voucher)
      await voucher.save( (err, res) => {
        if (err) console.log(err)
        else console.log(res)
      })
      res.status(201).json('voucher bought')
    } catch (e) {
      console.log(e)
    }
  })

router.post('/create', 
  async(req, res) => {
    try {
      console.log('voucher')
      const {name, description, price,
        variant, quantity} = req.body
      let type = ""
      switch(variant) {
        case 10:
          type = 'Cafe'
          break
        case 20:
          type = 'Restaurant'
          break
        case 30:
          type = 'Canteen'
          break
        case 40:
          type = 'Bar'
          break
        case 50: 
          type = 'Diner'
          break
        default:
          return type
      }
      const voucher = new Voucher({
        name: name,
        description: description,
        price: price,
        variant: type,
        quantity: quantity
      })
      await voucher.save( (err, res) => {
        if (err) console.log(err)
        else console.log(res)
      })
      res.status(201).json({data: "Voucher created"})
    } catch (e) {
      console.log(e)
      res.status(500).json("Что то пошло не так")
    }
  }
)

export default router
