// web.js
var express = require("express");
var logfmt = require("logfmt");
var ejs = require("ejs");
var jade = require("jade");
var https = require("https");
var querystring = require("querystring");
var mongodb = require("mongodb");

/* oauth info */
var clientId = "76b2e5167ea22c75ad14";
var clientSecret = "5596e1881140f16745ccc7b7e38ad63283819633";
var redirectUri = "http://programmers-of-caribbean.herokuapp.com/home";
/* oauth info */

/* access tokens */
var accessTokens = [];
var userId = 0;
/* access tokens */


var app = express();

app.use(logfmt.requestLogger());

app.configure(function() {
	app.engine('html', ejs.renderFile);
	app.engine('jade', jade.__express);
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
			var responseQuery = querystring.parse(buffer.toString());
			accessTokens[userId++] = responseQuery.access_token;						
			/* fetch user details using the access token */
			res.render('../view/templates/menu.html');
		});
	});
	
	request.write(postdata);
	request.end();
});

app.get('/home', function(req, res) {
	var accessToken = accessTokens[req.query.userid];
	//var accessToken = "9e8ba2172cfa3b31c8e41dfd4741866752101b04";
	var options = {
		host: "api.github.com",
		path: "/user",
		method: "GET",
		headers: {
			'user-agent': 'Programmers of Caribbean',
			'Authorization': 'token ' + accessToken
		}
	};
	var request = https.request(options, function(response) {
		var chunks = [];
		response.on('data', function(chunk) {
			chunks.push(chunk);
		});
		response.on('end', function() {
			var buffer = Buffer.concat(chunks);
			console.log("response => " + buffer.toString());
			var json = JSON.parse(buffer.toString());
			res.render('../view/templates/home.jade', {'src': json.avatar_url, 'nick': json.login, 'email': json.email});
		});
	});	
	request.end();
});

var port = process.env.PORT || 5000;
app.listen(port);
