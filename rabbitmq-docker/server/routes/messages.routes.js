const express = require('express');
const router = express.Router();

const message = require('../controllers/messages.controller');
const messageCtrl = require('../controllers/messages.controller');

router.get('/status', messageCtrl.getStatus );
router.get('/messages', messageCtrl.getMessages );
router.post('/rabbit', messageCtrl.sendMessagesToRabbit);
router.post('/mongo', messageCtrl.sendMessagesToMongo);


module.exports = router;