import {Router} from 'express'
import {Seller} from '../models'
import jsonwebtoken from 'jsonwebtoken'
import config from 'config'
import bcrypt from 'bcrypt'

const router = Router()

router.post('/register', 
  async (req, res) => {
  try {
    const {firstname, secondname, email, password} = req.body
    const user = Seller.findOne({email})
    if (user) {
      console.log(user)
      return res.status(400).json({message: 'Такой пользователь уже существует'})
    }
    const seller = new Seller({
      firstName: firstname,
      lastName: secondname,
      email: email,
      password: password
    })
    seller.save((err, result) => {
      if (err) console.log(err)
      else console.log(result)
    })
    res.status(201).json({data: "Пользователь зарегистрирован", status: true})
  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так'})
  }  
})

router.get('/sellers',
  async (req, res) => {
    try {
      const sellers = await Seller.find({})
      const data = JSON.stringify(sellers)
      res.status(200).json({sellers: data})
    } catch (e) {
      console.log(e)
    }
  })

router.get('/sellers/delete',
async (req, res) => {
  try {
    await Seller.deleteMany({})
    res.status(200).json({message: "Пользователи удалены"})
  } catch (e) {
    console.log(e)
  }
})

router.post('/login',
  async (req, res) => {
  try {
    const {email, password} = req.body
    const user = await Seller.findOne({email})
    console.log(user)
    if (!user) {
      return res.status(400).json({message: 'Неверный email'})
    }
    console.log(password === user.password)
    const isMatch = password === user.password? true: false
    if (!isMatch) { 
      return res.status(400).json({message: 'Неверный пароль'})
    }
    // const token = jsonwebtoken.sign(
    //   { userId: user.id },
    //   config.get('jwtSecret'),
    //   {expiresIn: '1h'}
    // )
    // res.status(201).json({token, userId: user.id})
    res.status(201).json({message:"пользователь авторизован", status: true})

    } catch (e) {
      res.status(500).json({message: 'Что-то пошло не так'})
    }
})

export default router