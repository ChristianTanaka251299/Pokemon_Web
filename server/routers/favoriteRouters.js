const express = require("express");
const { postControllers, getControllers } = require("../controllers/favorite");

const router = express.Router();
router.post("/add", postControllers.addFavorite)
router.get("/get", getControllers.getFavorite)


module.exports = router;
