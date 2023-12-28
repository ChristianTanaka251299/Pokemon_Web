const express = require("express");
const { userControllers } = require("../controllers");

const router = express.Router();
router.post("/register", userControllers.register)


module.exports = router;
