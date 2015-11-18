var express = require('express');
var post = require('../models/post');
//var setting = require('../models/setting');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//    res.render('index', {
//        title: 'Express'
//    });
//});

//module.exports = router;
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index', {
            title: 'Express'
        });
    });
    app.get('/blog_post', function(req, res) {
        res.render('/blog_post', {
            title: 'post'
        });
    });
    app.post('/blog_post', function(req, res) {});
};
