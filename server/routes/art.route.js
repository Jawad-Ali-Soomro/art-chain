const express = require('express')
const { create_art, get_all_arts, get_art_by_id } = require('../controllers/art.controller')
const art_route = express.Router()

art_route.post("/create/art" ,create_art)
art_route.get('/get/arts' , get_all_arts)
art_route.get('/get/single/:id' , get_art_by_id)

module.exports = art_route