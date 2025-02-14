// Main FIle

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const PORT = 8080;
const ExpressError = require('./utils/ExpressError.js');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/User.js');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// Routes -------------
const listingRouter = require('./routes/listing.js');
const reviewRouter = require('./routes/review.js');
const userRouter = require('./routes/user.js');

// Mongo Connection--------------
const MONGO_URL = 'mongodb://127.0.0.1:27017/Recipe-blog';

main()
  .then(() => {
    console.log('connected to DB');
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

const sessionOptions = {
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1
    httpOnly: true
  }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currUser = req.user;
  next();
});

app.get('/home', (req, res) => {
  res.render('listings/home.ejs');
});

app.use('/recipes', listingRouter);
app.use('/recipes/:id/reviews', reviewRouter);
app.use('/', userRouter);

app.all('*', (req, res, next) => {
  next(new ExpressError(404, 'Page not found'));
});

// MiddleWares
app.use((err, req, res, next) => {
  let { statusCode = 500, message = 'Something went wrong' } = err;
  res.render('error.ejs', { msg: message });
});

app.listen(PORT, () => {
  console.log(`Server is listening at port" ${PORT}`);
});
