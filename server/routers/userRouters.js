const express = require("express");
const { userControllers } = require("../controllers");

const router = express.Router();
<<<<<<< HEAD
router.post("/register", userControllers.postControllers.register)
router.post("/login",userControllers.postControllers.login)
=======
router.post("/register", userControllers.register)
router.post("/login",userControllers.login)
>>>>>>> 1f3df973d01e659619c426ff261b6c82b13e07cc


module.exports = router;
