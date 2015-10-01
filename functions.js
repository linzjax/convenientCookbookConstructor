// var bcrypt = require('bcryptjs'),
// 	Q = require('q');
// 	var db = require('./config.js').db();
	

// exports.localReg = function(username, passport){
// 	var deffered = Q.defer();
// 	var hash = bcrypt.hashSync(password, 8);
// 	var user = {
// 		"username": username,
// 		"password": hash,
// 		"avatar" : "http://placepuppy.it/images/homepage/Beagle_puppy_6_weeks.JPG"
// 	};

// 	var collection = db.get('local-users');


// 	collection.find({user: username})
// 	.then(function(result){
// 		console.log('username already exists');
// 		deferred.resolve(false);
// 	})
// 	.fail(function(result){
// 		console.log(result.body);
// 		if (result.body.message == "The requested items could not be found."){
// 			console.log('Username is free for use');
// 			db.put('local-users', username, user).then(function(){
// 				console.log("USER: " + user);
// 				deferred.resolve(user);
// 			})
// 			.fail(function(err){
// 				console.log('PUT FAIL: ' + err.body);
// 				deferred.reject(new Error(err.body));
// 			});
// 		} else {
// 			deferred.reject(new Error(results.body));
// 		}
// 	});
// 	return deferred.promise;
// };



// exports.localAuth = function (username, password) {
// 	var deferred = Q.defer();

// 	var colleciton = db.get('local-users');

// 	collection.find({user: username}, function(err, docs){
// 		if (err) {
// 			console.log()
// 		}
// 	})
// 	.then(function(result){
// 		console.log("FOUND USER");
// 		var hash = result.body.password;
// 		console.log(hash);
// 		console.log(bcrypt.compareSync(password, hash));
// 		if (bcrypt.compareSync(password, hash)) {
// 			deferred.resolve(result.body);
// 		} else {
// 			console.log("PASSWORDS NOT MATCH");
// 			deferred.resolve(false);
// 		}
// 	}).fail(function(err){
// 		if (err.body.message == 'The requested items could not be found.'){
// 			console.log("OH NO NO USER IN DB FOR SIGNIN");
// 			deferred.resolve(false);
// 		} else {
// 			deferred.reject(new Error(err));
// 		}
// 	});
// 	return deferred.promise;
// };

// exports.displayData = function(){
// 	var collection = db.get('local-users');
// 	collection.find({user:'john'}, function(err, docs){
// 		console.log(docs);
// 	});
// };



// module.export = exports;








