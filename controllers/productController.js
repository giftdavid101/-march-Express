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