// web.js
var express = require("express");
var logfmt = require("logfmt");
var ejs = require("ejs");
var fs = require("fs");

var app = express();

app.use(logfmt.requestLogger());

app.configure(function() {
	app.engine('html', ejs.renderFile);
	app.use('/resources', express.static(__dirname + "/../resources"));
});

app.get('/', function(req, res) {
	res.render("../view/templates/landing.html");
});

var port = process.env.PORT || 5000;
app.listen(port);
