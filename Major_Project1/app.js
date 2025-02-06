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

const listings = require('./routes/listing.js');
const reviews = require('./routes/review.js');

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

app.get('/home', (req, res) => {
  res.render('listings/home.ejs');
});

app.use(session(sessionOptions));
app.use(flash());
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

app.use('/recipes', listings);
app.use('/recipes/:id/reviews', reviews);

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
