const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const PORT = 8080;
const Listing = require("./models/listing.js");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

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
app.post("/recipes", wrapAsync (async (req, res) => {
  if (!req.body.listing){
    throw new ExpressError(400, "Please fill out all fields");
  }
  const newRecipe = new Listing(req.body.listing);
  await newRecipe.save()
  .catch((err) => console.log(err));
  res.redirect("/recipes");
}));

// //Show Route
app.get("/recipes/:id", wrapAsync (async (req, res) => {
  let { id } = req.params;
  const recipes = await Listing.findById(id);
  res.render("listings/show.ejs", { recipes });
}));


//Edit Route
app.get("/recipes/:id/edit", wrapAsync (async (req, res) => {
  let { id } = req.params;
  const recipe = await Listing.findById(id);
  res.render("listings/edit.ejs", { recipe });
}));

//Update Route
app.put("/recipes/:id", wrapAsync (async (req, res) => {
  if (!req.body.listing){
    throw new ExpressError(400, "Please fill out all fields");
  }
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