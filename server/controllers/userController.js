const db = require('../models/pawrentsModel.js');
// const query = require ('express')

const userController = {};

userController.createUser = (req, res, next) => {
  const { username, password, firstName, lastName, zipcode, email } = req.body;
  const values = [ username, password, firstName, lastName, zipcode, email ];
  const query = 'INSERT INTO "user" (username, password, firstname, lastname, zipcode, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  db.query(query, values)
    .then(data => {
        console.log('createUser data --> ', data);
        res.locals.user = data.rows[0];
        return next();
    })
    .catch(err => {
      return next({
        log: 'userController.addUser query error',
        message: { err: 'An error occurred' }
      });
    });
};

userController.getUser = (req, res, next) => {
//params
};

module.exports = userController;