const express = require("express");
const { userControllers } = require("../controllers");

const router = express.Router();
router.post("/register", userControllers.postControllers.register)
router.post("/login",userControllers.postControllers.login)


module.exports = router;
