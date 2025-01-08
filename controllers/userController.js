const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const crypto = require("crypto")

const User = require("../models/userModels");

