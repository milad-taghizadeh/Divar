// imports
const router = require('express').Router();
const testController = require('../controllers/testController')

// route test
router.get('/test', testController.testController)

// exports
module.exports = router;
