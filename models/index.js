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
        timeSlots: {
            start: String,
            end: String
        },
        image: {
            data: Buffer,
            contentType: String
        }
    })
)

export const Voucher = model('Voucher',
    new Schema({
        name: String,
        description: String,
        // image: {
        //     data: Buffer,
        //     contentType: String
        // },
        price: String,
        variant: String,
        quantity: Number
    })
)

export const Order = model('Order',
    new Schema({
        name: String,
        description: String,
        price: String,
        description: String,
        quantity: Number,
        variant: String
        // buyer: {
        //     firstName: String,
        //     lastName: String,
        //     email: String
        // }
    })
)

export const Booking = model('Booking',
    new Schema({
        name: String,
        description: String,
        price: String,
        rooms: String,
        // buyer: {
        //     firstName: String,
        //     lastName: String,
        //     email: String
        // }
    })
)