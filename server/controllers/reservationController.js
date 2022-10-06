const { ModuleFilenameHelpers } = require('webpack');
const db = require('../models/pawrentsModel.js');

const reservationController = {};

reservationController.createReservation = async (req, res, next) => {
  console.log('inside reservationController.createReservation');
  try {
    const { date, pet_id, username } = req.body;
   
    const values = [date, pet_id, username];
    const queryString = 'INSERT INTO reservation (date, pet_id, username) VALUES ($1, $2, $3)';
    // console.log("did it get to here?", req.body)

    const data = await db.query(queryString, values);
    // console.log(data.rows[0])
    res.locals.reservation = data.rows[0];
    // console.log("console logging",res.locals.reservation )
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
    const username = req.params.username;
    console.log('username in server is: ', username)
    const values = [username]
    console.log("values", values)

    const queryString = `SELECT * FROM reservation WHERE username=$1`;

    const data = await db.query(queryString,values);

    res.locals.reservations = data.rows;  
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