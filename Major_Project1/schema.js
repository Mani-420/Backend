const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().allow("", null),
        ingredients: Joi.string().required().min(10),
        recipe: Joi.string().required().min(10),
    }).required(),
});
