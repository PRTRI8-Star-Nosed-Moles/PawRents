const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');
const loginController = require('../controllers/loginController.js');

router.post('/', loginController.validateUser, (req, res) => {
    return res.status(200).json({status: res.locals.validate})
});

module.exports = router;