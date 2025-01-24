const express = require("express")
const {body} = require("express-validator")

const {createUser, loginUser, forgotPassword, resetPassword, updatePassword} = require("../contollers/userController")
const {protect} = require("../contollers/authController")
const router = express.Router()





/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     description: This endpoint allows users to create a new account by providing their username, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's unique username
 *                 example: johndoe
 *               email:
 *                 type: string
 *                 description: The user's email address
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 description: A secure password for the user
 *                 example: strongpassword123
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique ID of the newly created user
 *                   example: 12345
 *                 username:
 *                   type: string
 *                   description: The username of the created user
 *                   example: johndoe
 *       400:
 *         description: Invalid input (e.g., missing required fields)
 *       409:
 *         description: User already exists
 */
router.post("/signup",[
    body("name").notEmpty().withMessage("A user must have a name"),
    body("email").notEmpty().isEmail().withMessage("A user must have a valid email"),
    body("password").notEmpty().isLength({min: 8}).withMessage("Password is REQUIRED WITH A MINIMUM OF 8 CHARACTERS"),
    body("confirmPassword").notEmpty().isLength({min:8}).withMessage("confirm password")
],createUser)



/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     description: Authenticate a user with their credentials.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
router.post("/login",[
    body("email").notEmpty().isEmail().withMessage("A user must have a valid email"),
    body("password").notEmpty().isLength({ min: 8 }).withMessage( "A user must have a password. with a minimum of 8 characters")
],loginUser)

router.post("/forgotPassword", forgotPassword)

router.post("/resetPassword/:token",[
    body("password").notEmpty().withMessage("Please provide your new password"),
    body("confirmPassword").notEmpty().withMessage( "Please confirm your new password "),
],resetPassword)

router.post("/updatePassword",protect,[

    body("currentPassword").notEmpty().withMessage("Please provide your current password"),
    body("newPassword").notEmpty().withMessage("Please provide your new password"),
    body("confirmNewPassword").notEmpty().withMessage( "Please confirm your new password "),
], updatePassword)


module.exports = router