const express = require("express");
const { postControllers, getControllers } = require("../controllers/user");

const router = express.Router();
router.get("/verify_user/:uid", getControllers.verifyAccount)
router.get("/get/:id", getControllers.getUser)
router.post("/register", postControllers.register)
router.post("/login", postControllers.login)


module.exports = router;
