//ultimate functionality
//Would it be better for the user to be able to drag and drop recipes where you want them, or have them appear based on the number of times they've been clicked?

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var recipeSchema = mongoose.Schema ({
	recipe		: {
		title	: String,
		ingredients: [String],
		clickCount : Number,
	}
});


module.exports = mongoose.model('Recipe', recipeSchema);