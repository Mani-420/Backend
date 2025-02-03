const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const PORT = 8080;
const Listing = require("./models/listing.js");
const Review = require("./models/reviews.js");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema.js");
const {reviewSchema} = require("./schema.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Recipe-blog";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

// validate Listing Schema
const validateListing = (req, res, next) => {
  let {error} = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((element) => element.message).join(",");
  }
  if (error) {
    throw new ExpressError(400, errMsg);
  } else{
    next();
  }
};

// validate Review
const validateReview = (req, res, next) => {
  let {error} = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((element) => element.message).join(",");
  }
  if (error) {
    throw new ExpressError(400, errMsg);
  } else{
    next();
  }
};

// Routes------------------------------------------------
// Home Route
app.get("/home", (req, res) => {
  res.render("listings/home.ejs");
});

// All Recipes Route
app.get("/recipes", wrapAsync (async (req, res) => {
  const allRecipes = await Listing.find({});
  res.render("listings/recipe.ejs", { allRecipes });
}));


//New Route
app.get("/recipes/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Create Route
app.post("/recipes", validateListing, wrapAsync (async (req, res) => {
  const newRecipe = new Listing(req.body.listing);
  await newRecipe.save()
  .catch((err) => console.log(err));
  res.redirect("/recipes");
}));

// //Show Route
app.get("/recipes/:id", wrapAsync (async (req, res) => {
  let { id } = req.params;
  const recipes = await Listing.findById(id).populate("reviews");
  res.render("listings/show.ejs", { recipes });
}));


//Edit Route
app.get("/recipes/:id/edit", wrapAsync (async (req, res) => {
  let { id } = req.params;
  const recipe = await Listing.findById(id);
  res.render("listings/edit.ejs", { recipe });
}));

//Update Route
app.put("/recipes/:id", validateListing, wrapAsync (async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/recipes/${id}`);
}));

//Delete Route
app.delete("/recipes/:id", wrapAsync (async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  res.redirect("/recipes");
}));


// Review 
// POST Reviews Route 
app.post("/recipes/:id/reviews", validateReview, wrapAsync (async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  res.redirect(`/recipes/${listing.id}`);
}));

// Delete Reviews Route 
app.delete("/recipes/:id/reviews/:reviewId", wrapAsync (async (req, res) => {
  let {id, reviewId} = req.params;
  await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewID}});
  let deletedId = await Review.findByIdAndDelete(reviewID);
  console.log(deletedId);
  res.redirect(`/recipes/${id}`);
}));


app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});


// MiddleWares 
app.use((err, req, res, next) => {
  let {statusCode=500, message="Something went wrong"} = err;
  res.render("error.ejs", {msg: message});
  // res.status(statusCode).send(message);
})


app.listen(PORT, () => {
  console.log(`Server is listening at port" ${PORT}`);
});