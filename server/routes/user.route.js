const express = require('express')
const user_route = express.Router()
const {create_account, login_user, get_profile, get_profiles } = require('../controllers/user.controller')

user_route.post('/create/user' , create_account)
user_route.get('/login/user' , login_user)
user_route.get('/get/user/profile' , get_profile)
user_route.get('/get/user/:id' , get_profiles)

module.exports = user_route