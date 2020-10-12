require("@babel/register");
import express from 'express'
import config from 'config'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import {ApolloServer} from 'apollo-server-express'
import ejs from 'ejs'
import path from 'path'
import multer from 'multer'

import auth from './routes/auth'
import apartments from './routes/apartments'
import vouchers from './routes/vouchers'
import orders from './routes/orders'
import bookings from './routes/bookings'
// import upload from './routes/upload'

import typeDefs from './typeDefs'
import resolvers from './resolvers'

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
}).single('img');

const app = express()
const PORT = config.get('port') || 3000

app.use(multer({
  dest: './uploads'
}
).single('img'));

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '../public'));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/auth', auth)
app.use('/aparts', apartments)
app.use('/vouchers', vouchers)
app.use('/orders', orders)
app.use('/bookings', bookings)
// app.use('/', upload)

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

const start = async() => {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    }).then(()=> console.log("connect to DB"));
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`)
    })
  } catch (e) {
    console.log("Error: ", e.message)
  }
}
start()
