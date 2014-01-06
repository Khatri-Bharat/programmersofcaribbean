// web.js
var express = require("express");
var logfmt = require("logfmt");
var ejs = require("ejs");
var https = require("https");
var querystring = require("querystring");

/* oauth info */
var clientId = "76b2e5167ea22c75ad14";
var clientSecret = "5596e1881140f16745ccc7b7e38ad63283819633";
var redirectUri = "http://programmers-of-caribbean.herokuapp.com/home";
/* oauth info */

var app = express();

app.use(logfmt.requestLogger());

app.configure(function() {
	app.engine('html', ejs.renderFile);
	app.use('/resources', express.static(__dirname + "/../resources"));
});

app.get('/', function(req, res) {
	res.render("../view/templates/landing.html");
});

/* Handle the OAuth response */
app.get('/oauth', function(req, res) {
	/* exchange the 'code' to get an access token and display it to the user. */
	var postdata = querystring.stringify({
		client_id: clientId,
		client_secret: clientSecret,
		code: req.query.code,
		redirect_uri: redirectUri
	});
		
	var options = {
		host: 'github.com',
		path: '/login/oauth/access_token',
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'content-length': Buffer.byteLength(postdata)
		}
	};	

	var request = https.request(options, function(response) {
		var chunks = [];
		response.on('data', function(chunk) {
			chunks.push(chunk);
		});

		response.on('end', function() {
			var buffer = Buffer.concat(chunks);
			var responseQuery = querystring.parse(buffer);
			res.send("access token = " + buffer);		
		});
	});
	
	request.write(postdata);
	request.end();
});


var port = process.env.PORT || 5000;
app.listen(port);
