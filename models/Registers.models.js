const mongoose = require('mongoose')
const {isEmail} = require('validator')

const UrlSchema = new mongoose.Schema({
    url:{
        type: String
    },
    shortUrl:{
        type: String
    }
})

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        validate: [isEmail, 'Please enter a valid email'],
        lowercase: true
    },
    password:{
        type: String,
        required: [true, 'Please enter a password'],
        minLength:[8, 'Password should be atleast 8 characters long']
    },
    urls:{
        type:[UrlSchema]
    }
})

const Registers = mongoose.model('Registers', registerSchema)

module.exports = Registers