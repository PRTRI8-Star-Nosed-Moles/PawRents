const db = require('../models/pawrentsModel.js');

const reservationController = {};

// create - reservation
reservationController.createReservation = async (req, res, next) => {
  console.log('inside reservationController.createReservation');
  try {
    const { date, pet_id, username } = req.body;
    const values = [date, pet_id, username];
    const queryString = 'INSERT INTO reservation (date, pet_id, username) VALUES ($1, $2, $3)';
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

// read - get reservations for user, via username as param
reservationController.readUserReservation = async (req, res, next) => {
  console.log('inside reservationController.readUserReservation');
  try {
    const username = req.params.username;
    const values = [username]
    const queryString = `SELECT * FROM reservation JOIN pet on reservation.pet_id = pet._id WHERE username = $1`;

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

// read - for pet
reservationController.readPetReservation = async (req, res, next) => {
  console.log('inside reservationController.readPetReservation');
  try {
    const { petId }  = req.params;
    const queryString = `SELECT * FROM reservation WHERE pet_id='${petId}'`;
    const data = await db.query(queryString);
    res.locals.reservations = data.rows;  
    console.log('data.rows', data.rows);
    return next();
  } catch (error) {
    return next({
      log: 'Express error handler caught error in reservationController.readPetReservation',
      message: { err: 'reservationController.readPetReservation: check server log for details' }
    });
  }
};

// delete - remove all reservations for Pet ID;
reservationController.deletePetReservation = async (req, res, next) => {
  console.log('inside reservationController.deletePetReservation');
  try {
    const { petId } = req.params;
    const queryString = `
      DELETE
      FROM reservation
      WHERE pet_id = '${petId}';
    `;

    const data = await db.query(queryString);
    res.locals.reservations = data.rows;
    console.log('data.rows', data.rows);
    return next();
  } catch (error) {
    return next({
      log: 'Express error handler caught error in reservationController.deletePetReservation',
      message: { err: 'reservationController.deletePetReservation: check server log for details' }
    });
  }
}

module.exports = reservationController;