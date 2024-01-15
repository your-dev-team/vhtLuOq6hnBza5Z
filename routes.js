const express = require('express');
const router = express.Router();
const timerController = require('./timerController');

router.get('/', timerController.showTimerPage);
router.post('/set', timerController.setTimer);
router.post('/start', timerController.startTimer);
router.post('/end', timerController.endTimer);

module.exports = router;
