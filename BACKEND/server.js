
const express = require("express")
const mongoose = require("mongoose")
const app = express()
require("dotenv").config()


//routes
app.get('/', (req, res) => {
    res.send("Welcome to farmers creeks")
})

mongoose.set("strict", false)
mongoose.connect(process.env.MONGO_DB_URI).then(() => {
    console.log("Mongodb connected")
    app.listen(process.env.PORT || 3000, () => {
        console.log("FarmCreek Server running")
    })
   
}).catch((err) => {
    console.log(err)
})