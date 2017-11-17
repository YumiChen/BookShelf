var express = require('express');
var BodyParser = require( 'body-parser' );

var path = require('path');
var router = require('./routes.js');

// App setup
var app = express();
app.set('port',(process.env.port || 4000));
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

// Static files
app.use(express.static('public'));


app.use( BodyParser.urlencoded( { extended: false } ) );
app.use( BodyParser.json() );

app.use("/",router);