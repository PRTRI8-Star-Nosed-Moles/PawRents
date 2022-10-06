const express = require('express');
const router = express.Router();

const petController = require('../controllers/petController.js');

// create pet
router.post('/:username', petController.createPet, petController.addPetOwner, (req, res) => {
  return res.status(200).json(res.locals.pet);
});

router.get('/mypets/:username', petController.getMyPets, (req, res) => {
  return res.status(200).json(res.locals.myPets)
})

// get ALL pets
router.get('/', petController.getAllPets, (req, res) => {
  return res.status(200).json(res.locals.pets);
});

// get single pet (maybe?)
router.get('/:id', petController.getAPet, (req, res) => {
  return res.status(200).json(res.locals.pet);
});

// update pet - stretch
router.patch('/:id', petController.updatePet, (req, res) => {
  return res.status(200).json(res.locals.pet);
})

// delete pet - stretch
router.delete('/:id', petController.deletePet, (req, res) => {
  return res.status(200).json(res.locals.pet);
})

module.exports = router;