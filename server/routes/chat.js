'use strict';
const express = require('express');
const router = express.Router();
const ChatController = require('../controllers').Chat;

router.route('/').get(ChatController.getAll)
router.route('/user').get(ChatController.getUser)
router.route('/userDetails').get(ChatController.getOtherUser)


module.exports = router;
