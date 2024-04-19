const express = require('express')
const { create_art, get_all_arts } = require('../controllers/art.controller')
const art_route = express.Router()

art_route.post("/create/art" ,create_art)
art_route.get('/get/arts' , get_all_arts)

module.exports = art_route