const express = require('express');
const router = express.Router();

const reservationController = require('../controllers/reservationController.js');

// create
router.post('/', reservationController.createReservation, (req, res) => {
    return res.status(200).json(res.locals.reservation);
});

// read - user rental history
router.get('/user/:userId', reservationController.readUserReservation, (req, res) => {
  return res.status(200).json(res.locals.reservations); 
});

// read - pet rental history
router.get('/pet/:petId', (req, res) => {
  return res.status(200).json(res.locals.reservations);
});

module.exports = router;