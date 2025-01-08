const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const crypto = require("crypto")

const User = require("../models/userModels");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");



const createAndSendToken = (user, res, statusCode) => {

    user.password = undefined;
    const token = signToken(user._id);
  
    res.status(statusCode).json({
      message: "success",
      token,
      user,
    });
  }

exports.createUser = catchAsync(async (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return next(new AppError(errors, 400));
    }
  
    if (req.body.password !== req.body.confirmPassword) {
      return next(
        new AppError("Password and confirmPassword has to the same", 400),
      );
    }
  
    const body = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
  
    const user = await User.create(body);
  
    createAndSendToken(user, res, 201)
  });

exports.loginUser = catchAsync(async (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return next(new AppError(errors, 400));
    }
  
    const user = await User.findOne({ email: req.body.email }).select(
      "+password",
    );
  
    if (
      !user ||
      !(await user.correctPassword(req.body.password, user.password))
    ) {
      return next(new AppError("email or password is not correct", 401));
    }
    createAndSendToken(user, res, 200)
  });