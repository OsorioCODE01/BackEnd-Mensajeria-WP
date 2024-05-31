const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/MessageController');

router.post('/message', MessageController.createMessage);
router.get('/findMessage', MessageController.getMessagesbyPhone);
module.exports = router;