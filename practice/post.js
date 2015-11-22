var fs = require("fs");

var file = './db.json';


//private 
function readJsonFile(callback) {
    fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
            console.log('Error: ' + err);
            callback(err);
            return;
        }
        data = JSON.parse(data);
        //console.log(data.item);
        callback(null, data.item);
    });
}

function scanDatas(data, name, day, title, callback) {
    for (var i in data) {
        var _name = data[i].name;
        var _day = data[i].time.day;
        var _title = data[i].title;
        if (_name === name && _day === day && _title === title) {
            //update
            //console.log(i);
            callback(null, i);
            return;
        }
    }
}

function removeOneData(data, name, day, title, callback) {
    scanDatas(data, name, day, title, function(err, index) {
        //console.log(data[index]);
        data.splice(index, 1);
        callback(null, data);
    });
}

function getOneData(data, name, day, title, callback) {
    scanDatas(data, name, day, title, function(err, index) {
        //console.log(data[index]);
        callback(null, data[index]);
    });
}

function updateData(data, name, day, title, post, callback) {
    scanDatas(data, name, day, title, function(err, index) {
        //console.log(data[index]);
        data[index].post = post;
        callback(null, data);
    });
    //for (var i in data) {
    //    var _name = data[i].name;
    //    var _day = data[i].time.day;
    //    var _title = data[i].title;
    //    if (_name === name && _day === day && _title === title) {
    //        data[i].post = post;
    //        callback(null, data);
    //        return;
    //    }
    //}
}

//public

function Post(name, title, post) {
    this.name = name;
    this.title = title;
    this.post = post;
}

module.exports = Post;

Post.get = function(callback) {
    readJsonFile(function(err, data) {
        callback(null, data);
    });
};

Post.prototype.save = function(callback) {
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
        time: time,
        title: this.title,
        post: this.post
    };
    fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
            console.log('Error: ' + err);
            callback(err);
            return;
        }
        data = JSON.parse(data);
        data.item.push(post);
        fs.writeFile(file, JSON.stringify(data), function(err) {
            callback(err);
        });
        callback(null);
    });
};

Post.edit = function(name, day, title, callback) {
    readJsonFile(function(err, data) {
        getOneData(data, name, day, title, function(err, data) {
            callback(null, data);
        });

    });
};

Post.update = function(name, day, title, post, callback) {
    readJsonFile(function(err, data) {
        updateData(data, name, day, title, post, function(err, data) {
            callback(null, data);
        });
    });
};

Post.remove = function(name, day, title, callback) {
    readJsonFile(function(err, data) {
        removeOneData(data, name, day, title, function(err, data) {
            callback(null, data);
        });
    });
};
