function TvController() {}

TvController.openTv = function(callback) {
    console.log('open tv');
    callback();
};
TvController.selectChanel = function(callback) {
    console.log('change to movie channel');
    callback();
};
TvController.closeTv = function(callback) {
    console.log('close tv');
    if (callback)
        callback();
};

function watchingTv(callback) {
    setTimeout(function() {
        console.log('watching');
        callback();
    }, 5000);
}

TvController.openTv(function() {
    TvController.selectChanel(function() {
        watchingTv(function() {
            TvController.closeTv();
        });
    });
});


var TvController = require('./TvController.js');

TvController.openTv();

var NewTvController = new TvController(["new", "cartoons", "sports"]);

NewTvController.selectChanel(0);



//Object literal

var TvController = {
    list: ["new", "cartoons", "sports"],
    vendor: "Sony",
    size: "32 inch",
    open: function() {
        console.log('open tv');
    }
};
console.log(TvController.vendor);

//Object Constructor
var TvController = new Object();
TvController.list = ["new", "cartoons", "sports"];
TvController.vendor = "Sony";
TvController.open = function() {
    console.log('open tv');
};
console.log(TvController.vendor);

//Prototype Pattern for Creating Objects
function TvController(list, vendor) {
    this.vendor = vendor;
    this.list = list;
}
TvController.prototype.open = function() {
    console.log(this.vendor + ': open tv');
};
var SonyTvController = new TvController(["news", "cartoons", "sports"], "Sony");
var SamsungTvController = new TvController(["news", "cartoons", "sports"], "Samsung");
SonyTvController.open();
SamsungTvController.open();


//Constructor Pattern for Creating Objects
function TvController(list, vendor) {
    this.list = list;
    this.vendor = vendor;
    this.open = function() {
        console.log(this.vendor + ': open tv');
    };
}

var SonyTvController = new TvController(["news", "cartoons", "sports"], "Sony");
var SamsungTvController = new TvController(["news", "cartoons", "sports"], "Samsung");
SonyTvController.open();
SamsungTvController.open();

var TvController = require('./TvController.js');

TvController.openTv();

var NewTvController = new TvController(["new", "cartoons", "sports"]);

NewTvController.selectChanel(0);
