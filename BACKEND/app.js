const express = require("express")
const path = require("path")
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require("./routes/userRoute")
const productRouter = require("./routes/productRoute")
const cartRouter = require("./routes/cartRoute")
 
const app = express()

// Enable CORS
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}))



app.use(express.json())
app.use(express.urlencoded({extended: true}))
console.log("himmmm")
app.use("/api/v1/user", userRouter)
app.use("/api/v1/product", productRouter)
app.use("/api/v1/cart", cartRouter)

const AppError = require("./utils/appError")


app.all("*", (req, res, next) => {
    return next(new AppError("Not found please check the url and try again", 404))
  })
  
  app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.statusCode).json({
      message: err.message,
      status: err.status,
      stack: err.stack
    })
  })
  

module.exports = app
