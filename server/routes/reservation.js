const express = require('express');
const router = express.Router();

const reservationController = require('../controllers/reservationController.js');

// create - new reservation
router.post('/', reservationController.createReservation, (req, res) => {
    return res.status(200).json(res.locals.reservation);
});

// read - user rental history
router.get('/user/:username', reservationController.readUserReservation, (req, res) => {
  return res.status(200).json(res.locals.reservations); 
});

// read - pet rental history
router.get('/pet/:petId', reservationController.readPetReservation, (req, res) => {
  return res.status(200).json(res.locals.reservations);
});

// delete - delete reservations by petId
router.get('/pet/:petId', reservationController.deletePetReservation, (req, res) => {
  return res.status(200).json(res.locals.reservations);
})

module.exports = router;