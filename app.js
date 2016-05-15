var express = require('express');

var app = express(); 
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/users_db');
mongoose.connect('mongodb://michelle:123456@ds023432.mlab.com:23432/smartgoaltracker');

require('./config/express').addMiddleware(app)
require('./routes')(app)

app.listen(4000, function() {
  console.log('Express server listening.');
});
