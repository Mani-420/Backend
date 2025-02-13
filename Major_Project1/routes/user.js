const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');
const { saveRedirectUrl } = require('../middlewares.js');
const userController = require('../controllers/users.js');

// Signup Routes------------------------------------------
router.get('/signup', userController.renderSignUpForm);
router.post('/signup', wrapAsync(userController.signup));

// Login Routes------------------------------------------
router.get('/login', userController.renderLogInForm);
router.post(
  '/login',
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
