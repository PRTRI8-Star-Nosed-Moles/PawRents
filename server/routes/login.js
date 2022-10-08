const express = require('express');
const router = express.Router();

// require controllers
const loginController = require('../controllers/loginController.js');

// login POST request
router.post('/', loginController.validateUser, (req, res) => {
    // return status on un/successful validation
    return res.status(200).json({status: res.locals.validate})
});

module.exports = router;