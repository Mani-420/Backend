const User = require('../models/user');

module.exports.renderSignUpForm = (req, res) => {
  res.render('users/signup.ejs');
};

module.exports.signup = async (req, res) => {
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
};

module.exports.renderLogInForm = (req, res) => {
  res.render('users/login.ejs');
};

module.exports.logIn = async (req, res) => {
  req.flash('success', 'Welcome back to Blog');
  let redirectUrl = res.locals.redirectUrl || '/recipes';
  res.redirect(redirectUrl);
};

module.exports.logOut = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash('success', 'You are logged out');
    res.redirect('/recipes');
  });
};
