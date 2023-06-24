require('dotenv').config()

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const {handleRegister} = require('./containers/register')
const {handleSignIn} = require('./containers/signin')
const {shortenUrl} = require('./containers/url')
const {handleSearch} = require('./containers/search')
const mongoose = require('mongoose');
const Registers = require('./models/Registers.models')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Database 

//username - amratansh12
//password - z2CKQBLTZcTGYYKi
// const mongodb = "mongodb://127.0.0.1:27017/users"
const username = 'amratansh12'
const password = process.env.PASSWORD
const clusterName = process.env.CLUSTERNAME
const mongodb = `mongodb+srv://${username}:${password}@${clusterName}.64waou1.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongodb)
.then(console.log('database connected'))
.catch(error=> console.log(error.message))

//Api
app.get('/', (req, res)=>{
    res.send('<h2>Server running on port 3001</h2>')
})

app.post('/signin', (req,res) => handleSignIn(req, res, bcrypt, Registers, jwt))

app.post('/register', (req, res) => handleRegister(req, res, bcrypt, Registers, jwt))

app.post('/url', (req,res)=>shortenUrl(req,res, Registers))

app.post('/search', (req,res)=>handleSearch(req,res,Registers))

module.exports = app;






