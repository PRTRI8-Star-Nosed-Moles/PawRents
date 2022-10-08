const express = require('express');
const router = express.Router();

// require controllers
const petController = require('../controllers/petController.js');

// read - request from marketplace page, passing in date selected
router.post('/date', petController.getByDate, (req, res) => {
  return res.status(200).json(res.locals.pets)
})

// create - account page input form to add pet, passing in pet details (req.body) & username (req.params)
router.post('/:username', petController.createPet, petController.addPetOwner, (req, res) => {
  return res.status(200).json(res.locals.pet);
});

// read - get all pets for a specific user, passing in username (req.params)
router.get('/mypets/:username', petController.getMyPets, (req, res) => {
  return res.status(200).json(res.locals.myPets)
})

// read - get all pets in db
router.get('/', petController.getAllPets, (req, res) => {
  return res.status(200).json(res.locals.pets);
});

// POST request to pull pets based on user input into searchbar on marketplace page
router.post('/', petController.getPetsByName, (req, res) => {
  return res.status(200).json(res.locals.pets);
})

// read - get a specific pet & details
router.get('/:id', petController.getAPet, (req, res) => {
  return res.status(200).json(res.locals.pet);
});

// update - update pet details
router.patch('/:id', petController.updatePet, (req, res) => {
  return res.status(200).json(res.locals.pet);
})

// delete - single pet
router.delete('/', petController.deletePet, (req, res) => {
  return res.status(200).json(res.locals.pet);
})

module.exports = router;