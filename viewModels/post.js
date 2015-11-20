//對mongodb的操作
var mongodb = require('../models/db');

function Post(name, title, post) {
    this.name = name;
    this.title = title;
    this.post = post;
}
module.exports = Post;

Post.save = function(callback) {
    //準備想儲存的物件
    //date, time, post object
    var date = new Date();
    var time = {
        date: date,
        year: date.getFullYear(),
        month: date.getFullYear() + "-" + (date.getMonth() + 1),
        day: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
        minute: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
    };
    var post = {
        name: this.name,
        time: this.time,
        title: this.title,
        post: this.post
    };
    //打開資料庫
    mongodb.open(function(err, db) {
        if (err) {
            return callback(err);
        }
        //讀取post 集合(如同ＲＤＢＭＳ中的table)
        db.collection('posts', function(err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            //將文件檔插入集合(如同ＲＤＢＭＳ中的table)
            collection.insert(post, {
                    safe: true
                },
                //成功或失敗時的處理函式
                function(err, data) {
                    //無論成功或失敗都先關閉資料庫
                    mongodb.close();
                    if (err) {
                        return callback(err);
                    } else {
                        callback(null);
                    }
                });
        });
    });
};
Post.get = function(name, callback) {
    mongodb.open(function(err, db) {
        if (err) {
            return callback(err);
        }
        db.collection('posts', function(err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            //查詢集合
            collection.find({
                    "name": name

                })
                //依時間排序
                .sort({
                    time: -1
                }).toArray(function(err, docs) {
                    mongodb.close();
                    if (err) {
                        return callback(err);
                    }
                    callback(null, docs);
                });
        });
    });
};
