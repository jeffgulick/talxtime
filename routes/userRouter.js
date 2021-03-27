const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const userControl = require("../controllers/userController");

router.get("/auth", auth, userControl.authUser);
router.get("/logout", auth, userControl.logOutUser);
router.get("/contacts", userControl.getUsers);
router.post("/oneUser", userControl.getOneUser);
router.post("/register", userControl.registerUser);
router.post("/login", userControl.logInUser);
module.exports = router;
