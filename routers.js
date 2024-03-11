const express = require('express');
const studentController = require('../controllers/studentController');
const homeworkController = require('../controllers/homeworkController');

const router = express.Router();

router.post('/students', studentController.create);
router.get('/students', studentController.getAll);

router.post('/homeworks', homeworkController.create);
router.get('/homeworks', homeworkController.getAll);

module.exports = router;
