var setting = require('./models/setting');
var mongodb = require('mongodb');
var db = mongodb.Db;
var connection = mongodb.Connection;
var server = mongodb.Server;

//new db(db名稱, new server(ip, port),{參數})
module.exports = new db(setting.db, new server(setting.host, setting.port), {
    safe: true
});
