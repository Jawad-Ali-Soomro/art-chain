const mongoose = require('mongoose')
const connect_database = async () => {
    await mongoose.connect(process.env.MONGO_URI).then(console.log())
}