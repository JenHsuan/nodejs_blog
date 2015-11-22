var post = require("./post");

post.get(function(err, data) {
    data.forEach(function(post, index) {
        console.log(post.name);
    });
});
post.edit("allen", "2015-11-22", "test", function(err, data) {
    console.log(data.post);
});

post.update("allen", "2015-11-22", "test", "update", function(err, data) {
    console.log(data);
});

var newPost = new post("allen", "tt", "123");
newPost.save(function(err, data) {

});

post.remove("allen", "tt", "123", function(err, data) {
    console.log(data);
});
