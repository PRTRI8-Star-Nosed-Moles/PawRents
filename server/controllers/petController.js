const db = require('../models/pawrentsModel.js');

const petController = {};

//getPets to retrieve all Pets in DB
petController.getPets = async (req, res, next) => {
  console.log('inside petController.getPets');
  try {
    const queryString = 'SELECT * FROM pet';
    const data = await db.query(queryString);
    res.locals.pets = data.rows;
    return next();
  } catch (error) {
    return next({
      log: 'Express error handler caught error in petController.getPets',
      message: { err: 'petController.getPets: check server log for details' }
    });
  }
}

module.exports = petController;