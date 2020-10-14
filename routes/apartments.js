import {Router} from 'express'
import {Apartment, Booking} from '../models'
import { Types } from 'mongoose'
const router = Router()

router.get('/items', async(req, res) => {
    const apartments = await Apartment.find({})
    res.status(200).json({data: apartments})
})

router.post('/book',
    async(req, res) => {
        try{
            const {_id} = req.body
            console.log(_id)
            const apart = await Apartment.findById(_id)
            console.log('apart',apart)
            const same = await Booking.findById(_id)
            if (same) res.status(400).json("Такой заказ уже есть")
            else {
                const booking = new Booking({
                    name: apart.name,
                    description: apart.description,
                    price: apart.price,
                    rooms: apart.rooms
                })
                await booking.save( (err, res) => {
                    if (err) console.log(err)
                    else console.log(res)
                })
            }
            res.status(201).json("Apart booked")
        } catch(e) {
            console.log(e)
        }
    })

router.put('/update',
    async (req, res) => {
        try{
            const apart = await Apartment.findById(req.body._id)
            await apart.update(req.body)
            await apart.save( (err, res) => {
            if (err) console.log(err)
            else console.log(res)
        })
            res.status(201).json("apart updated")
        } catch(e) {
            res.status(500).json('Something wrong')
        }
    })

router.post('/create', 
  async(req, res) => {
    try {
        const {name, description, price, rooms} = req.body
        const apart = new Apartment({
            name: name,
            description: description,
            price: price,
            rooms: rooms
        })
        await apart.save( (err, result) => {
            if (err) console.error(error)
            else console.log(result)
        })
        res.status(201).json({message: 'Apart created'})
    } catch(e) {
        res.status(500).json({message: "Something wrong"})
    }
})
export default router