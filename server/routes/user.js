const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');

// create - user account via sign-up
router.post('/', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

// read - current user account info
router.get('/:username', userController.getUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

// update any field, user, pw, etc. - stretch

// delete user account - stretch

module.exports = router;