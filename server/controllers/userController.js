const db = require('../models/pawrentsModel.js');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userController = {};

// create - create a user hased password with BCRYPT
userController.createUser = async (req, res, next) => {
  console.log('inside userController.createUser');
   try {
    const { username, password, firstName, lastName, zipcode, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, SALT_WORK_FACTOR);
    const values = [ username, hashedPassword, firstName, lastName, zipcode, email ];
    const queryString = 'INSERT INTO "user" (username, password, firstname, lastname, zipcode, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    
    const data = await db.query(queryString, values);
    res.locals.user = data.rows[0];
    return next();
  } catch (error) {
    return next({
      log: 'Express error handler caught error in userController.createUser',
      message: { err: 'userController.createUser: check server log for details' }
    });
  }
};

// read - get user, has 'not found' user handling
userController.getUser = async (req, res, next) => {
  console.log('accessing userController.getUser');
  try {
    const { username } = req.params;
    const queryString = `SELECT * FROM "user" WHERE username='${username}'`;

    const data = await db.query(queryString);

    // handle user not found
    if (data.rows.length === 0) {
      return res.status(404).json({ "message": "user not found" })
    } else {
      res.locals.user = data.rows[0];
      return next();
    }    
  } catch (err) {
    return next({
      log: 'Express error handler caught error in userController.getUser',
      message: {err: 'userController.getUser: check server log for details'}
    });
  }
};

module.exports = userController;