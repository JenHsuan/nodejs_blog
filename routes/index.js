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
    app.get('/blog_main', function(req, res) {
        Post.get(function(err, posts) {
            if (err) {
                posts = [];
            }
            res.render('/blog_main', {
                title: 'main',
                posts: posts
            });
        });
    });
    app.get('/blog_post', function(req, res) {
        res.render('/blog_post', {
            title: 'post'
        });
    });
    app.post('/blog_post', function(req, res) {
        var newPost = new Post(req.body.name, req.body.title, req.body.post);
        newPost.save(function(err, data) {
            res.redirect('/blog_main');
        });

    });
};
