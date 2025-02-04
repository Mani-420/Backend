const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const { listingSchema } = require('../schema.js');
const ExpressError = require('../utils/ExpressError.js');
const Listing = require('../models/listing.js');

// validate Listing Schema
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((element) => element.message).join(',');
  }
  if (error) {
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// All Recipes Route
router.get(
  '/',
  wrapAsync(async (req, res) => {
    const allRecipes = await Listing.find({});
    res.render('listings/recipe.ejs', { allRecipes });
  })
);

//New Route
router.get('/new', (req, res) => {
  res.render('listings/new.ejs');
});

//Create Route
router.post(
  '/',
  validateListing,
  wrapAsync(async (req, res) => {
    const newRecipe = new Listing(req.body.listing);
    await newRecipe.save().catch((err) => console.log(err));
    res.redirect('/recipes');
  })
);

// //Show Route
router.get(
  '/:id',
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const recipes = await Listing.findById(id).populate('reviews');
    res.render('listings/show.ejs', { recipes });
  })
);

//Edit Route
router.get(
  '/:id/edit',
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const recipe = await Listing.findById(id);
    res.render('listings/edit.ejs', { recipe });
  })
);

//Update Route
router.put(
  '/:id',
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/recipes/${id}`);
  })
);

//Delete Route
router.delete(
  '/:id',
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    res.redirect('/recipes');
  })
);

module.exports = router;
