const express = require('express');
const db = require('../models/pawrentsModel.js');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const loginController = {};

// validate via Bcrypt.compare, return validation status to front end
loginController.validateUser = async (req, res, next) => {
  console.log('inside validateUser middleware')
  try {
    const { username, password } = req.body; // input username by user

    //QUERY DB FOR STORED PASS
    const queryString = `SELECT password FROM "user" WHERE username='${username}'`;
    const data = await db.query(queryString); // retrieved password from db
    
    //IN CASE OF USER NOT FOUND RESPOND: NOT FOUND
    if (data.rows.length === 0) return res.status(404).json({"message": "user not found"});
    
    //BCRYPT.COMPARE FOR VALIDITY
    const valid = await bcrypt.compare(password, data.rows[0].password);

    if (valid) {
        console.log('password is valid')
        res.locals.validate = true;
    } else {
        console.log('password is NOT valid')
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
