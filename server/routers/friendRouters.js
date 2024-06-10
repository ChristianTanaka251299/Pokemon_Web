const express = require("express");
const { postControllers, getControllers, deleteControllers } = require("../controllers/friends");

const router = express.Router();
router.get("/get/:id", getControllers.getUserFriend)
router.post("/add/:id/:friendId", postControllers.addFriend)
router.delete("/remove/:id/:friend", deleteControllers.removeFriend)

module.exports = router;
