const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const messageControl = require("../controllers/messageControl");

router.get("/conversations/query", auth, messageControl.converstationsByUsers);
router.post("/conversations", messageControl.conversationList);
router.post("/chats", messageControl.chatMessagesByConversation);

module.exports = router;
