const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync.js');
const Review = require('../models/reviews.js');
const Listing = require('../models/listing.js');
const reviewController = require('../controllers/reviews.js');
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
  wrapAsync(reviewController.createReview)
);

// Delete Reviews Route
router.delete(
  '/:reviewId',
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
