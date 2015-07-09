var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');

var bodyParser = require('body-parser');

app.engine('html', require('ejs').renderFile);
app.use("/stylesheets", express.static(__dirname + '/stylesheets'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/javascripts", express.static(__dirname + '/javascripts'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies

// ====================================
// URL PARAMETERS =====================
// ====================================
// http://localhost:8080/
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ====================================
// POST PARAMETERS ====================
// ====================================

// POST http://localhost:8080/purchases
// parameters sent with 
app.post('/purchases', function(req, res) {
    res.send('OK');
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);