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
router.post("/resetPassword/:token",[
    body("password").notEmpty().withMessage("Please provide your new password"),
    body("confirmPassword").notEmpty().withMessage( "Please confirm your new password "),
])
router.post("/updatePassword",protect,[

    body("currentPassword").notEmpty().withMessage("Please provide your current password"),
    body("newPassword").notEmpty().withMessage("Please provide your new password"),
    body("confirmNewPassword").notEmpty().withMessage( "Please confirm your new password "),
])