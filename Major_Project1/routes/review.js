const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync.js');
const Review = require('../models/reviews.js');
const Listing = require('../models/listing.js');
const {
  isLoggedIn,
  validateReview,
  isReviewAuthor
} = require('../middlewares.js');

// Review
// POST Reviews Route
router.post(
  '/',
  validateReview,
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash('success', 'Review added successfully');
    res.redirect(`/recipes/${listing.id}`);
  })
);

// Delete Reviews Route
router.delete(
  '/:reviewId',
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Review deleted');
    res.redirect(`/recipes/${id}`);
  })
);

module.exports = router;
