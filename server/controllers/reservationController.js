const { ModuleFilenameHelpers } = require('webpack');
const db = require('../models/pawrentsModel.js');

const reservationController = {};

reservationController.createReservation = async (req, res, next) => {
  console.log('inside reservationController.createReservation');
  try {
    const { date, pet_id, user_id } = req.body;
    const values = [date, pet_id, user_id];
    const queryString = 'INSERT INTO reservation (date, pet_id, user_id) VALUES ($1, $2, $3)';
    const data = await db.query(queryString, values);
    res.locals.reservation = data.rows[0];
    return next();
  } catch (error) {
    return next({
      log: 'Express error handler caught error in reservationController.createReservation',
      message: { err: 'reservationController.createReservation: check server log for details' }
    });
  }
};

//READ - for user
reservationController.readUserReservation = async (req, res, next) => {
  console.log('inside reservationController.readUserReservation');
  try {
    const { userId } = req.params;
    const queryString = `SELECT * FROM reservation WHERE user_id='${userId}'`;
    const data = await db.query(queryString);
    res.locals.reservations = data.rows;  
    console.log('res.locals.reservations', res.locals.reservations);
    return next();
  } catch (error) {
    return next({
      log: 'Express error handler caught error in reservationController.readUserReservation',
      message: { err: 'reservationController.readUserReservation: check server log for details' }
    });
  }
};

//READ - for pet
reservationController.readPetReservation = async (req, res, next) => {
  console.log('inside reservationController.readPetReservation');
  try {
    const { petId }  = req.params;
    const queryString = `SELECT * FROM reservation WHERE user_id='${petId}'`;
    const data = await db.query(queryString);
    res.locals.reservations = data.rows;  
    return next();
  } catch (error) {
    return next({
      log: 'Express error handler caught error in reservationController.readPetReservation',
      message: { err: 'reservationController.readPetReservation: check server log for details' }
    });
  }
};

module.exports = reservationController;