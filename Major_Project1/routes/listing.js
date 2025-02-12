const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const Listing = require('../models/listing.js');
const { isLoggedIn, isOwner, validateListing } = require('../middlewares.js');

// All Recipes Route
router.get(
  '/',
  wrapAsync(async (req, res) => {
    const allRecipes = await Listing.find({});
    res.render('listings/recipe.ejs', { allRecipes });
  })
);

//New Route
router.get('/new', isLoggedIn, (req, res) => {
  res.render('listings/new.ejs');
});

//Create Route
router.post(
  '/',
  validateListing,
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const newRecipe = new Listing(req.body.listing);
    newRecipe.owner = req.user._id;
    await newRecipe.save().catch((err) => console.log(err));
    req.flash('success', 'Recipe created successfully');
    res.redirect('/recipes');
  })
);

// Show Route
router.get(
  '/:id',
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const recipes = await Listing.findById(id)
      .populate('reviews')
      .populate('owner');
    if (!recipes) {
      req.flash('error', 'Recipe not found');
      res.redirect('/recipes');
    }
    res.render('listings/show.ejs', { recipes });
  })
);

// Edit Route
router.get(
  '/:id/edit',
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const recipe = await Listing.findById(id);
    if (!recipe) {
      req.flash('error', 'Recipe not found');
      res.redirect('/recipes');
    }
    res.render('listings/edit.ejs', { recipe });
  })
);

//Update Route
router.put(
  '/:id',
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash('success', 'Recipe updated successfully');
    res.redirect(`/recipes/${id}`);
  })
);

//Delete Route
router.delete(
  '/:id',
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash('success', 'Recipe deleted');
    res.redirect('/recipes');
  })
);

module.exports = router;
