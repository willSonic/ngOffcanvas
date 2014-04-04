var express = require('express');

var app = express();

exports.offcanvas = function(req, res){
    res.render('index.html', { title: 'Index' });
}