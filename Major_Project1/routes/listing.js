const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const Listing = require('../models/listing.js');
const { isLoggedIn, isOwner, validateListing } = require('../middlewares.js');

const listingController = require('../controllers/listings.js');

// All Recipes Route
router.get('/', wrapAsync(listingController.showAllRecipes));

//New Route
router.get('/new', isLoggedIn, listingController.renderNewForm);

//Create Route
router.post(
  '/',
  validateListing,
  isLoggedIn,
  wrapAsync(listingController.newRecipe)
);

// Show Route
router.get('/:id', wrapAsync(listingController.showRecipes));

// Edit Route
router.get(
  '/:id/edit',
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

//Update Route
router.put(
  '/:id',
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(listingController.updateRecipe)
);

//Delete Route
router.delete(
  '/:id',
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.destroRecipe)
);

module.exports = router;
