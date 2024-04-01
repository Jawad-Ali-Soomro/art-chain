const express = require('express')
const user_route = express.Router()
const {create_account } = require('../controllers/user.controller')

user_route.post('/create/user' , create_account)

module.exports = user_route