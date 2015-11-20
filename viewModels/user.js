//對mongodb的操作
var mongodb = require('../models/db');

//Constructor Pattern for Creating Objects
//user: name, password, email
function User(user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
}

//module concept
module.export = User;

//save
User.save = function(callback) {
    //準備想儲存的物件
    var user = {
        name: this.name,
        password: this.password,
        email: this.email
    };
    //打開資料庫
    mongodb.open(function(err, db) {
        if (err) {
            return callback(err);
        }
        db.collection(function(err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            collection.insert(user, {
                safe: true
            }, function(err, data) {
                mongodb.close();
                if (err) {
                    return callback(err);
                }
                callback(null, user[0]);
            });
        });
    });
};
//get
User.get = function(name, callback) {
    mongodb.open(function(err, db) {
        if (err) {
            return callback(err);
        }
        db.collection(function(err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            collection.find({
                "name": name
            }, function(err, data) {
                mongodb.close();
                if (err) {
                    return callback(err);
                }
                callback(null, data);
            });
        });
    });
};
