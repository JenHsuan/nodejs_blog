//說明module
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var setting = require('./models/setting');
var routes = require('./routes/index');
//var users = require('./routes/users');
var app = express();

//登錄註冊功能
var flash = require('connect-flash');

// view engine setup, 說明視圖系統
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//將資訊寫入flash
app.use(flash());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

//用來解析req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//說明路由系統
//app.use('/', routes);
//app.use('/users', users);
routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//app.use(session({
//    secret: setting.secret,
//    key: setting.db,
//    cookie: {
//        maxAge: 1000 * 60 * 60 * 24 * 30
//    },
//    store: new MongoStore({
//        db: setting.db,
//        host: setting.host,
//        port: setting.port
//    })
//}));

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

//listen port 8080
app.listen(8080);
