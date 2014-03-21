var db;

exports.setDB = function (dbUrl) {
	db = require('mongoskin').db(dbUrl, {
		w: 1
	});
};

exports.registerEmail = function(req,res) {
	var email = req.body.email;
	var emails = db.collection('emails');
	console.log('email ' + email);
	var date = new Date();
	emails.save({'email': email, 'date':date.toJSON()}, function(err,result) {
		console.log(result);
	});
};