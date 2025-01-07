const express = require("express")
const {body} = require("express-validator")

const router = express.Router();

router
  .route("/")
  .post(
    [
      body("name").notEmpty().withMessage("A product must have a name"),
      body("price").notEmpty().isInt().withMessage("A product must have a price"),
      body("quantity").notEmpty().isInt().withMessage("A product must have quantity"),
    ]
  );


module.exports = router;