const express = require("express");
const { postControllers, getControllers, patchControllers } = require("../controllers/user");
const { fileUploader } = require("../middleware/multer");
const { updateUserProfile } = require("../controllers/user/post");

const router = express.Router();
router.get("/verify_user/:uid", getControllers.verifyAccount)
router.get("/get/:id", getControllers.getUser)
router.post("/profile/:id", fileUploader({destinationFolder:"avatar"}).single("profile_picture"), postControllers.profilePicture)
router.post("/login", postControllers.login)
router.post("/register", postControllers.register)
router.patch("/update/:id", patchControllers.updateUserProfile)


module.exports = router;
