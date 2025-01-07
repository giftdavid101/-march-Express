const express = require("express")

const router = express.Router()

router.post("/signup",[
    body("name").notEmpty().withMessage("A user must have a name"),
    body("email").notEmpty().isEmail().withMessage("A user must have a valid email"),
    body("password").notEmpty().isLength({min: 8}).withMessage("Password is REQUIRED WITH A MINIMUM OF 8 CHARACTERS"),
    body("confirmPassword").notEmpty().isLength({min:8}).withMessage("confirm password")
])

router.post("/login",[
    body("email").notEmpty().isEmail().withMessage("A user must have a valid email"),
    body("password").notEmpty().isLength({ min: 8 }).withMessage( "A user must have a password. with a minimum of 8 characters")
])
router.post("/forgotPassword", forgotPassword)
   