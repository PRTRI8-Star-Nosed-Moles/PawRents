const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');
const loginController = require('../controllers/loginController.js');

router.post('/', userController.getUser, loginController.validateUser, (req, res) => {
    return res.status(200).json({status: res.locals.validate}) //send { status: boolean } for frontend
});

module.exports = router;