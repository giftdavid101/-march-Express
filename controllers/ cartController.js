const {validationResult} = require("express-validator")

const Cart = require("../models/cartModels")
const AppError = require("../utils/appError")
const catchAsync = require("../utils/catchAsync")

const getUpdatedCart = async(owner) => {
  return await Cart.findOne({owner}).populate('products.productId', 'name price')
}


exports.addToCart = catchAsync(async(req, res, next) => {

    const errors = validationResult(req)
  
    if (!errors.isEmpty()) {
      return next(new AppError(errors, 400))
    }
  
    const {productId, quantity} = req.body.products[0]
    if (!productId || !quantity) {
      return next(new AppError("Please specify productId and quantity", 400))
    }
  
    const owner = req.user._id
  
    const body = {
      owner,
      products: [ {productId, quantity}] 
    }
  
    // check if cart exist
    const cart = await Cart.findOne({owner: owner})
    //if the cart don't exist
    if (!cart) {
      const cart = await Cart.create(body)
      return res.status(201).json({
        message: 'Item added to cart successfully',
        cart
      })
    }
  
    //if the cart already exist, then check if the product already exist
  
    const productIndex = cart.products.findIndex((product) => product.productId.toString() === productId)
  
    //if it doesn't exist
    if (productIndex === -1) {
      cart.products.push({productId, quantity})
    } else {
  
    //if it exist
    cart.products[productIndex].quantity += +quantity
    }
    //save cart
    await cart.save()
  
    const updatedCart = await getUpdatedCart(owner)
  
    res.status(201).json({
  
        message: 'Item added to cart successfully',
        cart: updatedCart
    })
    
  })
  
  