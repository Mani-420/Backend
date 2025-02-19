const Listing = require('../models/listing');

module.exports.showAllRecipes = async (req, res) => {
  const allRecipes = await Listing.find({});
  res.render('listings/recipe.ejs', { allRecipes });
};

module.exports.renderNewForm = (req, res) => {
  res.render('listings/new.ejs');
};

module.exports.newRecipe = async (req, res) => {
  try {
    const newRecipe = new Listing(req.body.listing);
    newRecipe.owner = req.user._id;
    await newRecipe.save();
    req.flash('success', 'Recipe created successfully');
    res.redirect('/recipes');
  } catch (err) {
    req.flash('error', 'Failed to create recipe. Please try again.');
    res.redirect('/recipes/new');
  }
};

module.exports.showRecipes = async (req, res) => {
  let { id } = req.params;
  const recipes = await Listing.findById(id)
    .populate({ path: 'reviews', populate: { path: 'author' } })
    .populate('owner');
  if (!recipes) {
    req.flash('error', 'Recipe not found');
    res.redirect('/recipes');
  }
  res.render('listings/show.ejs', { recipes });
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const recipe = await Listing.findById(id);
  if (!recipe) {
    req.flash('error', 'Recipe not found');
    res.redirect('/recipes');
  }
  res.render('listings/edit.ejs', { recipe });
};

module.exports.updateRecipe = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash('success', 'Recipe updated successfully');
  res.redirect(`/recipes/${id}`);
};

module.exports.destroRecipe = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash('success', 'Recipe deleted');
  res.redirect('/recipes');
};
