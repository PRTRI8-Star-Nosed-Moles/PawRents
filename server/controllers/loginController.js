const express = require('express');
const db = require('../models/pawrentsModel.js');

const loginController = {};

loginController.validateUser = (req, res, next) => {
    console.log('inside validateUser middleware')
  try {
    const { password } = res.locals.user;
    if (password === req.body.password) {
        res.locals.validate = true;
    } else {
        res.locals.validate = false;
    }
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught error in loginController.validateUser',
      message: { err: 'loginController.validateUser: check server log for details' }
    });
  }
}

module.exports = loginController;
