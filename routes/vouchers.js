import {Router} from 'express'
import { Voucher } from '../models'

const router = Router()

router.get('/items', async(req, res) => {
  try{
    const vouchers = await Voucher.find({})
    res.status(200).json({data: vouchers})
  } catch(e) {
    console.log(e)
  }
})

router.post('/create', 
  async(req, res) => {
    try {
      console.log('voucher')
      const {name, description, price,
        variant, quantity} = req.body
      const voucher = new Voucher({
        name: name,
        description: description,
        price: price,
        variant: variant,
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
