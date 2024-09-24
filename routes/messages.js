const express = require("express");
const {
  createMessageController,
  getMessagesController,
  deleteMessageController,
} = require("../controllers/messageController");
const router = express.Router();

router.post("/create", createMessageController);

router.get("/:conversationId", getMessagesController);

router.delete("/:messageId", deleteMessageController);
module.exports = router;
