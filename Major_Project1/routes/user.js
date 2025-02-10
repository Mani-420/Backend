const express = require('express');
const router = express.Router();
const User = require('../models/User');
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');
const { saveRedirectUrl } = require('../middlewares.js');

// Signup Routes------------------------------------------

router.get('/signup', (req, res) => {
  res.render('users/signup.ejs');
});

router.post(
  '/signup',
  wrapAsync(async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      const registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      req.login(registeredUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash('success', 'Welcome to Blog');
        res.redirect('/recipes');
      });
    } catch (err) {
      req.flash('error', err.message);
      res.redirect('signup');
    }
  })
);

// Login Routes------------------------------------------
router.get('/login', (req, res) => {
  res.render('users/login.ejs');
});

router.post(
  '/login',
  saveRedirectUrl,
  passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
  }),
  async (req, res) => {
    req.flash('success', 'Welcome back to Blog');
    let redirectUrl = res.locals.redirectUrl || '/recipes';
    res.redirect(redirectUrl);
  }
);

router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash('success', 'You are logged out');
    res.redirect('/recipes');
  });
});

module.exports = router;
