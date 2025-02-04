const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync.js');
const { reviewSchema } = require('../schema.js');
const ExpressError = require('../utils/ExpressError.js');
const Review = require('../models/reviews.js');
const Listing = require('../models/listing.js');

// validate Review
const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((element) => element.message).join(',');
  }
  if (error) {
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Review
// POST Reviews Route
router.post(
  '/',
  validateReview,
  wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    res.redirect(`/recipes/${listing.id}`);
  })
);

// Delete Reviews Route
router.delete(
  '/:reviewId',
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    let deletedId = await Review.findByIdAndDelete(reviewId);
    console.log(deletedId);
    res.redirect(`/recipes/${id}`);
  })
);

module.exports = router;
