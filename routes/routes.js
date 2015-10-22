var User = require('./../models/user');

module.exports = function(app, passport){
	//======HOME PAGE=======//
	app.get('/', function(req,res){
		res.render('index.handlebars');
	});

	//======LOGIN=======//

	app.get('/login', function(req,res){
		res.render('login.handlebars', {message: req.flash('loginMessage')}
		);
	});

	//process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	}));

	//======SIGNUP=======//

	app.get('/signup', function(req,res){
		res.render('signup.handlebars', {message: req.flash('signupMessage')});
	});

	//process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/profile',
		failureRedirect: '/signup',
		failureFlash : true
	}));

	//======PROFILE SECTION=======//

	app.get('/profile', isLoggedIn, function(req,res){
		res.render('profile.handlebars', {
			recipes: JSON.stringify(req.user.recipes)
		});
	});

	app.get('/recipeForm', isLoggedIn, function(req,res){
		
		res.render('recipeForm.handlebars', {
			user: req.user.recipes
		});
	});

	//add a new recipe via a form
	app.post('/recipeform', function(req,res){
		var title = req.body.recipeTitle;
		var ingredients = req.body.recipeIngredients;
		ingredients = ingredients.split('\n');
		ingredients = ingredients.filter(function(ingredient){
			if (ingredient!=='')
				return ingredient
		});
		req.user.recipes.push({ title: title, ingredients: ingredients});
		console.log(req.user.recipes);
		req.user.save(function(err){
			if (err) return handleError(err);
			console.log('Success!');
		});

		res.redirect('/profile')
	});


	app.get('/publicprofile', function(req,res){
		res.render('publicprofile.handlebars', {
			user: req.user
		});
	});



	//======LOGOUT=======//

	app.get('/logout', function(req,res){
		req.logout();
		res.redirect('/');
	});

};

function isLoggedIn(req, res, next){

	if(req.isAuthenticated())
		return next();

	res.redirect('/');
}


module.export = module;




