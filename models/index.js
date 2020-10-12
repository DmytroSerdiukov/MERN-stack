import {Schema, model, Mongoose} from 'mongoose'
import {requiredString, requiredNumber, 
    unrequiredString, Image} from './fieldTypes'
import {Types} from 'mongoose'

export const Seller = model('Seller',
    new Schema({
        firstName: String,
        lastName: String,
        email: String,
        password: String
    })
)

export const Buyer = model('Buyer',
    new Schema({
        firstName: requiredString,
        lastName: requiredString,
        email: requiredString
    })
)

export const Apartment = model('Apartment',
    new Schema({
        name: String,
        description: String,
        price: String,
        rooms: String,
        //associated time slots:dsasdasdasd
        // image: Buffer, 
    })
)

export const Voucher = model('Voucher',
    new Schema({
        name: String,
        description: String,
        // image: Image,
        price: String,
        variant: String,
        quantity: String
    })
)

export const Order = model('Order',
    new Schema({
        price: String,
        rooms: String,
        buyer: {
            firstName: String,
            lastName: String
        }
    })
)

export const Booking = model('Booking',
    new Schema({
        price: String,
        rooms: String,
        buyer: {
            firstName: String,
            lastName: String
        }
    })
)