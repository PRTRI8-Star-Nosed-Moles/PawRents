const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');

// create user account - sign-up
router.post('/', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals);
});

// read current user account - account info
router.get('/:username', userController.getUser, (req, res) => {
  return res.status(200).json(res.locals);
});

// update any field, user, pw, etc. - stretch

// delete user account - stretch

module.exports = router;