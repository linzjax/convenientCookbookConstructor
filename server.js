var express = require('express'),
	app 	= express();
	port	= process.env.PORT || 8080;
	passport= require('passport'),
	flash	= require('connect-flash'),
	exphbs  = require('express-handlebars'),
	path	= require('path'),
	mongoose= require('mongoose'),

	morgan		 = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser	 = require('body-parser'),
	session		 = require('express-session'),

	configDB	 = require('./config/config.js');


// configuration ==================================
mongoose.connect(configDB.url()); //connect to database

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

var hbs = exphbs.create({
  defaultLayout: 'main',
});
app.engine('handlebars', hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));


//required for passport
app.use(session({secret: 'ilovescotchscotchyscotchscotch'}));
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash()); //use connect-flash for flash messages stored in session

// routes ===================================
require('./routes/routes.js')(app, passport); //load our routes and pass in our app and fully configured passport

// launch =============================
//module.exports = app;
app.listen(port);
console.log('the magin happens on port ' + port)















