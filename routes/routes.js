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
		res.render('signup.handlebars', {message: req.flash('signupMessage')})
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
			user: req.user
		});
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




