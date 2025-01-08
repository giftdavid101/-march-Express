const {validationResult} = require("express-validator")

const AppError = require("../utils/appError")
const catchAsync = require("../utils/catchAsync")
const Product = require("../models/productModels")

exports.getAllProducts = catchAsync(async(req, res, next) => {

    const products = await Product.find()
  
    res.status(200).json({
      message: 'success',
      results: products.length,
      products
    })
  })

  exports.addProduct = catchAsync(async(req, res,next) => {
    const errors = validationResult(req)
  
    if (!errors.isEmpty()) {
      return next(new AppError(errors, 400))
    }
  
    const product = await Product.create(req.body)
  
    res.status(201).json({
      message: 'success',
      product
    })
  
  })