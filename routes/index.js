var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

//module.exports = router;
module.exports = function(app) {

    //Edit by Sean 15.10.12
    app.get('/', function(req, res) {
        res.render('main', {
            title: 'Main page'
        });
    });
    app.get('/register', function(req, res) {
        res.render('register', {
            title: 'Register page'
        });
    });
    app.post('/register', function(req, res) {});
    app.get('/login', function(req, res) {
        res.render('login', {
            title: 'Login page'
        });
    });
    app.post('/login', function(req, res) {});
    app.get('/post', function(req, res) {
        res.render('post', {
            title: 'Post page'
        });
    });
    app.post('/post', function(req, res) {});
    app.post('/logout', function(req, res) {});
};
