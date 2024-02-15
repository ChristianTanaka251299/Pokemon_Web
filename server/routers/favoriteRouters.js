const express = require("express");
const { postControllers, getControllers, deleteControllers } = require("../controllers/favorite");

const router = express.Router();
router.post("/add", postControllers.addFavorite)
router.get("/get", getControllers.getFavorite)
router.get("/get-top", getControllers.getTopFav)
router.delete("/delete", deleteControllers.deleteFavorite)


module.exports = router;
