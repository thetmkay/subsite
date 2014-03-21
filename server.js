/**
 * Module dependencies
 */

var express = require('express'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();

/**
 * Configuration
 */

// all environments
var port = process.env.PORT || 3000;
console.log(port);
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);


/**
 * Routes
 */

// redirect all others to the index (HTML5 history)
app.get('/', function(req,res) {
	res.render('index');
});

app.get('*', function(req,res) {
	res.render('error');
});


/**
 * Start Server
 */

console.log("starting server");

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + port);
});