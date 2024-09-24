const express = require("express");
const {
  createNewConversationController,
  getConversationOfUserController,
  getTwoUsersConversationController,
  deleteConversationController,
} = require("../controllers/conversationController");
const router = express.Router();

router.post("/create", createNewConversationController);

router.get("/:userId", getConversationOfUserController);

router.get("/:firstUserId/:secondUserId", getTwoUsersConversationController);

router.delete("/delete/:conversationId", deleteConversationController);

module.exports = router;
