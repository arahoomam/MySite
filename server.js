/**
 * Created by mamoruohara on 12/12/16.
 */
var express = require('express');
var app = express();

var path = require('path');
app.use(express.static(__dirname + '/public'));
app.use('/node', express.static(path.join(__dirname, '/node_modules')));
app.use('/semantic', express.static(path.join(__dirname, '/semantic')));

var port = process.env.PORT || 3000;
console.log("Express server running on " + port);
app.listen(process.env.PORT || port);