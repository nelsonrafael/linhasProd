//
// (c) 2018 Nélson Rafael Martins All Rights Reserved
//
// Filename: index.js
//
// Import express
let express = require('express');

// Import body parser
let bodyParser = require('body-parser');

// Import Mongoose
let mongoose = require('mongoose');

// Import routes
let apiRoutes = require("./api-routes");

// Import CORS
let cors = require('cors');

// Initialize the app
let app = express();

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

app.use(cors());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/linhasprod', { useNewUrlParser: true });

var db = mongoose.connection;

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req,res) => res.send('Hello World'));

// Use Api routes in the app
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
	console.log("Running LinhasProd on port " + port);
});

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


