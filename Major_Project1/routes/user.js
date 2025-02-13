const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');
const { saveRedirectUrl } = require('../middlewares.js');
const userController = require('../controllers/users.js');

// Signup Routes------------------------------------------
router
  .route('/signup')
  .get(userController.renderSignUpForm)
  .post(wrapAsync(userController.signup));

// Login Routes------------------------------------------
router
  .route('/login')
  .get(userController.renderLogInForm)
  .post(
    saveRedirectUrl,
    passport.authenticate('local', {
      failureRedirect: '/login',
      failureFlash: true
    }),
    userController.logIn
  );

// LogOut Routes------------------------------------------
router.get('/logout', userController.logOut);

module.exports = router;
