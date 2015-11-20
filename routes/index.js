var express = require('express');
var Post = require('../models/post');
//新增關於使用者的模組
var crypto = require('crypto');
var User = require('../models/user');
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
    app.get('/blog_login', function(req, res) {
        res.render('/blog_login');
    });
    app.post('/blog_login', function(req, res) {});
    app.get('/blog_post', function(req, res) {
        res.render('/blog_post', {
            title: 'post'
        });
    });
    app.post('/blog_post', function(req, res) {
        var password = req.body.password,
            passwordRepeat = req.body.passwordRepeat,
            name = req.body.name;
        if (passwordRepeat != password) {
            req.flash('error', 'The password was not match!');
            req.redirect('/blog_post');
        }
        //sha hex
        var passwordCrypto = crypto.createHash('sha1').update(req.body.password).digest('hex');
        var newUser = new User({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        });
        User.get(req.body.name, function(err, user) {
            if (user) {
                req.flash('error', 'This user was already exist!');
                req.redirect('/blog_post');
            }
            newUser.save(function(err, user) {
                if (user) {
                    req.flash('error', err);
                    req.redirect('/blog_reg');
                }
                req.session.user = user;
                req.flash('success', 'Register success!');
                req.redirect('/blog_main');
            });
        });
    });
};
