const express = require("express")
const path = require("path")
const bodyParser = require('body-parser');

const userRouter = require("./routes/userRoutes")
const productRouter = require("./routes/productRoutes")

const app = express()



app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/v1/user", userRouter)
app.use("/api/v1/product", productRouter)

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
