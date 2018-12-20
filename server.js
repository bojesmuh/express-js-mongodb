const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const app = express();

/**
* Routes
*/
const customer_route = require("./routes/customer_route");// Imports routes for the customer
const path = require('path');

/**
* End Routes
*/


/**
* Config Monggo DB
*/
const db_mongo = require("./config/mongodb").mongoURI;
mongoose.Promise = global.Promise;

mongoose
.connect(db_mongo)
.then(() => console.log("mongoDB Connected"))
.catch((err) => console.log(err));

/**
* End Config Monggo DB
*/


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/customer',customer_route);


/**
 * Run Server
 */
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server running on port "+port));

/**
 * End Run Server
 */