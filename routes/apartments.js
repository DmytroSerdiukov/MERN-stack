import {Router} from 'express'
import {Apartment} from '../models'
import { Types } from 'mongoose'
const router = Router()

router.get('/items', async(req, res) => {
    const apartments = await Apartment.find({})
    res.status(200).json({data: apartments})
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