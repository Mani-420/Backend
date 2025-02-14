const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
// const Listing = require('../models/listing.js');
const { isLoggedIn, isOwner, validateListing } = require('../middlewares.js');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const listingController = require('../controllers/listings.js');

//New Route
router.get('/new', isLoggedIn, listingController.renderNewForm);

router
  .route('/')
  .get(wrapAsync(listingController.showAllRecipes))
  .post(validateListing, isLoggedIn, wrapAsync(listingController.newRecipe));

router
  .route('/:id')
  .get(wrapAsync(listingController.showRecipes))
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateRecipe)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroRecipe));

// Edit Route
router.get(
  '/:id/edit',
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
