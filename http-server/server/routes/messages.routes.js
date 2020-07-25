const express = require('express');
const router = express.Router();

const messageCtrl = require('../controllers/message.controller');

// router.get('/', messageCtrl.getMessages);
router.post('/', messageCtrl.sendMessage);

module.exports = router;
