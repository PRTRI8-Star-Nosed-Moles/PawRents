const express = require('express');
const router = express.Router();

const petController = require('../controllers/petController.js');
//get ALL pets
router.get('/', petController.getPets, (req, res) => {
    return res.status(200).json(res.locals.pets);
});

//get single pet (maybe?)

// create pet (quick-stretch)

// update pet - stretch

// delete pet - stretch

module.exports = router;