const express = require("express");
const router = express.Router();

const {
  registerController,
  loginController,
  logoutController,
  refetchUserController,
} = require("../controllers/authController");
//Register
router.post("/register", registerController);
//Login
router.post("/login", loginController);
//Logout
router.get("/logout", logoutController);
//Fetch current User

router.get("/refetch", refetchUserController);

module.exports = router;
