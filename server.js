
const express = require("express")
const app = express()


//routes
app.get('/', (req, res) => {
    res.send("Welcome to farmers creek")

})

app.listen(3000, () => {
    console.log("FarmCreek Server running")
})
